import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { motion } from "motion/react";



export function Tos() {
  const rules = [
        "Błędy ortograficzne są celowe.",
        "Strona została stworzona w celach humorystycznych.",
        "Każda osoba widoczna na zdjęciach na tej stronie wyraziła zgodę na ich publikację",
        "Zabrania się kopiowania, powielania oraz rozpowszechniania treści i zdjęć bez naszej wyraźnej zgody.",
        "Twórcy strony: Tecness, Jester, 3331x_",
        "Kontakt do administratora strony: webmaster@pimpa.pl"
    ]



  return (
      <motion.div
        className=""
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
          <h1 className={"font-bold text-center text-xl"}>Zasady użytkowania</h1>
          <ul>
              {rules.map((rule, index) => <li key={index}>{index+1}. {rule}</li>)}
          </ul>
      </motion.div>
  );
}

export default Tos;
