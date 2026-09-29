"use client";

import { motion } from "motion/react";
import { ArrowRight, Heart, Sparkles, Quote } from "lucide-react";

export default function ChapterTwo({ item, onContinue }) {
  const chapter = item?.chapter ?? 2;

  const title = item?.title ?? "A Little Thought";

  const subtitle = item?.subtitle ?? "Just a little something from my heart...";

  const content =
    item?.content ??
    "Some people make ordinary days feel a little more beautiful.";

  const personalNote = Array.isArray(item?.personalNote)
    ? item.personalNote
    : [
        "Bas ek chhoti si baat...",
        "tum shayad realize nahi karti,",
        "lekin tum meri life mein kaafi kuch beautiful bana deti ho. ❤️",
      ];

  return (
    <section
      className="
        relative
        h-full
        min-h-0
        w-full
        overflow-hidden
        bg-[#0b070d]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-500/[0.08]
          blur-[110px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[140px]
        "
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[25%]
          top-[30%]
          h-32
          w-32
          rounded-full
          bg-pink-500/[0.05]
          blur-[70px]
        "
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          DECORATIVE ELEMENTS
      ====================================================== */}

      <motion.div
        className="pointer-events-none absolute left-[10%] top-[20%]"
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.8, 1.15, 0.8],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="h-4 w-4 text-pink-300/50" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute right-[11%] top-[27%]"
        animate={{
          opacity: [0.8, 0.2, 0.8],
          scale: [1.1, 0.8, 1.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="h-5 w-5 text-purple-300/50" />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-[20%]
          left-[14%]
          text-pink-400/[0.08]
        "
        animate={{
          y: [0, -12, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="h-8 w-8 fill-current" />
      </motion.div>

      {/* =====================================================
          SCROLLABLE PAGE CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          h-full
          min-h-0
          w-full
          overflow-y-auto
          overscroll-contain
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        <div
          className="
            flex
            min-h-full
            w-full
            items-center
            justify-center
            px-5
            py-14
            pb-24
            sm:px-8
            sm:py-16
            sm:pb-24
          "
        >
          <div
            className="
              flex
              w-full
              max-w-2xl
              flex-col
              items-center
              text-center
            "
          >
            {/* =================================================
                CHAPTER
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.45em]
                text-pink-300/60
                sm:text-[11px]
              "
            >
              <span className="h-px w-6 bg-pink-300/25 sm:w-10" />
              Chapter {String(chapter).padStart(2, "0")}
              <span className="h-px w-6 bg-pink-300/25 sm:w-10" />
            </motion.div>

            {/* =================================================
                HEART
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
                type: "spring",
                stiffness: 180,
              }}
              className="
                mt-5
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-pink-300/15
                bg-pink-500/[0.08]
                shadow-[0_0_35px_rgba(236,72,153,0.08)]
                sm:mt-6
                sm:h-14
                sm:w-14
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart
                  className="
                    h-5
                    w-5
                    fill-pink-400
                    text-pink-400
                    sm:h-6
                    sm:w-6
                  "
                  strokeWidth={1.5}
                />
              </motion.div>
            </motion.div>

            {/* =================================================
                TITLE
            ================================================== */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                max-w-3xl
                font-serif
                text-4xl
                leading-[1.05]
                text-white
                sm:mt-6
                sm:text-5xl
                md:text-6xl
              "
            >
              {title}
            </motion.h2>

            {/* =================================================
                SUBTITLE
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
              className="
                mt-3
                max-w-md
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-white/30
                sm:mt-4
                sm:text-[11px]
                sm:tracking-[0.35em]
              "
            >
              {subtitle}
            </motion.p>

            {/* =================================================
                QUOTE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                mt-9
                w-full
                max-w-xl
                px-7
                sm:mt-10
                sm:px-12
              "
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 1.35,
                  duration: 0.6,
                }}
                className="
                  mx-auto
                  mb-4
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-pink-500/[0.07]
                  text-pink-400/50
                "
              >
                <Quote className="h-4 w-4" strokeWidth={1.5} />
              </motion.div>

              <p
                className="
                  font-serif
                  text-xl
                  leading-8
                  text-white/80
                  sm:text-2xl
                  sm:leading-10
                  md:text-[26px]
                  md:leading-[1.65]
                "
              >
                {content}
              </p>

              <div className="mx-auto mt-5 h-px w-10 bg-pink-400/20" />
            </motion.div>

            {/* =================================================
                PERSONAL NOTE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.8,
                duration: 0.8,
              }}
              className="
                mt-7
                max-w-md
                text-xs
                leading-6
                text-white/45
                sm:mt-8
                sm:text-sm
                sm:leading-7
              "
            >
              {personalNote.map((line, index) => (
                <p
                  key={`${chapter}-note-${index}`}
                  className={
                    index === personalNote.length - 1 ? "text-white/55" : ""
                  }
                >
                  {line}
                </p>
              ))}
            </motion.div>

            {/* =================================================
                CONTINUE BUTTON
            ================================================== */}

            <motion.button
              onClick={onContinue}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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
              className="
                group
                mt-8
                flex
                shrink-0
                items-center
                gap-3
                rounded-full
                border
                border-pink-300/20
                bg-pink-500/[0.08]
                px-6
                py-3
                text-xs
                text-pink-100
                shadow-[0_10px_40px_rgba(236,72,153,0.06)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-pink-300/30
                hover:bg-pink-500/[0.14]
                sm:px-7
                sm:py-3.5
                sm:text-sm
              "
            >
              <span>Continue the journey</span>

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
