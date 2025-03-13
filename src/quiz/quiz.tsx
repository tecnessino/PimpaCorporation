import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import QuizCard from "./QuizCard.tsx";

import { motion } from "motion/react";

import nagrodaZdjecie from "@/assets/pimpa/nagroda.jpg";
import bumbum from "@/assets/bumbum.mp4";
import timolha from "@/assets/timolha.jpg";

import questionsBase from "@/questions.js";

const shuffleArray = (arr) => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
};
export function Quiz() {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [points, setPoints] = React.useState(0);
  const [showReward, setShowReward] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const shuffled = React.useRef(false);


  if (!shuffled.current) {
      const array = shuffleArray(questionsBase())

      array.forEach(question => {
        const trackedAnswer = question.answers[question.validAnswerIndex]
        question.answers = shuffleArray(question.answers)

        question.validAnswerIndex = question.answers.indexOf(trackedAnswer)
      })

      setQuestions(array.slice(0,11));
      shuffled.current = true;
  }

  const isGameFinished = () => {
    return questionIndex == questions.length;
  };

  const next = (valid) => {
    if (valid) setPoints(points + 1);

    setQuestionIndex(questionIndex + 1);
  };

  const finishGame = () => {
    setQuestionIndex(questions.length);
  }

  const question = questions[questionIndex];

  return (
      <motion.div
        key={questionIndex}
        className=""
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Card className="bg-card/50 backdrop-blur-sm border-muted">
          <CardContent className="pt-6">
            {!isGameFinished() ? (
              <>
                <p className="text-gray-500 m-0 p-0">Punkty: {points} ({questionIndex+1}/{questions.length})</p>
                <QuizCard
                  key={question.question}
                  question={question.question}
                  answers={question.answers}
                  validAnswerIndex={question.validAnswerIndex}
                  onNext={next}
                  finishGame={finishGame}
                ></QuizCard>
              </>
            ) : (
              <>
                {!showReward ? (
                  <>
                    <h1 className="text-xl font-bold text-center">Gra skończona</h1>
                    <p
                      className={
                        "text-center text-ring " +
                        (questions.length == points ? "mb-2" : "")
                      }
                    >
                      Wynik: {points}
                    </p>
                    <img className="rounded-lg" width="400px" src={timolha} />
                    <p className="text-center text-ring">Timołha dla ciebie</p>
                    {questions.length == points || points == 9 ? (
                      <Button onClick={() => setShowReward(true)}>
                        Odbierz nagrode
                      </Button>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <>
                    {points == 9 ? <><h1 className="text-center font-bold text-3xl mb-4">9/11 SPECIAL EVENT</h1>
                        <div className="flex">
                          <video autoplay controls src={bumbum}> </video>
                        </div></> : <><h1 className="text-center font-bold text-3xl mb-4">PIMPA DLA CIEBIE!!!!</h1>
                      <div className="flex">
                        <img className="mr-5rounded-lg" width="450px" src={nagrodaZdjecie}></img>
                      </div></>}
                  </>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>
  );
}

export default Quiz;
