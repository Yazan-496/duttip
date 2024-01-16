"use client";
import React, { useState, useEffect } from "react";

const TypeWriterComponent = ({ text, time }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, time);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return (
    <div>
      <div className="text-2xl font-semibold">{displayText}</div>
    </div>
  );
};

export default TypeWriterComponent;
