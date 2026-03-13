"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
// import SplitText from "@/components/ui/split-text";

export default function HomeVideo() {
  const [isPlaying, setIsPlaying] = useState(false); // Start as false - video won't autoplay
  const [isMuted, setIsMuted] = useState(true); // Must start muted for autoplay
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [canAutoplay, setCanAutoplay] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false); // Track if user has clicked video

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if autoplay is supported (but don't autoplay)
  useEffect(() => {
    const checkAutoplaySupport = async () => {
      if (!videoRef.current) return;

      // Just check if autoplay is supported without actually playing
      try {
        setCanAutoplay(true);
      } catch (error) {
        console.log("Autoplay not supported:", error);
        setCanAutoplay(false);
      }
    };

    if (videoLoaded) {
      checkAutoplaySupport();
    }
  }, [videoLoaded]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Check if we're on a large screen before applying scroll animation
    const isLargeScreen = window.innerWidth >= 768; // md breakpoint

    const handleResize = () => {
      const newIsLargeScreen = window.innerWidth >= 768;
      if (newIsLargeScreen !== isLargeScreen) {
        // Re-run the animation setup if screen size changes
        gsap.set("#video-container", {
          opacity: newIsLargeScreen ? 0 : 1,
          scale: newIsLargeScreen ? 0.3 : 1,
          borderRadius: newIsLargeScreen ? "16px" : "0px",
          paddingTop: newIsLargeScreen ? "0px" : "4vw",
        });
      }
    };

    window.addEventListener("resize", handleResize);

    if (isLargeScreen) {
      // Video container scale and rotation animation - only for large screens
      gsap.fromTo(
        "#video-container",
        {
          scale: 0.3,
          borderRadius: "16px",
          paddingTop: "0px",
        },
        {
          scale: 1,
          borderRadius: "0px",
          paddingTop: "4vw",
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#video-container",
            start: "top bottom+=10%",
            end: "center center",
            scrub: 1,
          },
        }
      );
    } else {
      // For small screens, just set the container to be visible without animation
      gsap.set("#video-container", {
        opacity: 1,
        scale: 1,
        borderRadius: "0px",
        paddingTop: "4vw",
      });
    }
  }, []);

  // Set up video event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      console.log("✅ Video can play - loaded successfully");
      setVideoLoaded(true);
    };

    const handleLoadedMetadata = () => {
      console.log("✅ Video metadata loaded", {
        duration: video.duration,
        videoWidth: video.videoWidth,
        videoHeight: video.videoHeight,
        src: video.currentSrc || video.src,
      });
    };

    const handleLoadStart = () => {
      console.log("🔄 Video load started", video.currentSrc || video.src);
    };

    const handlePlay = () => {
      console.log("▶️ Video playing");
      setIsPlaying(true);
    };

    const handlePause = () => {
      console.log("⏸️ Video paused");
      setIsPlaying(false);
    };

    const handleError = (e: Event) => {
      const video = e.target as HTMLVideoElement;
      console.error("❌ Video error:", {
        error: video.error,
        code: video.error?.code,
        message: video.error?.message,
        networkState: video.networkState,
        readyState: video.readyState,
        src: video.currentSrc || video.src,
        allSources: Array.from(video.querySelectorAll("source")).map(
          (s) => s.src
        ),
      });
    };

    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("error", handleError);

    // Load the video
    console.log("🔄 Attempting to load video...");
    video.load();

    return () => {
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("error", handleError);
    };
  }, [canAutoplay]);

  const handleVideoClick = async (
    e:
      | React.MouseEvent<HTMLButtonElement | HTMLVideoElement | HTMLDivElement>
      | React.TouchEvent<HTMLVideoElement>
  ) => {
    // Prevent default behavior
    e.preventDefault();
    e.stopPropagation();

    if (videoRef.current) {
      try {
        if (!hasUserInteracted) {
          // First user interaction - start video from beginning with sound
          videoRef.current.currentTime = 0; // Reset to start
          videoRef.current.muted = false; // Unmute
          setIsMuted(false);
          await videoRef.current.play();
          setHasUserInteracted(true); // Mark that user has interacted
        } else {
          // Normal play/pause behavior for subsequent clicks
          if (isPlaying) {
            await videoRef.current.pause();
          } else {
            await videoRef.current.play();
          }
        }
      } catch (error) {
        console.error("Play/pause error:", error);
      }
    }
  };

  return (
    <section className="pb-10 lg:pb-40 pt-6">
      <div
        ref={containerRef}
        className="relative max-w-4xl px-6 lg:px-0 mx-auto h-fit cursor-pointer group overflow-hidden"
        id="video-container"
      >
        {/* Play Button Overlay */}
        {!isPlaying && (
          <div 
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors"
            onClick={handleVideoClick}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/90 shadow-lg hover:scale-110 transition-transform">
              <Image 
                src="/icons/play-video-icon.svg" 
                alt="Play Video" 
                width={32} 
                height={32}
                className="ml-1 sm:w-10 sm:h-10"
              />
            </div>
          </div>
        )}

        {/* Video element */}
        <video
          ref={videoRef}
          className="w-full h-fit max-w-4xl mx-auto rounded-2xl poster aspect-video"
          onClick={handleVideoClick}
          onTouchEnd={handleVideoClick}
          loop
          muted={true} // Always start muted
          playsInline
          controls={hasUserInteracted} // Show controls only after first interaction
          preload="metadata"
          poster="/images/thumbnail.png" // Using poster attribute for thumbnail
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        >
          <source src="/PhaseOne-Hero-Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="pt-20 lg:pt-32 max-w-[1600px] mx-auto px-6 lg:px-16 w-full space-y-[6vw]">
        <h3 className=" font-medium text-center text-pretty text-[20px] md:text-3xl lg:text-[35px] lg:tracking-tight leading-[130%] ">
          We work across core sectors, bringing{" "}
          <span className="text-[#0224E9] font-extrabold">
            deep commercial insight
          </span>{" "}
          and{" "}
          <span className="text-[#0224E9] font-extrabold">
            strong capital partner networks.
          </span>{" "}
          The PhaseOne Partners model is designed to turn that expertise into
          outcomes, connecting the{" "}
          <span className="text-[#0224E9] font-extrabold">
            right companies with the right capital
          </span>{" "}
          through clarity and confidence.
        </h3>
      </div>
    </section>
  );
}
