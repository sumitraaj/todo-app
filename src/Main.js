import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import "./App.css";
function Main() {
  const loggedIn=JSON.parse(localStorage.getItem("loggedIn"));
  if(!loggedIn)
  {
     Navigate("/");
  }
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);
  const[user,setUser]=useState("");
  const handleAddTodo = () => {
    const titleExist=allTodos.some(todo=>todo.title===newTitle);
  if(newTitle==''|| newDescription==''){
    alert("fill the title and discription filed");
  }
  else if(titleExist){
    alert("title alredy exist");
  }
  else{
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem(user+"todolist", JSON.stringify(updatedTodoArr));
  }
};
  useEffect(() => {
    let user=localStorage.getItem('currentUser');
    console.log(user);
    let savedTodo = JSON.parse(localStorage.getItem(user+"todolist"));
    console.log(savedTodo);
    setUser(user);
    let savedCompletedTodo = JSON.parse(localStorage.getItem(user+"completedTodos"));
    if (savedTodo) {
      setTodos(savedTodo);
    }
    if(savedCompletedTodo)
    {
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);
  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index,1);
    localStorage.setItem(user+"todolist", JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };
  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth();
    let yr = now.getFullYear();
    let hr=now.getHours();
    let m=now.getMinutes();
    let s=now.getSeconds();
    let completedOn=" "+dd+"-"+mm+"-"+yr+" at "+hr+":"+m+":"+s;
    let filteredItem={
      ...allTodos[index],
      completedOn:completedOn
    }
    let updatedCompletedArr=[...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem(user+'completedTodos',JSON.stringify(updatedCompletedArr));
  };
  const handleDeleteCompletedTodo=index=>{
    let reducedTodo=[...completedTodos];
    reducedTodo.splice(index,1);
    localStorage.setItem(user+"completedTodos",JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  }
  const navigate=useNavigate();
  const handleLogout=()=>{
     localStorage.removeItem("loggedIn");
     navigate("/");
  }
  return (
    <div className="App vh-100">
      <div className="head">
      <h1 className="heading-line">Welcome {user} to your Todo list</h1>
      <button className="log-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="todo-wrappper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="what is the task?"
            />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="what is the description of task?"
            />
          </div>
          <div className="todo-input-item">
            <button
              type="button"
              onClick={handleAddTodo}
              className="primaryBtn"
            >
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondarybtn ${isCompleteScreen === false && "active"}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondarybtn ${isCompleteScreen === true && "active"}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            completed
          </button>
        </div>
        <div className="todo-list">
          {isCompleteScreen===false && allTodos.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div>
                  <AiOutlineDelete
                    className="icon"
                    onClick={() => handleDeleteTodo(index)}
                  />
                  <BsCheckLg
                    className="check-icon"
                    onClick={() => handleComplete(index)}
                  />
                </div>
              </div>
            );
          })}
          {isCompleteScreen===true && completedTodos.map((item, index) => {
            return (
              <div className="todo-list-item" key={index}>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p><small>Completed on:{item.completedOn}</small></p>
                </div>
                <div>
                  <AiOutlineDelete
                    className="icon"
                    onClick={() => handleDeleteCompletedTodo(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Main
