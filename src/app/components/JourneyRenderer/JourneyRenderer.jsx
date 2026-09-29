"use client";

import BirthdayPage from "../BirthdayPage";
import ChapterOne from "../chapter/ChapterOne";
import ChapterTwo from "../chapter/ChapterTwo";
import FinalSurprise from "../chapter/FinalSurprise";
import MemoryPage from "../chapter/MemoryPage";
import SurpriseLetter from "../chapter/SurpriseLetter";
import CountdownPage from "../CountdownPage";

export default function JourneyRenderer({ item, onNext }) {
  console.log("CURRENT JOURNEY ITEM:", item);

  if (!item) {
    return null;
  }

  switch (item.type) {
    case "chapter":
      return <ChapterOne item={item} onContinue={onNext} />;

    case "quote":
      return <ChapterTwo item={item} onContinue={onNext} />;

    case "memory":
      return <MemoryPage item={item} onContinue={onNext} />;
    case "countdown":
      return <CountdownPage item={item} onContinue={onNext} />;
    case "birthday":
      return <BirthdayPage item={item} onContinue={onNext} />;
    case "letter":
      return <SurpriseLetter onContinue={onNext} />;
    case "final-surprise":
      return <FinalSurprise />;

    default:
      return (
        <div className="flex h-full items-center justify-center text-white">
          Unknown chapter type: {item.type}
        </div>
      );
  }
}
