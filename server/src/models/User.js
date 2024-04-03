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

const User = mongoose.model("User", userSchema);

module.exports = User;
