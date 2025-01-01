"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const COUNTDOWN_TARGET = new Date("2025-01-15T23:59:59").getTime();

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = COUNTDOWN_TARGET - new Date().getTime();

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Coming Soon
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <p className="text-xl mb-4">
              Our exciting new project is launching in:
            </p>
            <div className="flex justify-center space-x-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <span className="text-4xl font-bold">{value}</span>
                  <span className="text-sm uppercase">{unit}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-muted-foreground">
            We&apos;re working hard to bring you something amazing. Stay tuned!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
