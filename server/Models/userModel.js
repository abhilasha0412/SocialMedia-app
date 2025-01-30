// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema (
//     {
//         email: {
//             types: String,
//             required: true,
//             unique: true
//         },
//         password: {
//             type: String,
//             required: true
//         },
//         firstname: {
//             type: String,
//             required: true
//         },
//         lastname: {
//             type: String,
//             required: true
//         },
//         isAdmin: {
//             type: Boolean,
//             default: false
//         },
//         profilePicture: String,
//         coverPicture: String,
//         about: String,
//         livesin: String,
//         worksAt: String,
//         country: String,
//         relationship: String,
//         followers: [],
//         following: []
//     },
//     { timestamps: true }
// )
// const UserModel = mongoose.model("Users", UserSchema);

// export default UserModel

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // ✅ Correct
    email: { type: String, required: [true, "Email is required"] }, // ✅ Correct with custom error message
    password: { type: String, required: true },
    age: Number, // Optional field (not required)
});

const User = mongoose.model("User", userSchema);
export default User;
