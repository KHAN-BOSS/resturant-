import { GoogleGenAI, Chat } from "@google/genai";
import { MENU_ITEMS } from "../constants";

let chatSession: Chat | null = null;

const formatMenuForAI = () => {
  return MENU_ITEMS.map(item => `${item.name} ($${item.price}) - ${item.description}`).join('\n');
};

const SYSTEM_INSTRUCTION = `
You are "Roasty", the friendly AI waiter for the restaurant "Flavors House".
Your goal is to help customers choose items from the menu, answer questions about ingredients, and provide a pleasant dining experience.

Here is the current menu:
${formatMenuForAI()}

Rules:
1. Be polite, enthusiastic, and concise.
2. If asked about delivery time, mention our "Express 30-Minute Guarantee".
3. Only recommend items that are on the menu provided above.
4. Keep responses under 50 words unless asked for a detailed description.
`;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I didn't catch that. Could you repeat?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to the kitchen right now. Please try again.";
  }
};