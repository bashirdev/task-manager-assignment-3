import { useReducer } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TaskBoard from "./components/task/TaskBoard";
import { TaskContext } from "./context";
import { data } from "./data";
import { taskReducers } from "./reducers/taskReducers";


const App = () => {
  const [state, dispatch]= useReducer(taskReducers,data)

  return (
    <TaskContext.Provider value={{state, dispatch}}>
    <div className="flex flex-col items-center justify-center">
      <Header />
      <Hero />
      <TaskBoard />
      <Footer />
    </div>
    </TaskContext.Provider>
  );
};

export default App;