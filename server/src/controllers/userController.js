const router = require("express").Router();
const userManager = require("../managers/userManager");
const User = require("../models/User");
const TokenBlacklist = require("../models/TokenBlackList");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "SoftSecret";
const { authCookieName } = require("../app-config");
const perfumeManager = require("../managers/perfumeManager");
const bcrypt = require("bcrypt");

//  Login requests

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then((user) => {
            if (!user) {
                throw new Error("Wrong email!");
            }
            return Promise.all([
                user,
                user ? user.matchPassword(password) : false,
            ]);
        })
        .then(([user, match]) => {
            if (!match) {
                res.status(401).send({ message: "Wrong email or password" });
                return;
            }
            user = bsonToJson(user);
            const token = createToken({ id: user._id });

            if (process.env.NODE_ENV === "production") {
                res.cookie(authCookieName, token, {
                    httpOnly: true,
                    sameSite: "none",
                    secure: true,
                });
            } else {
                res.cookie(authCookieName, token, { httpOnly: true });
            }
            res.status(200).send(user);
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
});

router.post("/register", async (req, res) => {
    const { email, phonenumber, password, rePass } = req.body;
    try {
        if(password != rePass) {
            throw new Error ('Passwords dont match!')
        }
    } catch (error) {
        return res.status(400).send(error.message)
    }
    return User.create({ email, phonenumber, password, rePass })
        .then((createdUser) => {
            createdUser = bsonToJson(createdUser);
            const token = createToken({ id: createToken._id });
            if (process.env.NODE_ENV === "production") {
                res.cookie(authCookieName, token, {
                    httpOnly: true,
                    sameSite: "none",
                    secure: true,
                });
            } else {
                res.cookie(authCookieName, token,{ httpOnly: true });
            }
            res.status(200).send(createdUser);
        })
        .catch((err) => {
            res.status(400).send("Email already exist");
        });
});

function createToken(data) {
    return jwt.sign(data, secret, { expiresIn: "2d" });
}
const bsonToJson = (data) => {
    return JSON.parse(JSON.stringify(data));
};
//  Log out

router.post("/logout", (req, res) => {
    const token = req.cookies[authCookieName];
    TokenBlacklist.create({ token })
        .then(() => {
            res.clearCookie(authCookieName)
                .status(204)
                .send({ message: "Logged out!" });
        })
        .catch((err) => {
            res.status(400).send(err.message);
        });
});

router.post('/profile', async(req, res) => {
    const owner = req.body;
    const perfumes = await perfumeManager.getByUser(owner)
    res.send(perfumes)
    return perfumes
})

router.post('/editProfile', async (req, res) => {
    console.log(req.body.creator);
    const newUser = req.body.user;
    const oldUser = req.body.creator;

    // const hash = await bcrypt.hash(newUser, 10);

    // newUser.password = hash;

    const edited = await userManager.editProfile(oldUser.id, newUser)
    res.send(edited);
    return edited;
})
module.exports = router;
