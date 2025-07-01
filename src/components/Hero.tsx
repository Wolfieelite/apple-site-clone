import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
function Hero() {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  const handleVideoSrcChange = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcChange);

    return () => {
      window.removeEventListener("resize", handleVideoSrcChange);
    };
  });

  useGSAP(() => {
    gsap.to("#heroText", {
      opacity: 1,
      delay: 3,
      duration: 0.5,
      ease: "easeInOut",
    });
    gsap.to("#callToAction", {
      opacity: 1,
      y: 0,
      delay: 3,
      duration: 0.5,
    });
  }, []);
  return (
    <section className="w-full h-[100vh-90px] bg-black relative pb-16">
      <div className="h-5/6 w-full flex items-center justify-center flex-col">
        <p id="heroText" className="text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10">
          {" "}
          iphone 15 pro
        </p>

        <div className="sm:w-10/12 w-9/12"></div>
        <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <div id="callToAction" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="px-5 py-2 rounded-3xl bg-blue my-5 hover:bg-transparent border border-transparent hover:bord hover:border-white">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
}

export default Hero;
