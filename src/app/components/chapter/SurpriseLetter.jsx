"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Heart, Mail, Sparkles } from "lucide-react";

export default function SurpriseLetter({ onContinue }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="
        relative
        flex
        h-full
        min-h-0
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#0b070d]
        px-5
        py-8
        text-white
        sm:px-8
        sm:py-10
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
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-pink-500/[0.07]
          blur-[110px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[150px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <FloatingSparkle className="left-[12%] top-[22%]" delay={0} />

      <FloatingSparkle className="right-[14%] top-[28%]" delay={1.2} />

      <FloatingSparkle className="left-[18%] bottom-[20%]" delay={2} />

      <FloatingSparkle className="right-[18%] bottom-[22%]" delay={2.8} />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          max-w-3xl
          flex-col
          items-center
          justify-center
        "
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                flex
                flex-col
                items-center
                text-center
              "
            >
              {/* Small heading */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  text-[9px]
                  uppercase
                  tracking-[0.45em]
                  text-pink-300/65
                  sm:text-xs
                "
              >
                <span className="h-px w-7 bg-pink-300/25" />
                A Little Something
                <span className="h-px w-7 bg-pink-300/25" />
              </motion.div>

              {/* Title */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                }}
                className="
                  mt-5
                  font-serif
                  text-4xl
                  text-white
                  sm:text-5xl
                  md:text-6xl
                "
              >
                A Letter For You
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                }}
                className="
                  mt-3
                  max-w-md
                  text-xs
                  leading-6
                  text-white/40
                  sm:text-sm
                  sm:leading-7
                "
              >
                Kuch baatein aisi hoti hain...
                <br />
                jo screen par nahi, dil se padhni chahiye. ❤️
              </motion.p>

              {/* =================================================
                  ENVELOPE
              ================================================== */}

              <motion.button
                type="button"
                onClick={() => setIsOpen(true)}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                }}
                className="
                  group
                  relative
                  mt-10
                  flex
                  h-36
                  w-52
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-pink-300/20
                  bg-pink-500/[0.06]
                  shadow-[0_20px_70px_rgba(0,0,0,0.35)]
                  backdrop-blur-md
                  transition-colors
                  hover:border-pink-300/35
                  hover:bg-pink-500/[0.1]
                  sm:h-40
                  sm:w-60
                "
              >
                {/* Envelope flap */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-1/2
                    overflow-hidden
                  "
                >
                  <div
                    className="
                      absolute
                      left-1/2
                      top-[-48px]
                      h-24
                      w-24
                      -translate-x-1/2
                      rotate-45
                      border
                      border-pink-300/15
                      bg-[#160b15]
                    "
                  />
                </div>

                {/* Mail icon */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-pink-300/20
                    bg-pink-500/10
                  "
                >
                  <Mail
                    className="
                      h-6
                      w-6
                      text-pink-400
                    "
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Heart */}

                <motion.div
                  className="
                    absolute
                    right-4
                    top-4
                  "
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                >
                  <Heart
                    className="
                      h-4
                      w-4
                      fill-pink-400
                      text-pink-400
                    "
                  />
                </motion.div>
              </motion.button>

              {/* Open label */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.5,
                }}
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                "
              >
                <Sparkles className="h-3 w-3" />
                Tap to open
                <Sparkles className="h-3 w-3" />
              </motion.div>
            </motion.div>
          ) : (
            <LetterContent key="letter" onContinue={onContinue} />
          )}
        </AnimatePresence>
      </div>

      {/* Page indicator */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-3
          left-1/2
          -translate-x-1/2
          text-[9px]
          tracking-[0.3em]
          text-white/20
          sm:bottom-4
          sm:text-xs
        "
      >
        A LETTER · ❤️
      </div>
    </section>
  );
}

