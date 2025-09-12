import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config(); 

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { age, skinType, concerns } = req.body;

    const prompt = `Give skincare advice for:
    Age: ${age}
    Skin type: ${skinType}
    Concerns: ${concerns}.
    Please return the response in short, clear bullet points also suggest some darma products  `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);

    const rawAdvice = result.response.text();

    // ✅ Format advice into array
    const adviceList = rawAdvice
      .split("\n")
      .map(line => line.replace(/^[•\-*]\s*/, "").trim()) // remove bullets/symbols
      .filter(line => line.length > 0);

    res.json({ advice: adviceList });
  } catch (error) {
    console.error("❌ Gemini API Error:", error);
    res.status(500).json({ advice: ["⚠️ Server error. Please try again."] });
  }
});

export default router;
