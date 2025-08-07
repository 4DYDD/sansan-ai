import { motion } from "framer-motion";

/**
 * Komponen Maskot
 * - Menampilkan emoji/gambar maskot sesuai emosi
 * - Animasi framer-motion
 * - Mudah diganti ke gambar custom
 */
export type EmotionKey = string;
export type EmotionsMap = Record<string, { label: string; emoji: string }>;

export default function Mascot({
  emotion,
  EMOTIONS,
}: {
  emotion: EmotionKey;
  EMOTIONS: EmotionsMap;
}) {
  return (
    <div className="flex justify-center mb-2">
      <motion.div
        key={emotion}
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0.8, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-6xl md:text-7xl select-none"
      >
        {/*
          Ganti emoji ini dengan <img src=... /> jika sudah ada gambar maskot.
          Mudah diganti: tinggal ganti emoji/gambar di EMOTIONS[emotion].emoji
        */}
        {EMOTIONS[emotion]?.emoji || "🤖"}
      </motion.div>
    </div>
  );
}
