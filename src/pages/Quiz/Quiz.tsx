import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  return (
    <div className="quizContainer">
      <div className="quizTopSection">
        <div>Timer</div>
        <div>Name</div>
        <div>Score</div>
      </div>
      <h1 className="quizQuestionTitle">Question</h1>
      <div className="quizAnswerBoxGroup">
        <div className="quizAnswerBox">Answer 1</div>
        <div className="quizAnswerBox">Answer 2</div>
        <div className="quizAnswerBox">Answer 3</div>
        <div className="quizAnswerBox">Answer 4</div>
      </div>
      <div className="quizBottomSection">
        <div>question count</div>
        <div>next question</div>
      </div>
      <h3
        onClick={() => {
          navigate("/home");
        }}
      >
        Go Home
      </h3>
    </div>
  );
};

export default Quiz;
