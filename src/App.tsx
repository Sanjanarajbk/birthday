import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import MiniGolf from "./MiniGolf";
import Spa from "./Spa";
import Meal from "./Meal";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      question: "Do you love me?",
      options: ["Yes", "Yes"],
    },
    {
      question:
        "I have few options for you on how we are celebrating your birthday, so Please go through and Let me know.",
      options: [],
    },
    {
      question: "Mini Golf",
      options: [],
    },
    {
      question: "Spa",
      options: [],
    },
    {
      question: "Fine Dining (5 or 7 course meal)",
      options: [],
    },
  ];

  function handleAnswer(option: string) {
    // Handle the answer here if needed, e.g., save the answer to state
    console.log(option);
    // Move to the next question
    if (option === "Back") {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "600px" }}
        >
          <DotLottieReact
            src="https://lottie.host/09189953-8a5c-42b5-943b-086becaca68e/fuVwuCd2hU.lottie"
            loop
            autoplay
          />

          <text style={{ fontSize: "40px", marginLeft: "120px" }}>
            <ReactTyped
              strings={[
                "Happy Birthdayyyy Vichu!!",
                "You are the best Pengu &#128151;",
                "Full love only &#10084;",
              ]}
              typeSpeed={100}
              backSpeed={200}
            />
          </text>
        </div>

        {currentQuestionIndex < questions.length && (
          <div
            className="question"
            style={{ display: "flex", flexDirection: "column", width: "500px" }}
          >
            <text style={{ margin: "auto", fontSize: "40px" }}>
              {questions[currentQuestionIndex].question}
            </text>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              {questions[currentQuestionIndex].options.length > 0 ? (
                questions[currentQuestionIndex].options.map((option, index) => (
                  <button key={index} onClick={() => handleAnswer(option)}>
                    {option}
                  </button>
                ))
              ) : (
                <>
                  <button onClick={() => handleAnswer("Back")}>back</button>

                  {currentQuestionIndex < 4 && <button onClick={() => handleAnswer("Next")}>Next</button>}
                </>
              )}
            </div>
          </div>
        )}

        {currentQuestionIndex == 2 && (
          <div
            className="question"
            style={{ display: "flex", flexDirection: "column", width: "680px" }}
          >
            <MiniGolf />
          </div>
        )}

{currentQuestionIndex == 3 && (
          <div
            className="question"
            style={{ display: "flex", flexDirection: "column", width: "680px" }}
          >
            <Spa/>
          </div>
        )}
        {currentQuestionIndex == 4 && (
          <div
            className="question"
            style={{ display: "flex", flexDirection: "column", width: "680px" }}
          >
            <Meal/>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
