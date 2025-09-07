import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "../src/appwrite/config";

// Initialize client
const genAI = new GoogleGenerativeAI(config.geminiapikey);

async function filter(data) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Generate a JSON array of 8-10 fake teammate profiles.
Each profile should include: id, name, username, photo (use https://i.pravatar.cc/150?img=<random number>), and skills.
The user is looking for teammates with:
Role: ${data.role},
Skills: ${data.skills},
Experience: ${data.experience}.

Return ONLY valid JSON, no extra text.Sort in a manner where the best matches appear first.`; 

    const result = await model.generateContent(prompt);
    let text = result.response.text();

    // 🔹 Strip markdown fences if present
    text = text.replace(/```json|```/g, "").trim();

    let profiles = [];
    try {
      profiles = JSON.parse(text);
    } catch (err) {
      console.error("❌ Failed to parse AI JSON:", text);
    }

    return profiles;
  } catch (error) {
    console.error("Gemini filter error:", error);
    return [];
  }
}

export default filter;
