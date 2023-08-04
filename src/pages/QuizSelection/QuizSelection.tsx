import { useNavigate } from "react-router-dom";
import {
  SiLinux,
  SiGnubash,
  SiPhp,
  SiDocker,
  SiHtml5,
  SiMysql,
  SiWordpress,
  SiKubernetes,
  SiJavascript,
  SiAzuredevops,
} from "react-icons/si";

const QuizSelection = () => {
  const navigate = useNavigate();
  return (
    <div className="quizSelectionContainer">
      <div className="categoryTitle">Pick a category</div>
      <div className="categoryContainer">
        <SiLinux className="categoryBox" />
        <SiGnubash className="categoryBox" />
        <SiPhp className="categoryBox" />
        <SiDocker className="categoryBox" />
        <SiHtml5 className="categoryBox" />
        <SiMysql className="categoryBox" />
        <SiWordpress className="categoryBox" />
        <SiKubernetes className="categoryBox" />
        <SiJavascript className="categoryBox" />
        <SiAzuredevops className="categoryBox" />
      </div>
      <div className="difficultyTitle">Pick a difficulty</div>
      <div className="bottomSection">
        <div className="difficultyContainer">
          <div className="difficultyBox">Easy</div>
          <div className="difficultyBox">Medium</div>
          <div className="difficultyBox">Hard</div>
        </div>
        <div className="quizStartButton" onClick={() => navigate("/quiz")}>
          Start Quiz
        </div>
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

export default QuizSelection;
