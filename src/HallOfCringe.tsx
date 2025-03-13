import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { motion } from "motion/react";

import missing from "@/assets/missing.png"
import potatoBs from "@/assets/potatobs.jpg";

import thumbnail from "@/assets/hallofcringe.webp"
export function HallOfCringe() {
  const audioRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);

  const cringes = [
    {
      "image": missing,
      "name": "Rak",
      "description": "gość myśli ze jest najlepszy w bs"
    },
    {
      "image": missing,
      "name": "Pimpa",
      "description": "czemu mi myszka nie strzela"
    },
    {
      "image": potatoBs,
      "name": "Potato BS",
      "description": "nie wiem daje wszędzie jakieś \"💀💀💀\" jakby pies mu umarł"
    }
  ]

  const togglePlay = () => {
   audioRef.current.play();
    setPlaying(!playing);
  };

  return (
      <motion.div
        className=""
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <div className={"flex justify-center items-center"} >
          <img width={"360px"} src={thumbnail} />
        </div>
        {cringes.map((cringe, index) => {
          return (<div key={index} className={"flex items-center my-5"}>
            <img className={"border border-border rounded-3xl mr-6"} width={"128px"} height={"128px"} src={cringe.image} />
            <div>
              <h1 className={"font-bold text-3xl"}>{cringe.name}</h1>
              <p>{cringe.description}</p>
            </div>
          </div>)
        })}
        <p>Jest dużo wiecej cringe ale niestety nie moge dodać tutaj (każdy wie o kogo chodzi) 🥹🥹🥹</p>
      </motion.div>
  );
}

export default HallOfCringe;
