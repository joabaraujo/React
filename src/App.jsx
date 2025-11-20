import { useState, useEffect } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import Title from "./components/Title";

function App() {
  const [taskCounter, setTaskCounter] = useState(1);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("@tasks")) || []);

  useEffect(() => {
    localStorage.setItem("@tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect( () => {
  //   async function fetchTasks(){
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     const data = await response.json()

  //     setTasks(data)
  //   }

  //   fetchTasks()
  // }, [])

  function onTaskClick(idTask) {
    const newTasks = tasks.map((task) => {
      //PRECISO ATUALIZAR O VALOR DO ESTADO
      if (idTask === task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //NAO PRECISA ATUALIZAR
      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTask(idTask) {
    const newTasks = tasks.filter((task) => {
      return task.id !== idTask;
    });

    setTasks(newTasks);
  }

  function onAddTask(title, description) {
    setTasks((prev) => {
      const newTask = {
        id: taskCounter,
        title,
        description,
        isCompleted: false,
      };
      return [...prev, newTask];
    });

    setTaskCounter( ( prev ) => {
      return prev + 1
    })
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>
          Gerenciador de Tarefas
        </Title>
        <AddTask onAddTask={onAddTask} />
        <Task
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
