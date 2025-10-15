import { Router, Request, Response } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const aiRouter = Router();

// Initialize Gemini with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

interface CareerRequestBody {
  name: string;
  skills: string;
  interests: string;
  personality?: string;
}

aiRouter.post("/suggest-career", async (req: Request, res: Response) => {
  try {
    const { name, skills, interests, personality } = req.body as CareerRequestBody;

   // latest supported model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
  You are providing personalized career guidance directly to ${name}.
  ${name}, you have the following skills: ${skills}.
  Your interests are: ${interests}.
  Your personality type (Enneagram) is: ${personality || "Not provided"}.

  Even if information is limited, you must still suggest exactly 3 suitable career paths.
  Do not respond with messages like "no documents found" or "no match".
  You must always generate meaningful recommendations based on reasoning and general knowledge.

  For each career, provide:
  1. Career Name
  2. Reason why it fits your skills, interests, and personality
  3. List of **free online resources with real URLs**
  4. Next actionable step to get started

  Always address the user directly ("you", "your"). 
  Return the response as **JSON ONLY**.

  Format example:
  [
    {
      "career": "Career Name",
      "reason": "Reason text",
      "resources": [
        {"name": "Resource 1", "link": "https://example.com"},
        {"name": "Resource 2", "link": "https://example.com"}
      ],
      "nextStep": "Suggested next action"
    }
  ]
`;

    // Generate response from Gemini
    const result = await model.generateContent(prompt);
    const rawText = await result.response.text();

    console.log("Gemini raw response:", rawText);

    // Clean and parse the JSON
    const cleaned = rawText.replace(/```json|```/g, "").trim();
    let suggestions;

    try {
      suggestions = JSON.parse(cleaned);
    } catch (e) {
      console.error("JSON parse failed:", e);
      suggestions = [
        {
          career: "Error",
          reason: "Failed to parse AI response",
          resources: [],
          nextStep: "Retry with different input"
        }
      ];
    }

    res.json({ suggestions });
  } catch (error) {
    console.error("Career suggestion error:", error);
    res.status(500).json({ error: "Failed to generate career suggestions" });
  }
});

export default aiRouter;
