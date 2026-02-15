
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export class VisionService {
  private ai: GoogleGenAI;
  private chat: any;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }],
        temperature: 0.2,
      },
    });
  }

  async sendMessage(message: string) {
    try {
      const result = await this.chat.sendMessage({ message });
      const text = result.text;
      const sources = result.candidates?.[0]?.groundingMetadata?.groundingChunks?.map(
        (chunk: any) => chunk.web?.uri || chunk.web?.title
      ).filter(Boolean);

      return {
        text,
        sources: sources || []
      };
    } catch (error) {
      console.error("Vision API Error:", error);
      throw error;
    }
  }
}
