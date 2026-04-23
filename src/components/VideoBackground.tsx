import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  isHls?: boolean;
  className?: string;
  desaturated?: boolean;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  src, 
  poster, 
  isHls = false, 
  className = "",
  desaturated = false
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let hls: Hls | null = null;

    if (isHls && src.endsWith('.m3u8')) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      }
    } else {
      video.src = src;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }

      video.pause();
      video.removeAttribute('src');
      video.load();
    };
  }, [src, isHls]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <video
        ref={videoRef}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover ${desaturated ? 'saturate-0 brightness-75' : ''}`}
      />
      {/* Universal overlays */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};
