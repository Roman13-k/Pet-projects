import React, { useEffect, useState } from "react";

export function Circle({ pr, color }) {
  const circumference = 2 * Math.PI * 40;
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);

  useEffect(() => {
    const newOffset = Math.max(
      0,
      Math.min(circumference, circumference - pr * circumference),
    );
    setStrokeDashoffset(newOffset);
  }, [pr]);

  return (
    <svg
      width='90'
      height='90'
      className='rotate-90'
      style={{ transformOrigin: "center" }}>
      <circle
        cx='45'
        cy='45'
        r='40'
        stroke='lightgray'
        strokeWidth='10'
        fill='none'
      />
      <circle
        cx='45'
        cy='45'
        r='40'
        stroke={color}
        strokeWidth='10'
        fill='none'
        strokeDasharray={circumference}
        strokeDashoffset={String(strokeDashoffset)}
        style={{
          transition: "stroke-dashoffset 0.5s ease-out",
        }}
      />
    </svg>
  );
}
