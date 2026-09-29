import { BIRTHDAY_TIMELINE } from "../data/birthdayTimeline";
import { APP_CONFIG } from "./app";

export function getCurrentTime() {
  if (APP_CONFIG.testMode) {
    return new Date(APP_CONFIG.testDateTime);
  }

  return new Date();
}

export function getUnlockedTimeline(currentTime = getCurrentTime()) {
  return BIRTHDAY_TIMELINE.filter((item) => {
    const scheduledTime = new Date(item.dateTime);

    return scheduledTime <= currentTime;
  });
}

export function getCurrentStage(currentTime = getCurrentTime()) {
  const unlockedTimeline = getUnlockedTimeline(currentTime);

  if (unlockedTimeline.length === 0) {
    return null;
  }

  return unlockedTimeline[unlockedTimeline.length - 1];
}

export function getNextStage(currentTime = getCurrentTime()) {
  return (
    BIRTHDAY_TIMELINE.find((item) => {
      const scheduledTime = new Date(item.dateTime);

      return scheduledTime > currentTime;
    }) || null
  );
}
