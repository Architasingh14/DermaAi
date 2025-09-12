import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dermaRoutes from "./routes/dermaRoutes.js";
import { GoogleGenerativeAI } from "@google/generative-ai";


dotenv.config();
const app = express();

app.use(cors({
  origin: "*",  // ya sirf frontend ka URL
}));
app.use(express.json());

// Routes
app.use("/api/derma", dermaRoutes);

async function testGemini() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Hello Gemini, say hi!");
    console.log("✅ Gemini says:", result.response.text());
  } catch (err) {
    console.error("❌ Test failed:", err);
  }
}

testGemini();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
console.log("Gemini API Key:", process.env.GEMINI_API_KEY);


