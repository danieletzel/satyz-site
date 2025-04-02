"use client";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-auto object-cover rounded-xl"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;