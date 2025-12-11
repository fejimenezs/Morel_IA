import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class AiService {
  private readonly client: GoogleGenerativeAI;

  constructor() {
    const apiKey = process.env.GOOGLE_GENAI_API_KEY;
    if (!apiKey) {
      throw new Error('GOOGLE_GENAI_API_KEY is not set');
    }
    this.client = new GoogleGenerativeAI(apiKey);
  }

  async analyzeSession(text: string) {
    const model = this.client.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(text);
    const response = result.response;
    const aiSummary = response.text();

    return { aiSummary };
  }
}
