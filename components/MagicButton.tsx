"use client";
import React, { useEffect, useState } from "react";

// Helper function to detect Safari
const isSafari = () => {
  if (typeof window !== "undefined" && typeof navigator !== "undefined") {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  return false; // Default to false during server-side rendering
};

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);

  useEffect(() => {
    if (isSafari()) {
      setIsSafariBrowser(true); // Safari browser detected
    }
  }, []);

  return (
    <button
      className={`relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none ${
        isSafariBrowser ? "" : otherClasses
      }`}
      onClick={handleClick}
    >
      {/* Conditionally show animation based on browser */}
      {!isSafariBrowser && (
        <span className="absolute inset-[-250%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      )}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
