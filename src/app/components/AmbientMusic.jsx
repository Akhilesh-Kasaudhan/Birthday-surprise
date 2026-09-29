"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AmbientMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Configure audio once
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.12;
    audio.loop = true;
  }, []);

  // Start music when journey begins
  useEffect(() => {
    const startMusic = async () => {
      const audio = audioRef.current;

      if (!audio) return;

      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Unable to start background music:", error);
        setIsPlaying(false);
      }
    };

    window.addEventListener("start-journey-music", startMusic);

    return () => {
      window.removeEventListener("start-journey-music", startMusic);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Unable to play music:", error);
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/birthday-ambient.mp3"
        preload="auto"
        loop
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={
          isPlaying ? "Mute background music" : "Play background music"
        }
        className="
          fixed
          right-4
          top-4
          z-[100]
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-pink-300/15
          bg-black/30
          text-pink-200/70
          backdrop-blur-md
          transition-all
          hover:border-pink-300/30
          hover:bg-pink-500/10
          sm:right-6
          sm:top-5
        "
      >
        {isPlaying ? (
          <Volume2 className="h-4 w-4" />
        ) : (
          <VolumeX className="h-4 w-4" />
        )}
      </button>
    </>
  );
}
