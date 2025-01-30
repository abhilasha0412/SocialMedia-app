// import mongoose from "mongoose"

// const postSchema = mongoose.Schema(
//     {
//         userId: {type: String, required: true },
//         desc: String,
//         likes: [],
//         image: String
//     },
//     {
//         timestamp: true,
//     }
// )
// const PostModel = mongoose.model("Posts", postSchema);

// export default postModel
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema); // ✅ Define the model correctly

export default Post; // ✅ Export the model correctly
