"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Target: one year from domain start date
const TARGET_DATE = new Date("2027-06-22T00:00:00");

function getTimeLeft(): TimeLeft {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: t.days, value: timeLeft.days },
    { label: t.hours, value: timeLeft.hours },
    { label: t.minutes, value: timeLeft.minutes },
    { label: t.seconds, value: timeLeft.seconds },
  ];

  if (!mounted) return null;

  return (
    <div className="countdown-section">
      <p className="countdown-title">{t.countdownTitle}</p>
      <div className="countdown-grid">
        {units.map(({ label, value }) => (
          <div key={label} className="countdown-item">
            <div className="countdown-value">
              {String(value).padStart(2, "0")}
            </div>
            <div className="countdown-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
