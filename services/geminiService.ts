import { GoogleGenAI, Chat } from "@google/genai";
import { BROKER_INFO } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for ${BROKER_INFO.name}, a Real Estate Broker based in ${BROKER_INFO.location}.
Your goal is to help potential clients by answering questions about buying or selling homes, the local market in Spring, TX, and Deanna's services.
Contact Info: Phone ${BROKER_INFO.phone}, Email ${BROKER_INFO.email}.
Tone: Professional, warm, knowledgeable, and concise.
Do not make up listings that are not in the provided context (though you likely won't have specific listing context, general advice is fine).
Always encourage them to contact Deanna directly for specific property inquiries.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string) => {
  const session = getChatSession();
  return await session.sendMessageStream({ message });
};