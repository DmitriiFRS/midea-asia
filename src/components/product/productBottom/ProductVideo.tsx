"use client";

import { strapiUrl } from "@/utils/consts";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

interface Props {
     productVideo: {
          url: string;
     };
}

const ProductVideo = ({ productVideo }: Props) => {
     const [isPlaying, setIsPlaying] = useState(false);
     const videoRef = useRef<HTMLVideoElement | null>(null);
     function playVideo() {
          if (videoRef.current) {
               if (videoRef.current.paused) {
                    videoRef.current.play();
                    setIsPlaying(true);
               } else {
                    videoRef.current.pause();
                    setIsPlaying(false);
               }
          }
     }
     return (
          <div className="w-full h-auto aspect-[16/9] relative">
               {!isPlaying && (
                    <button className="absolute left-1/2 top-1/2 w-14 h-14 bg-black p-3 z-10 rounded-lg pointer-events-none">
                         <FaPlay className="h-full w-full text-white" />
                    </button>
               )}
               <video onClick={playVideo} ref={videoRef} className="w-full h-full object-contain rounded-md mt-20">
                    <source src={strapiUrl + productVideo.url} className="w-full h-full object-cover" />
               </video>
          </div>
     );
};

export default ProductVideo;
