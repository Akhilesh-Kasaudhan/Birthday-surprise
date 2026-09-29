"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Clock3, Heart, Sparkles } from "lucide-react";
import { APP_CONFIG } from "../config/app";

export default function CountdownPage({ item, onContinue }) {
  const chapter = item?.chapter ?? 9;

  const title = item?.title ?? "The Wait";

  const subtitle = item?.subtitle ?? "Bas thoda sa aur...";

  const content =
    item?.content ??
    "Ab countdown shuru hota hai. Agla chapter exactly midnight par unlock hoga. ⏳❤️";

  const targetDateTime = item?.targetDateTime ?? "2026-09-30T00:00:00+05:30";

  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(targetDateTime, APP_CONFIG.testMode),
  );

  useEffect(() => {
    const startedAt = Date.now();

    const updateCountdown = () => {
      setTimeLeft(
        calculateTimeLeft(targetDateTime, APP_CONFIG.testMode, startedAt),
      );
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDateTime]);

  const isFinished = timeLeft.total <= 0;

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
        py-10
        text-white
        sm:px-8
        sm:py-14
      "
    >
      {/* =====================================================
          AMBIENT BACKGROUND
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
          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[140px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[25%]
          h-20
          w-20
          rounded-full
          bg-purple-500/[0.08]
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
          STARS
      ====================================================== */}

      <motion.div
        className="absolute left-[12%] top-[25%]"
        animate={{
          opacity: [0.15, 0.8, 0.15],
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
        className="absolute right-[12%] top-[32%]"
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
        <Sparkles className="h-5 w-5 text-purple-300/40" />
      </motion.div>

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
          text-center
        "
      >
        {/* Chapter */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
          <span className="h-px w-6 bg-pink-300/25 sm:w-10" />
          Chapter {String(chapter).padStart(2, "0")}
          <span className="h-px w-6 bg-pink-300/25 sm:w-10" />
        </motion.div>

        {/* Clock */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.25,
            duration: 0.8,
            type: "spring",
          }}
          className="
            mt-7
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-pink-300/15
            bg-pink-500/[0.08]
            shadow-[0_0_40px_rgba(236,72,153,0.08)]
            sm:mt-8
            sm:h-16
            sm:w-16
          "
        >
          {isFinished ? (
            <Heart
              className="
                h-6
                w-6
                fill-pink-400
                text-pink-400
              "
            />
          ) : (
            <Clock3
              className="
                h-6
                w-6
                text-pink-400
                sm:h-7
                sm:w-7
              "
              strokeWidth={1.5}
            />
          )}
        </motion.div>

        {/* Title */}

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
          }}
          className="
            mt-6
            font-serif
            text-4xl
            leading-[1.05]
            text-white
            sm:mt-7
            sm:text-5xl
            md:text-6xl
          "
        >
          {title}
        </motion.h2>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
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
            COUNTDOWN
        ====================================================== */}

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
            delay: 1,
            duration: 0.9,
          }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-2
            sm:mt-12
            sm:gap-4
          "
        >
          <TimeBox value={timeLeft.hours} label="Hours" />

          <Separator />

          <TimeBox value={timeLeft.minutes} label="Minutes" />

          <Separator />

          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </motion.div>

        {/* Content */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.35,
            duration: 0.8,
          }}
          className="
            mt-9
            max-w-xl
            text-center
            font-serif
            text-base
            leading-7
            text-white/55
            sm:mt-10
            sm:text-lg
            sm:leading-8
          "
        >
          {isFinished ? "The wait is finally over. ❤️" : content}
        </motion.p>

        {/* Small divider */}

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
            delay: 1.55,
            duration: 0.7,
          }}
          className="
            mt-8
            h-px
            w-10
            bg-pink-300/25
          "
        />

        {/* Continue */}

        {isFinished && (
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
              delay: 1.7,
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
              shadow-[0_10px_40px_rgba(236,72,153,0.08)]
              backdrop-blur-md
              transition-all
              hover:border-pink-300/30
              hover:bg-pink-500/[0.14]
              sm:px-7
              sm:py-3.5
              sm:text-sm
            "
          >
            <span>Open your birthday chapter</span>

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
        )}
      </div>

      {/* Page number */}

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
   TIME BOX
============================================================ */

function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="
          flex
          h-16
          min-w-[64px]
          items-center
          justify-center
          rounded-xl
          border
          border-white/[0.08]
          bg-white/[0.025]
          px-3
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
          sm:h-20
          sm:min-w-[82px]
          sm:rounded-2xl
        "
      >
        <span
          className="
            font-serif
            text-3xl
            tabular-nums
            text-white
            sm:text-4xl
          "
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>

      <span
        className="
          mt-2
          text-[8px]
          uppercase
          tracking-[0.2em]
          text-white/25
          sm:text-[9px]
        "
      >
        {label}
      </span>
    </div>
  );
}

/* ============================================================
   SEPARATOR
============================================================ */

function Separator() {
  return (
    <div
      className="
        mb-5
        text-lg
        text-pink-300/30
        sm:text-2xl
      "
    >
      :
    </div>
  );
}

/* ============================================================
   COUNTDOWN CALCULATION
============================================================ */

function calculateTimeLeft(
  targetDateTime,
  testMode = false,
  testStartedAt = Date.now(),
) {
  const target = new Date(targetDateTime).getTime();

  let now;

  if (testMode) {
    const configuredTime = new Date(APP_CONFIG.testDateTime).getTime();

    const elapsed = Date.now() - testStartedAt;

    now = configuredTime + elapsed;
  } else {
    now = Date.now();
  }

  const difference = Math.max(0, target - now);

  const totalSeconds = Math.floor(difference / 1000);

  const hours = Math.floor(totalSeconds / 3600);

  const minutes = Math.floor((totalSeconds % 3600) / 60);

  const seconds = totalSeconds % 60;

  return {
    total: difference,
    hours,
    minutes,
    seconds,
  };
}
