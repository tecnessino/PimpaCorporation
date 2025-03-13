import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { motion } from "motion/react";

import timolha from "./assets/timolha.jpg";
import jakub from "./assets/jakub.jpg";
import sciagi from "./assets/sciaga.png";
import malze from "./assets/malze.jpg";
import grzybny from "./assets/grzybny.jpg";
import przybysz from "./assets/bartek.jpg";
import lidl from "./assets/lidl.jpg";
import sketchers from "./assets/sketchers.jpg";

import thumbnail from "@/assets/halloffame.webp";

export function HallOfFame() {
  const audioRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);

  const togglePlay = () => {
   audioRef.current.play();
    setPlaying(!playing);
  };

  const images = [
    [{"image": timolha, "text": "Freaky timołha", "width": "460px"},{"image": jakub, "text": "Sigma Kuba", "width": "460px"},{"image": sciagi, "text": "", "width": "460px"}],
    [{"image": malze, "text": "Małże na chodniku", "width": "460px"}, {"image": grzybny, "text": "Grzybny", "width": "460px"}, {"image": przybysz, "text": "Przybysz", "width": "460px"} ],
    [{"image": lidl, "text": "EkoLidl", "width": "460px"}, {"image": sketchers, "text": "Sketchers", "width": "460px"} ]
  ]

  return (
      <motion.div
        className=""
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <div className={"flex justify-center items-center"} >
          <img width={"360px"} src={thumbnail} />
        </div>
        <audio ref={audioRef} loop>
          <source src="./assets/candykick.mp3" type="audio/mpeg"></source>
        </audio>

          {images.map(imgArr => {
            return (<div className={"flex justify-center items-center mt-4"}>
              {imgArr.map((image, index) => {
                return (<div className={"mx-5"} key={index}>
                  <img width={image.width} src={image.image} />
                  <h1 className={"text-center font-bold text-3xl"}>{image.text}</h1>
                </div>)
              })}
            </div>)
          })}

      </motion.div>
  );
}

export default HallOfFame;
