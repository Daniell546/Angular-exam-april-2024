const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: [true, "Email already exist..."],
        },
        phonenumber: {
            required: true,
            type: Number,
        },
        password: {
            required: true,
            type: String,
        },
        owner_id: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        timestamps: true,
    }
);

userSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    },
};
// userSchema.virtual("rePass").set(function (value) {
//     if (this.password != value) {
//         throw new Error("Passwords don't match");
//     }
// });

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

userSchema.pre("findOneAndUpdate", async function (next) {
    const update = this.getUpdate();
    
    // Check if the password field is being modified
    if (update.password) {
        const hash = await bcrypt.hash(update.password, 10);
        update.password = hash;
    }

    next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
