const router = require("express").Router();
const userManager = require("../managers/userManager");
const TOKEN_KEY = "authToken";

//  Login requests

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const token = await userManager.login(email, password);

//     res.cookie(TOKEN_KEY, token);

//   } catch (err) {

//   }
// });

//TODO  Register requests
router.get('/register', (req, res) => {
    res.send('register')
})

router.post("/register", async (req, res) => {
    const userData = req.body;
    userData.email = userData.email.toLowerCase();
    try {
        const token = await userManager.register(userData);
        res.status(200).send(token)
    } catch (err) {
        console.log("Node error: " + err);
    }
});

//  Log out

router.get("/logout", (req, res) => {
    res.clearCookie("token");
});
module.exports = router;
