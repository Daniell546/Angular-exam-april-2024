const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: [true, "Email already exist..."]
        },
        phonenumber: {
            required: true,
            type: Number,
            unique: [true, "Phonenumber already exist..."]
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

userSchema.virtual("repeatPasswords").set(function (value) {
    if (value !== this.password) {
        throw new mongoose.MongooseError("Passwords missmatch");
    }
});

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
