"use client";

import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";

const floatingItems = [
  { id: 1, symbol: "❤️", left: "8%", delay: 0 },
  { id: 2, symbol: "✦", left: "18%", delay: 1.2 },
  { id: 3, symbol: "♡", left: "30%", delay: 2.1 },
  { id: 4, symbol: "✧", left: "45%", delay: 0.7 },
  { id: 5, symbol: "❤️", left: "62%", delay: 1.8 },
  { id: 6, symbol: "✦", left: "75%", delay: 2.8 },
  { id: 7, symbol: "♡", left: "88%", delay: 1.5 },
];

export default function WelcomeScreen() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b070d] px-6 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[120px]" />

      {/* Floating particles */}
      {floatingItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute bottom-[-40px] text-lg text-pink-300/60"
          style={{ left: item.left }}
          initial={{
            y: 0,
            opacity: 0,
          }}
          animate={{
            y: "-110vh",
            opacity: [0, 0.8, 0.4, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 8,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.symbol}
        </motion.div>
      ))}

      {/* Small stars */}
      <motion.div
        className="absolute left-[15%] top-[20%]"
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="h-4 w-4 text-pink-200" />
      </motion.div>

      <motion.div
        className="absolute right-[15%] top-[30%]"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="h-5 w-5 text-pink-300" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex max-w-2xl flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        {/* Heart */}
        <motion.div
          className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-pink-300/20 bg-pink-500/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            type: "spring",
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart
              className="h-7 w-7 fill-pink-400 text-pink-400"
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.p
          className="mb-4 text-sm uppercase tracking-[0.4em] text-pink-300/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          A little something for you
        </motion.p>

        <motion.h1
          className="font-serif text-5xl font-medium leading-tight sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hey, Beautiful
          <span className="ml-2">❤️</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-7 max-w-lg text-base leading-7 text-white/60 sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          Tumhare liye kuch banaya hai... ❤️
          <br />
          Isme thodi meri feelings hain, thodi tumhari yaadein,
          <br />
          aur bahut saara woh pyaar jo words mein explain karna mushkil hai.
          <br />
          <span className="text-white/80">
            Toh jaldi mat karna... is journey ko feel karna. 🫶✨
          </span>
        </motion.p>

        {/* Waiting indicator */}
        <motion.div
          className="mt-12 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
        >
          <div className="mb-4 flex items-center gap-2 text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
            <span className="text-sm tracking-widest uppercase">
              A surprise is waiting
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
          </div>

          <motion.div
            className="text-2xl"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom text */}
      <motion.p
        className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs tracking-[0.25em] text-white/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        MADE WITH LOVE ❤️
      </motion.p>
    </section>
  );
}
