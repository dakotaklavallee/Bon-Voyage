import React from "react";
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import {useNavigate} from "react-router-dom"
import "react-buzzfeed-quiz/lib/styles.css";

export default function OptionsPage({questionsArray, resultHandler}){

    const resultArray = [
        {
            title:"Your journey begins now",
        }
    ]

    const navigate = useNavigate();

    const restartHandler = () => {
        if(window.confirm("Do you wish to restart?")){
            navigate("/start")
        };
    };

    const answerSelectionHandler = () => {
        console.log("Answer selected");
    }

    return (
        <div>
        <BuzzFeedQuiz
        byLine={false}
        autoScoll={true}
        onRestart={restartHandler}
        onResult={resultHandler}
        onAnswerSelection={answerSelectionHandler}
        questions={questionsArray}
        results={resultArray}
        />  
        </div>
        
    );
}