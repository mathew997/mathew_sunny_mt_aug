import React, { useState } from "react";
import VideoThumb from "../assets/images/video.png";
import { PlayButtonIcon, PlayButtonSmIcon } from "../assets/icons";
import Modal from "./reusable/Modal";

const Video = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <section className="container mx-auto px-5 lg:px-28 py-5 lg:py-14">
        <div className="video-wrapper relative">
          <img src={VideoThumb} alt="Video" className="w-full" />
          <div className="hidden lg:flex gap-6 absolute bottom-14 left-14">
            <button className="play-btn" onClick={openModal}>
              <PlayButtonIcon />
            </button>
            <p className="text-white text-3xl font-normal">
              <span className="block">See what</span>
              <span className="block"> Delmonte saying</span>
              <span className="block">about us</span>
            </p>
          </div>

          <button
            className="flex gap-3.5 border py-2.5 px-5 mt-4 lg:hidden"
            onClick={openModal}
          >
            <div className="icon">
              <PlayButtonSmIcon />
            </div>
            <span>See what people saying</span>
          </button>
        </div>
      </section>

      <Modal isOpen={showModal} onClose={closeModal} heading="">
        <>
          <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/GLxZ1gyW-IU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </>
      </Modal>
    </>
  );
};

export default Video;
