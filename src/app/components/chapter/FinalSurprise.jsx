"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Gift, Heart, Sparkles, Stars } from "lucide-react";

export default function FinalSurprise() {
  const [isRevealed, setIsRevealed] = useState(false);

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
        py-6
        text-white
        sm:px-8
        sm:py-8
      "
    >
      {/* Ambient glow */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-pink-500/[0.08]
          blur-[100px]
          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[140px]
        "
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.65, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating sparkles */}
      <FloatingSparkle className="left-[12%] top-[20%]" delay={0} />

      <FloatingSparkle className="right-[14%] top-[25%]" delay={1} />

      <FloatingSparkle className="left-[18%] bottom-[22%]" delay={1.8} />

      <FloatingSparkle className="right-[18%] bottom-[20%]" delay={2.6} />

      {/* Main content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          min-h-0
          w-full
          max-w-2xl
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <RevealIntro key="intro" onReveal={() => setIsRevealed(true)} />
          ) : (
            <FinalMessage key="final" />
          )}
        </AnimatePresence>
      </div>

      {/* Page label */}
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
        ONE LAST THING · ❤️
      </div>
    </section>
  );
}

/* ============================================================
   REVEAL INTRO
============================================================ */

function RevealIntro({ onReveal }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.96,
        y: -20,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        flex
        w-full
        flex-col
        items-center
        justify-center
      "
    >
      {/* Small heading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="
          flex
          items-center
          gap-3
          text-[9px]
          uppercase
          tracking-[0.4em]
          text-pink-300/60
          sm:text-xs
        "
      >
        <span className="h-px w-7 bg-pink-300/20" />
        A Little Surprise
        <span className="h-px w-7 bg-pink-300/20" />
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
        One Last Thing
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="
          mt-4
          max-w-md
          text-xs
          leading-6
          text-white/40
          sm:text-sm
          sm:leading-7
        "
      >
        I know I said this was the last page...
        <br />
        but I couldn't end our little story just yet. ❤️
      </motion.p>

      {/* Gift */}
      <motion.button
        type="button"
        onClick={onReveal}
        whileHover={{
          scale: 1.04,
          y: -5,
        }}
        whileTap={{
          scale: 0.96,
        }}
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay: 1.1,
          duration: 0.8,
        }}
        className="
          group
          relative
          mt-10
          flex
          h-32
          w-32
          items-center
          justify-center
          rounded-full
          border
          border-pink-300/20
          bg-pink-500/[0.06]
          shadow-[0_20px_70px_rgba(0,0,0,0.35)]
          backdrop-blur-md
          transition-colors
          hover:border-pink-300/40
          hover:bg-pink-500/[0.1]

          sm:mt-12
          sm:h-40
          sm:w-40
        "
      >
        {/* Ring */}
        <motion.div
          className="
            absolute
            inset-3
            rounded-full
            border
            border-pink-300/10
          "
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            gap-2
          "
        >
          <Gift
            className="
              h-9
              w-9
              text-pink-300
              sm:h-11
              sm:w-11
            "
            strokeWidth={1.3}
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/35
              sm:text-[9px]
            "
          >
            Open
          </span>
        </motion.div>
      </motion.button>

      {/* Tap text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
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
        There's one more thing...
        <Sparkles className="h-3 w-3" />
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   FINAL MESSAGE
============================================================ */
function FinalMessage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        h-full
        min-h-0
        w-full
        flex-col
        items-center
        justify-center
        px-4
        text-center
      "
    >
      {/* Small heading */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="
          flex
          items-center
          gap-3
          text-[9px]
          uppercase
          tracking-[0.4em]
          text-pink-300/60
          sm:text-xs
        "
      >
        <span className="h-px w-7 bg-pink-300/20" />
        One Last Thing
        <span className="h-px w-7 bg-pink-300/20" />
      </motion.div>

      {/* Heart / stars */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.5,
          duration: 0.7,
        }}
        className="mt-4"
      >
        <Heart
          className="
            h-7
            w-7
            fill-pink-400/70
            text-pink-400
            sm:h-9
            sm:w-9
          "
        />
      </motion.div>

      {/* Message card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.7,
          duration: 0.8,
        }}
        className="
          mt-4
          flex
          min-h-0
          w-full
          max-w-2xl
          flex-1
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-pink-200/[0.08]
          bg-[#120b12]/80
          px-5
          py-5
          text-left
          shadow-[0_25px_80px_rgba(0,0,0,0.4)]
          backdrop-blur-xl

          sm:mt-5
          sm:px-9
          sm:py-7
        "
      >
        {/* Scrollable content */}
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
          <div
            className="
              text-center
              font-serif
              text-[13px]
              leading-6
              text-white/65

              sm:text-base
              sm:leading-8
            "
          >
            <AnimatedParagraph delay={1}>
              And maybe...
              <br />
              there is one last thing
              <br />I want to tell you.
            </AnimatedParagraph>

            <AnimatedParagraph delay={1.3}>
              Maine tumse pehle bhi kaha tha,
              <br />
              ki mujhe shaadi nahi karni.
              <br />
              Kabhi nahi.
            </AnimatedParagraph>

            <AnimatedParagraph delay={1.6}>
              Mujhe laga tha ki meri life mein
              <br />
              shayad aisa koi insaan aayega hi nahi
              <br />
              jiske saath main apni poori life
              <br />
              imagine kar sakun.
            </AnimatedParagraph>

            <AnimatedParagraph delay={1.9}>Phir tum mili. ❤️</AnimatedParagraph>

            <AnimatedParagraph delay={2.2}>
              Aur tumse milkar,
              <br />
              pehli baar mujhe laga...
            </AnimatedParagraph>

            <motion.p
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="
                my-5
                font-serif
                text-base
                leading-7
                text-pink-100/90

                sm:my-6
                sm:text-xl
                sm:leading-9
              "
            >
              "Haan...
              <br />
              agar meri life partner tum jaisi ho,
              <br />
              toh main shaadi kar sakta hoon." ❤️
            </motion.p>

            <AnimatedParagraph delay={2.9}>
              Main ye sirf birthday ke din
              <br />
              ya emotions mein nahi keh raha.
            </AnimatedParagraph>

            <AnimatedParagraph delay={3.2}>
              Agar kabhi meri life mein
              <br />
              kisi ek insaan ke saath
              <br />
              poori zindagi bitane ka sawaal aaya...
            </AnimatedParagraph>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
              className="
                font-serif
                text-base
                leading-7
                text-white/85

                sm:text-lg
                sm:leading-8
              "
            >
              toh meri choice tum ho.
              <br />
              Aur sirf tum. ❤️
            </motion.p>

            <AnimatedParagraph delay={3.9}>
              Thank you...
              <br />
              meri life mein aane ke liye,
              <br />
              mujhe samajhne ke liye,
              <br />
              aur meri ordinary si life ko
              <br />
              itna beautiful banane ke liye.
            </AnimatedParagraph>

            <AnimatedParagraph delay={4.3}>
              I don't know future exactly
              <br />
              kaisa hoga...
            </AnimatedParagraph>

            <AnimatedParagraph delay={4.6}>
              but ek baat zaroor jaanta hoon—
              <br />
              agar kal mujhe apna future
              <br />
              kisi ke saath imagine karna ho,
              <br />
              toh main tumhe hi imagine karta hoon.
            </AnimatedParagraph>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5 }}
              className="
                mt-6
                font-serif
                text-lg
                text-pink-200

                sm:text-2xl
              "
            >
              I love you, Betu. ❤️
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.3 }}
              className="
                mt-2
                font-serif
                text-sm
                italic
                text-white/40
                sm:text-base
              "
            >
              More than I can put into words.
            </motion.p>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 5.7,
                duration: 0.8,
              }}
              className="
                mt-7
                border-t
                border-white/[0.06]
                pt-5

                sm:mt-9
                sm:pt-6
              "
            >
              <p className="font-serif text-sm italic text-white/45 sm:text-base">
                Forever yours,
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-sm
                  text-white/55
                  sm:text-base
                "
              >
                The person who once said
                <br />
                he would never get married...
                <br />
                and then met you. ❤️
              </p>

              <p
                className="
                  mt-4
                  font-serif
                  text-sm
                  italic
                  text-pink-200/70
                  sm:text-base
                "
              >
                — Yours, always
              </p>

              <p
                className="
                  mt-4
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/20
                  sm:text-xs
                "
              >
                Some promises don't need a date.
                <br />
                They just need the right person. ❤️
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

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
   FLOATING SPARKLE
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
