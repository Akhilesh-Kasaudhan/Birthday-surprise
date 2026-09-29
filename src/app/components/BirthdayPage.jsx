"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Cake, Heart, Sparkles, Stars } from "lucide-react";

export default function BirthdayPage({ item, onContinue }) {
  const chapter = item?.chapter ?? 10;

  const title = item?.title ?? "Happy Birthday";

  const subtitle = item?.subtitle ?? "Finally... the moment is here. ❤️";

  const content =
    item?.content ??
    "Happy Birthday, beautiful. Aaj ka din sirf tumhare naam. 🎂❤️";

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

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
          BACKGROUND GLOW
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
          bg-pink-500/[0.09]
          blur-[110px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[150px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[20%]
          top-[20%]
          h-24
          w-24
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          FLOATING SPARKLES
      ====================================================== */}

      <FloatingSparkle className="left-[12%] top-[22%]" delay={0} />

      <FloatingSparkle className="right-[14%] top-[28%]" delay={1} />

      <FloatingSparkle className="left-[18%] bottom-[22%]" delay={1.8} />

      <FloatingSparkle className="right-[18%] bottom-[20%]" delay={2.5} />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-3xl
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* Chapter */}

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
            duration: 0.8,
          }}
          className="
            flex
            items-center
            gap-3
            text-[9px]
            uppercase
            tracking-[0.45em]
            text-pink-300/70
            sm:text-xs
          "
        >
          <span className="h-px w-6 bg-pink-300/25 sm:w-10" />
          Chapter {String(chapter).padStart(2, "0")}
          <span className="h-px w-6 bg-pink-300/25 sm:w-10" />
        </motion.div>

        {/* =====================================================
            CAKE ICON
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.9,
            type: "spring",
          }}
          className="
            mt-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-pink-300/20
            bg-pink-500/[0.09]
            shadow-[0_0_50px_rgba(236,72,153,0.12)]
            sm:mt-7
            sm:h-20
            sm:w-20
          "
        >
          <motion.div
            animate={{
              y: [0, -3, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Cake
              className="
                h-7
                w-7
                text-pink-400
                sm:h-9
                sm:w-9
              "
              strokeWidth={1.4}
            />
          </motion.div>
        </motion.div>

        {/* =====================================================
            TITLE
        ====================================================== */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.55,
            duration: 1,
          }}
          className="
            mt-6
            font-serif
            text-5xl
            leading-[0.95]
            text-white
            sm:mt-7
            sm:text-6xl
            md:text-7xl
          "
        >
          {title}
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="
            mt-4
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-white/35
            sm:text-xs
            sm:tracking-[0.4em]
          "
        >
          {subtitle}
        </motion.p>

        {/* =====================================================
            HEART
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 1.15,
            duration: 0.7,
            type: "spring",
          }}
          className="mt-6"
        >
          <motion.div
            animate={{
              scale: [1, 1.18, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart
              className="
                h-6
                w-6
                fill-pink-400
                text-pink-400
                drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]
                sm:h-7
                sm:w-7
              "
            />
          </motion.div>
        </motion.div>

        {/* =====================================================
            BIRTHDAY MESSAGE
        ====================================================== */}

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
            delay: 1.35,
            duration: 0.9,
          }}
          className="
            mt-7
            max-w-2xl
            px-2
            sm:mt-8
          "
        >
          <p
            className="
              font-serif
              text-xl
              leading-8
              text-white/85
              sm:text-2xl
              sm:leading-10
              md:text-3xl
            "
          >
            {content}
          </p>
        </motion.div>

        {/* Divider */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            delay: 1.7,
            duration: 0.7,
          }}
          className="
            mt-7
            h-px
            w-12
            bg-pink-300/30
          "
        />

        {/* =====================================================
            PERSONAL MESSAGE
        ====================================================== */}

        {showMessage && (
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
              duration: 1,
            }}
            className="
              mt-6
              max-w-xl
              text-xs
              leading-6
              text-white/45
              sm:text-sm
              sm:leading-7
            "
          >
            <p>Aaj se ek aur beautiful chapter start ho raha hai... ❤️</p>

            <p>
              Aur hopefully, iss story ke aage bhi bahut saare pages likhne
              hain.
            </p>
          </motion.div>
        )}

        {/* =====================================================
            SURPRISE BUTTON
        ====================================================== */}

        <motion.button
          onClick={onContinue}
          initial={{
            opacity: 0,
            y: 20,
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
            mt-7
            flex
            items-center
            gap-3
            rounded-full
            border
            border-pink-300/25
            bg-pink-500/[0.09]
            px-6
            py-3
            text-xs
            text-pink-100
            shadow-[0_10px_40px_rgba(236,72,153,0.08)]
            backdrop-blur-md
            transition-all
            hover:border-pink-300/35
            hover:bg-pink-500/[0.15]
            sm:px-7
            sm:py-3.5
            sm:text-sm
          "
        >
          <Sparkles className="h-4 w-4 text-pink-300" />

          <span>There's still a little surprise</span>

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

      {/* =====================================================
          PAGE NUMBER
      ====================================================== */}

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
        {String(chapter).padStart(2, "0")} / ∞
      </div>
    </section>
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
        scale: [0.8, 1.2, 0.8],
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Sparkles className="h-4 w-4 text-pink-300/50" />
    </motion.div>
  );
}
