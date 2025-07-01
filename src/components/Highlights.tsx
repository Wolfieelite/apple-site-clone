import VideoCaraousel from "./VideoCaraousel";
import { watchImg, rightImg } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Highlights() {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, delay: 0.5, duration: 1, stagger: 0.25 });
    gsap.to("[data-link]", {
      opacity: 1,
      y: 0,
      delay: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  });

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc">
      <div className="screen-max-width">
        <div className="md-12 w-full md:flex justify-between items-end">
          <h1 id="title" className="text-2xl text-gray lg:text-6xl md:text-5xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20">
            Get the Highlights.
          </h1>

          <div className="flex items-end gap-5">
            <div className="flex items-end gap-2 opacity-0 translate-y-20" data-link="show-tag">
              <p className="text-blue hover:underline cursor-pointer flex items-center text-xl">
                watch the film <img src={watchImg} alt="watch the film button" className="ml-2" />
              </p>
            </div>

            <div className="flex items-end gap-2 opacity-0 translate-y-20" data-link="show-tag">
              <p className="text-blue hover:underline cursor-pointer flex items-center text-xl ">
                Watch the event <img src={rightImg} alt="watch the event button" className="ml-2" />
              </p>
            </div>
          </div>
        </div>
        <VideoCaraousel />
      </div>
    </section>
  );
}

export default Highlights;
