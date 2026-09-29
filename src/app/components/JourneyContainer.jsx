"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, BookOpen } from "lucide-react";

import { getUnlockedTimeline } from "../config/timeUtils";

import WelcomeScreen from "./WelcomeScreen";
import JourneyRenderer from "./JourneyRenderer/JourneyRenderer";
import AmbientMusic from "./AmbientMusic";

export default function JourneyContainer() {
  const [unlockedTimeline, setUnlockedTimeline] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);

  /*
   * Update unlocked chapters every second.
   */
  useEffect(() => {
    const updateJourney = () => {
      const unlocked = getUnlockedTimeline();

      setUnlockedTimeline(unlocked);
    };

    updateJourney();

    const interval = setInterval(updateJourney, 1000);

    return () => clearInterval(interval);
  }, []);

  /*
   * Keep current step valid.
   */
  useEffect(() => {
    if (currentStep === -1) {
      return;
    }

    setCurrentStep((previousStep) => {
      if (unlockedTimeline.length === 0) {
        return -1;
      }

      return Math.min(previousStep, unlockedTimeline.length - 1);
    });
  }, [unlockedTimeline.length, currentStep]);

  /*
   * Current page.
   */
  const currentItem = useMemo(() => {
    if (currentStep < 0) {
      return null;
    }

    return unlockedTimeline[currentStep] || null;
  }, [currentStep, unlockedTimeline]);

  /*
   * Start journey.
   */
  const handleStartJourney = () => {
    if (unlockedTimeline.length > 0) {
      setCurrentStep(0);

      window.dispatchEvent(new Event("start-journey-music"));
    }
  };

  /*
   * Next page.
   */
  const handleNext = () => {
    setCurrentStep((previousStep) => {
      const nextStep = previousStep + 1;

      if (nextStep >= unlockedTimeline.length) {
        return previousStep;
      }

      return nextStep;
    });
  };

  /*
   * Previous page.
   */
  const handlePrevious = () => {
    setCurrentStep((previousStep) => {
      if (previousStep <= 0) {
        return previousStep;
      }

      return previousStep - 1;
    });
  };

  /*
   * Welcome screen
   */
  if (currentStep === -1) {
    return (
      <main className="fixed inset-0 h-dvh w-full overflow-hidden bg-[#0b070d] text-white">
        <WelcomeScreen />

        {unlockedTimeline.length > 0 && (
          <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 sm:bottom-8">
            <motion.button
              onClick={handleStartJourney}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                flex
                items-center
                gap-2
                whitespace-nowrap
                rounded-full
                border
                border-pink-300/20
                bg-pink-500/10
                px-6
                py-3
                text-sm
                text-pink-100
                shadow-xl
                shadow-pink-950/20
                backdrop-blur-md
                transition-colors
                hover:bg-pink-500/20
              "
            >
              <BookOpen className="h-4 w-4" />
              Begin the journey
              <span>❤️</span>
            </motion.button>
          </div>
        )}
      </main>
    );
  }

  return (
    <main className="fixed inset-0 h-dvh w-full overflow-hidden bg-[#0b070d] text-white">
      <AmbientMusic />
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-pink-500/[0.035]
            blur-[130px]
            sm:h-[650px]
            sm:w-[650px]
            sm:blur-[150px]
          "
        />
      </div>

      {/* Book header */}
      <div className="pointer-events-none absolute left-1/2 top-4 z-50 -translate-x-1/2 sm:top-5">
        <div className="flex items-center gap-2 text-white/25 sm:gap-3">
          <span className="h-px w-5 bg-white/10 sm:w-8" />

          <span className="flex items-center gap-1.5 whitespace-nowrap text-[8px] uppercase tracking-[0.35em] sm:gap-2 sm:text-[10px] sm:tracking-[0.4em]">
            <BookOpen className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            Our Little Story
          </span>

          <span className="h-px w-5 bg-white/10 sm:w-8" />
        </div>
      </div>

      {/* Main viewport */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-2 pt-12 pb-3 sm:px-6 sm:pt-14 sm:pb-5">
        {/* Book */}
        <div
          className="
            relative
            h-full
            max-h-[calc(100dvh-60px)]
            w-full
            max-w-5xl
            overflow-hidden
            rounded-[24px]
            border
            border-white/[0.08]
            bg-[#100a12]/80
            shadow-[0_30px_100px_rgba(0,0,0,0.6)]
            backdrop-blur-xl
            sm:max-h-[calc(100dvh-75px)]
            sm:rounded-[30px]
          "
          style={{
            perspective: "1400px",
          }}
        >
          {/* Book spine */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-40 w-[2px] bg-gradient-to-b from-transparent via-pink-300/10 to-transparent" />

          {/* Page */}
          <div className="h-full w-full min-h-0 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentItem?.id}
                initial={{
                  opacity: 0,
                  x: 70,
                  rotateY: 10,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -70,
                  rotateY: -10,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full min-h-0"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <JourneyRenderer item={currentItem} onNext={handleNext} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Page number */}
          <div
            className="pointer-events-none absolute bottom-2 left-1/2 z-50  -translate-x-1/2
  rounded-full
  bg-[#100a12]/80
  px-3
  py-1
  backdrop-blur-sm
  sm:bottom-3"
          >
            <span className="text-[9px] tracking-[0.3em] text-white/20 sm:text-[10px] sm:tracking-[0.35em]">
              {String(currentStep + 1).padStart(2, "0")} /{" "}
              {String(unlockedTimeline.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Previous */}
      {currentStep > 0 && (
        <motion.button
          onClick={handlePrevious}
          whileHover={{
            x: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            fixed
            bottom-5
            left-4
            z-50
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            px-3
            py-2
            text-[11px]
            text-white/40
            backdrop-blur-md
            transition-colors
            hover:text-white/70
            sm:bottom-7
            sm:left-5
            sm:px-4
            sm:text-xs
          "
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Previous
        </motion.button>
      )}
    </main>
  );
}
