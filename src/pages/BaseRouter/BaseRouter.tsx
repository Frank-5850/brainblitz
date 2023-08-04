import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../Home/Home";
import QuizSelection from "../QuizSelection/QuizSelection";
import App from "../../App";
import Quiz from "../Quiz/Quiz";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<h1>404</h1>}>
      <Route path="/home" element={<Home />} />
      <Route path="/quiz-selection" element={<QuizSelection />} />
      <Route path="/quiz" element={<Quiz />} />
    </Route>
  )
);

const BaseRouter = () => {
  return <RouterProvider router={router} />;
};

export default BaseRouter;
