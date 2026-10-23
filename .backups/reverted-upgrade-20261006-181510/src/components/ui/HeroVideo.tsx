"use client";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
export default function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  return <>
    <video ref={video} className={`hero-video ${playing ? "is-playing" : ""}`} muted playsInline loop preload="none" onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} aria-label="Palm Beach tree service video">
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
    <button className="video-toggle" type="button" onClick={() => { if (playing) video.current?.pause(); else void video.current?.play().catch(() => setPlaying(false)); }} aria-label={playing ? "Pause background video" : "Play background video"}>
      {playing ? <Pause size={16} /> : <Play size={16} />} {playing ? "Pause film" : "Watch film"}
    </button>
  </>;
}
