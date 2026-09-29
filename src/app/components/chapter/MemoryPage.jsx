"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Heart,
  Image as ImageIcon,
  Play,
  Sparkles,
} from "lucide-react";

export default function MemoryPage({ item, onContinue }) {
  const chapter = item?.chapter ?? 4;

  const title = item?.title ?? "A Little Memory";

  const subtitle =
    item?.subtitle ?? "Kuch moments bas yaad reh jaate hain... ❤️";

  const media = Array.isArray(item?.media) ? item.media : [];

  const caption = item?.caption ?? "";

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
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-pink-500/[0.07]
          blur-[120px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[150px]
        "
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-[8%] top-[25%]"
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [0.8, 1.15, 0.8],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="h-4 w-4 text-pink-300/40" />
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[30%]"
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
          SCROLLABLE CONTENT
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
            justify-center
            px-5
            py-12
            pb-24
            sm:px-8
            sm:py-14
            sm:pb-24
          "
        >
          <div className="flex w-full max-w-4xl flex-col items-center">
            {/* =================================================
                CHAPTER
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
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
              }}
              className="
                mt-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-pink-300/15
                bg-pink-500/[0.08]
                sm:mt-6
                sm:h-14
                sm:w-14
              "
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
              />
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
                delay: 0.45,
                duration: 0.9,
              }}
              className="
                mt-5
                text-center
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
                delay: 0.75,
                duration: 0.8,
              }}
              className="
                mt-3
                max-w-md
                text-center
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-white/30
                sm:text-[11px]
                sm:tracking-[0.35em]
              "
            >
              {subtitle}
            </motion.p>

            {/* =================================================
                MEDIA
            ================================================== */}

            <div
              className="
                  mt-8
    grid
    w-full
    grid-cols-2
    gap-3
    sm:mt-10
    sm:gap-5
              "
            >
              {media.map((mediaItem, index) => (
                <MemoryMedia
                  key={`${chapter}-media-${index}`}
                  media={mediaItem}
                  index={index}
                />
              ))}
            </div>

            {/* =================================================
                CAPTION
            ================================================== */}

            {caption && (
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
                  delay: 1.5,
                  duration: 0.8,
                }}
                className="
                  mt-7
                  max-w-2xl
                  text-center
                  text-xs
                  leading-6
                  text-white/45
                  sm:mt-8
                  sm:text-sm
                  sm:leading-7
                "
              >
                {caption}
              </motion.div>
            )}

            {/* =================================================
                CONTINUE
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
                delay: 1.8,
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

function MemoryMedia({ media, index }) {
  if (!media?.src) {
    return null;
  }

  const isVideo = media.type === "video";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        delay: 0.9 + index * 0.18,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        shadow-[0_15px_50px_rgba(0,0,0,0.35)]
      "
    >
      {/* Media */}

      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {isVideo ? (
          <>
            <video
              src={media.src}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.03]
              "
              controls
              playsInline
              preload="metadata"
            />

            <div
              className="
                pointer-events-none
                absolute
                left-3
                top-3
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/30
                backdrop-blur-md
              "
            >
              <Play className="h-3.5 w-3.5 fill-white text-white" />
            </div>
          </>
        ) : (
          <>
            <img
              src={media.src}
              alt={`Memory ${index + 1}`}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.04]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-3
                top-3
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/30
                backdrop-blur-md
              "
            >
              <ImageIcon className="h-3.5 w-3.5 text-white/80" />
            </div>
          </>
        )}

        {/* Gradient */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-24
            bg-gradient-to-t
            from-black/35
            to-transparent
          "
        />
      </div>
    </motion.div>
  );
}
