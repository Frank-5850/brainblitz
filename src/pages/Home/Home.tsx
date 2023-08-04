import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="mainContainer">
      <h1>Brain Blitz</h1>
      <h3
        onClick={() => {
          navigate("/quiz-selection");
        }}
      >
        Click to start
      </h3>
    </div>
  );
};

export default Home;
