import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
type Props = {
  question: string;
  answers: string[];
  validAnswerIndex: number;
  onNext: (valid: boolean) => void;
  finishGame: () => void;
};

import { useRef, useEffect } from "react";

export default function QuizCard(props: Props) {
  const [revealed, setRevealed] = React.useState(false);
  const [choosedGood, setChoosedGood] = React.useState(false);
  const next = async (valid) => {
    setRevealed(true);

    if(valid) setChoosedGood(true);

    await new Promise((resolve) => setTimeout(resolve, 2500));
    props.onNext(valid);
  };

  const onClick = (index) => {
    next(index == props.validAnswerIndex);
  };


  return (
    <>
      <h1 className="text-xl text-center font-bold my-4 leading-tight">
        {props.question}
      </h1>
      <div className="inline">
        <ul>
          {props.answers.map((answer, index) => (
            <Button
              onClick={() => onClick(index)}
              key={answer}
              className={[
                "w-full",
                "my-2",
                "transition-colors",
                revealed
                  ? props.validAnswerIndex == index
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "",
              ].join(" ")}
            >

              {answer}
            </Button>
          ))}
          <Button className={"w-full my-2"} variant={"destructive"} onClick={props.finishGame}>Zakończ grę</Button>
        </ul>
      </div>
    </>
  );
}
