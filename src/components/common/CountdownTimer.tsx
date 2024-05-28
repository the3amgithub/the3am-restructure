import { useGetEventsQuery } from "@/graphql/generated/schema";
import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const { data, loading } = useGetEventsQuery();
  const upcomingEvents = data?.getEvents?.upcomingEvents;
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const currentYear = now.getFullYear();
    let targetDate = new Date(
      `${upcomingEvents && upcomingEvents[0]?.date} 00:00:00`
    );

    // If the target date has passed for the current year, set target date to next year
    if (now > targetDate) {
      targetDate = new Date(`Jun 25, ${currentYear} 00:00:00`);
    }

    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div className="bg-[#2E3A41] rounded px-[10px] py-[5px] flex gap-10">
      <div className="flex flex-col items-center">
        <span className="text-4xl">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="text-xs">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-xs">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-xs">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-xs">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
