'use client'

import React, { useEffect, useRef } from "react";

interface Props {
  currentTime: number;
  durationTime: number;
  startTime: number;
  children?: React.ReactNode;
}

const BulletChat = ({ currentTime, durationTime, startTime, children }: Props) => {
  const bulletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blt = bulletRef.current
    if (blt) {

    }
  }, [currentTime, durationTime, startTime]);

  return (
    <div ref={bulletRef} style={{
      transform: `translateX(calc(10vw${}))`
    }} className="bg-blue-500 h-[40px] p-1 px-4 absolute left-[90vw]">
      弹幕 1
    </div>
  );
};

export default BulletChat;
