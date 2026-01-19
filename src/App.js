import { Button } from "reactstrap";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Input, FormGroup, Label, ListGroup, ListGroupItem } from "reactstrap";
import { saveTaskToServer } from "./store/action";
function App() {
  const { list, loading } = useSelector((state) => state.tasks);
  const [taskInput, setTaskInput] = useState();
  const dispatch = useDispatch();
  const handleAddTask = () => {
    if (taskInput) {
      const task = taskInput;
      dispatch(saveTaskToServer(task));
      setTaskInput("");
    }
  };
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>To Do List App</h1>
        <FormGroup>
          <Label for="exampleText">Task</Label>
          <Input
            id="exampleText"
            placeholder="Enter your task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
        </FormGroup>
        <Button
          color="primary"
          onClick={() => handleAddTask()}
          disabled={loading}
        >
          {" "}
          {loading ? "Loading..." : "Add Task"}
        </Button>
        <ListGroup>
          {list.map((task, index) => (
            <ListGroupItem key={index}>{task.text}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </>
  );
}

export default App;