/* ============================================================
   LETTER CONTENT
============================================================ */
function LetterContent({ onContinue }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        flex
        h-full
        min-h-0
        w-full
        max-w-2xl
        flex-col
        items-center
        justify-start
        px-1
        pb-8
        text-center
        sm:pb-10
      "
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="
          flex
          shrink-0
          items-center
          gap-3
          pt-1
          text-[9px]
          uppercase
          tracking-[0.4em]
          text-pink-300/60
          sm:text-xs
        "
      >
        <span className="h-px w-6 bg-pink-300/20" />
        From My Heart
        <span className="h-px w-6 bg-pink-300/20" />
      </motion.div>

      {/* Letter Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          rotateX: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        transition={{
          delay: 0.4,
          duration: 1,
        }}
        className="
          mt-4
          flex
          min-h-0
          w-full
          flex-1
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-pink-200/[0.08]
          bg-[#120b12]/90
          px-4
          py-4
          text-left
          shadow-[0_25px_80px_rgba(0,0,0,0.4)]
          backdrop-blur-xl

          sm:mt-6
          sm:px-8
          sm:py-7
        "
        style={{
          perspective: "1000px",
        }}
      >
        {/* Letter Top */}
        <div
          className="
            mb-4
            flex
            shrink-0
            items-center
            justify-between
            sm:mb-5
          "
        >
          <Heart
            className="
              h-4
              w-4
              fill-pink-400/70
              text-pink-400/70
            "
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/20
              sm:text-[9px]
            "
          >
            September 30
          </span>
        </div>

        {/* Scrollable Letter Body */}
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            pr-1

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="
              font-serif
              text-lg
              leading-7
              text-white/90
              sm:text-2xl
              sm:leading-9
            "
          >
            My Dearest, ❤️
          </motion.p>

          {/* Message */}
          <div
            className="
              mt-4
              space-y-3
              font-serif
              text-[13px]
              leading-6
              text-white/65

              sm:mt-5
              sm:space-y-4
              sm:text-base
              sm:leading-8
            "
          >
            <AnimatedParagraph delay={1}>
              Happy Birthday! 🎂❤️
            </AnimatedParagraph>

            <AnimatedParagraph delay={1.4}>
              Today is all about celebrating you—
              <br />
              the incredible person you are...
            </AnimatedParagraph>

            <AnimatedParagraph delay={1.8}>
              Ever since you came into my life,
              <br />
              everything has felt brighter,
              <br />
              warmer, and so much more meaningful.
            </AnimatedParagraph>

            <AnimatedParagraph delay={2.2}>
              Every moment spent with you
              <br />
              feels like a dream come true...
            </AnimatedParagraph>

            <AnimatedParagraph delay={2.6}>
              You make the hard days easy
              <br />
              and the good days unforgettable.
            </AnimatedParagraph>

            <AnimatedParagraph delay={3}>
              Today, I hope you feel completely
              <br />
              cherished, loved, and celebrated—
              <br />
              just like you make me feel
              <br />
              every single day.
            </AnimatedParagraph>

            <AnimatedParagraph delay={3.5}>
              I love you more than words can say.
            </AnimatedParagraph>

            <AnimatedParagraph delay={3.9}>
              Have the most wonderful birthday! ❤️
            </AnimatedParagraph>
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 4.4,
              duration: 0.8,
            }}
            className="
              mt-6
              border-t
              border-white/[0.06]
              pt-4
              sm:mt-7
              sm:pt-5
            "
          >
            <p
              className="
                font-serif
                text-sm
                italic
                text-white/45
                sm:text-base
              "
            >
              Forever yours,
            </p>

            <motion.p
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 4.8,
                duration: 0.6,
              }}
              className="
                mt-1
                text-xl
                text-pink-300/80
                sm:mt-2
              "
            >
              ❤️
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Continue */}
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
          delay: 3.3,
        }}
        whileHover={{
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          group
          mt-3
          flex
          shrink-0
          items-center
          gap-2
          rounded-full
          border
          border-pink-300/20
          bg-pink-500/[0.08]
          px-5
          py-2.5
          text-[11px]
          text-pink-100
          backdrop-blur-md
          transition-all
          hover:bg-pink-500/[0.14]

          sm:mt-5
          sm:gap-3
          sm:px-7
          sm:py-3.5
          sm:text-sm
        "
      >
        <span>One last thing</span>

        <ArrowRight
          className="
            h-4
            w-4
            transition-transform
            group-hover:translate-x-1
          "
        />
      </motion.button>
    </motion.div>
  );
}

/* ============================================================
   ANIMATED PARAGRAPH
============================================================ */

function AnimatedParagraph({ children, delay }) {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay,
        duration: 0.7,
      }}
    >
      {children}
    </motion.p>
  );
}

/* ============================================================
   SPARKLE
============================================================ */

function FloatingSparkle({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        opacity: [0.15, 0.8, 0.15],
        scale: [0.8, 1.15, 0.8],
        y: [0, -7, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Sparkles className="h-4 w-4 text-pink-300/45" />
    </motion.div>
  );
}
