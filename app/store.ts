import { create } from "zustand";
import { persist } from "zustand/middleware";

// Tipe data untuk satu pesan chat
export type ChatMessage = {
  id: string;
  sender: "user" | "ai";
  text: string;
  emotion?: string; // emosi yang di-trigger jika ada
  timestamp: number;
};

// Tipe data untuk state global
interface ChatState {
  messages: ChatMessage[];
  quota: number;
  maxQuota: number;
  addMessage: (msg: ChatMessage) => void;
  updateMessage: (id: string, updates: Partial<ChatMessage>) => void;
  resetChat: () => void;
}

/**
 * Store Zustand untuk chat LLM
 * - Menyimpan histori chat dan kuota di localStorage
 * - addMessage: menambah pesan dan mengurangi kuota
 * - resetChat: menghapus histori dan reset kuota
 */
export const useChatStore = create<ChatState>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, get) => ({
      messages: [],
      quota: 100,
      maxQuota: 100,
      addMessage: (msg) => {
        // Setiap pesan (user/ai) mengurangi kuota 1
        set((state) => ({
          messages: [...state.messages, msg],
          quota: state.quota > 0 ? state.quota - 1 : 0,
        }));
      },
      updateMessage: (id, updates) => {
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === id ? { ...msg, ...updates } : msg
          ),
        }));
      },
      resetChat: () => set(() => ({ messages: [], quota: 100 })),
    }),
    {
      name: "chat-llm-storage", // nama key di localStorage
    }
  )
);
