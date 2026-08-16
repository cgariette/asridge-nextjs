"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="py-16 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative border-8 border-sky shadow-xl overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-cover block"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/video-poster.jpg"
          >
            <source src="/videos/lab-test.mp4" type="video/mp4" />
          </video>

          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
          >
            {isMuted ? (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2 2m0 0l2 2m-2-2l2-2m-2 2l-2 2M9 9H5a1 1 0 00-1 1v4a1 1 0 001 1h4l5 5V4L9 9z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M9 9H5a1 1 0 00-1 1v4a1 1 0 001 1h4l5 5V4L9 9z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.section>
  );
}