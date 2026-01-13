"use client";
import { useState, lazy, Suspense } from "react";
import Image from "next/image";
import One from "@/public/images/video/video-image1.jpg";

// Lazy load Modal Video component for better performance
const ModalVideo = lazy(() => import("react-modal-video"));

const ModalThree = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="banner-video-area">
        <div className="container">
          <div className="banner-video__wrp image">
            <Image src={One} alt="Image" loading="lazy" />
            <div className="banner-video__video-btn">
              <div
                className="video-btn video-pulse "
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <a className="video-popup" onClick={() => setOpen(true)}>
                  <i className="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Suspense fallback={<div />}>
          <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="iVqz_4M5mA0"
            onClose={() => setOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
};

export default ModalThree;
