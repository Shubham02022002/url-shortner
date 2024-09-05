import mongoose from "mongoose";

const UrlSchema = mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const Url = mongoose.model("url", UrlSchema);

export default Url;
