"use client";

import { motion } from "motion/react";
import { ArrowDown, Heart, Sparkles } from "lucide-react";

export default function ChapterOne({ item, onContinue }) {
  const content = item?.content;

  return (
    <section
      className="
    relative
    flex
    h-full
    min-h-0
    items-center
    justify-center
    overflow-hidden
    bg-[#0b070d]
    px-5
    py-10
    text-white
    sm:px-6
    sm:py-14
  "
    >
      {/* Background glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[130px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative stars */}
      <motion.div
        className="absolute left-[12%] top-[20%]"
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="h-5 w-5 text-pink-300/70" />
      </motion.div>

      <motion.div
        className="absolute right-[15%] top-[28%]"
        animate={{
          opacity: [1, 0.2, 1],
          scale: [1.2, 0.8, 1.2],
        }}
        transition={{
          duration: 2.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="h-4 w-4 text-pink-200/60" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Chapter number */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.45em] text-pink-300/70"
        >
          <span className="h-px w-8 bg-pink-300/30" />
          Chapter 01
          <span className="h-px w-8 bg-pink-300/30" />
        </motion.div>

        {/* Heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            type: "spring",
          }}
          className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-pink-300/20 bg-pink-500/10"
        >
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
          className="font-serif text-5xl leading-tight sm:text-6xl md:text-7xl"
        >
          {item?.title || "The Beginning"}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.1,
            duration: 1,
          }}
          className="mt-5 text-sm uppercase tracking-[0.3em] text-white/35"
        >
          {item?.subtitle || "Every story has a beginning..."}
        </motion.p>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="mt-10 space-y-4 text-base leading-8 text-white/65 sm:text-lg"
        >
          <p>{content?.intro}</p>

          {content?.message?.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.7 + index * 0.2,
                duration: 0.7,
              }}
            >
              {line}
              {index === content.message.length - 1 && " ❤️"}
            </motion.p>
          ))}
        </motion.div>

        {/* Continue */}
        <motion.button
          onClick={onContinue}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.2,
            duration: 0.8,
          }}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="group mt-12 flex items-center gap-3 rounded-full border border-pink-300/20 bg-pink-500/10 px-7 py-3.5 text-sm text-pink-100 backdrop-blur-sm transition-colors hover:bg-pink-500/20"
        >
          Let's begin
          <Heart className="h-4 w-4 fill-pink-400 text-pink-400 transition-transform group-hover:scale-110" />
        </motion.button>

        {/* Continue indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.8,
            duration: 1,
          }}
          className="mt-8 flex flex-col items-center gap-2 text-white/25"
        >
          <span className="text-[10px] uppercase tracking-[0.35em]">
            Continue the journey
          </span>

          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
