import shortid, { characters } from "shortid";
import Url from "../models/url-shortner.model.js";
export const generateUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ message: "Bro What 💀" });
  }
  const shortId = shortid.generate("8");
  await Url.create({
    url: body.url,
    shortId: shortId,
    visitHistory: [],
  });
  return res.status(200).json({ id: shortId });
};

export const redirectUser = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await Url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
    );
  res.redirect(entry.url);
};

export const urlAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await Url.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};
