// import logo from './logo.svg';
import './App.css';
import Header from './components/Headers/Header';
import { TaskCards } from './components/Task/TaskCards';
// import { DragDropContext } from "react-beautiful-dnd";

function App() {
  return (
    <div className="app">
      <Header />
      <TaskCards />
    </div>
    );
}

export default App;
