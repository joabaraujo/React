import { ChevronRightIcon, TrashIcon, ClipboardCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Task({ tasks, onTaskClick, onDeleteTask }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  } 

  return (
    <div className="h-[250px]">
      <ul className="h-full w-full ove  rflow-y-auto space-y-4 p-6 bg-slate-200 rounded-md shadow-inner">
        {tasks.length === 0 ? (
          <div className="flex items-center justify-center h-full ">
            <p>Não há tarefa registrada</p>
          </div>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
              <Button
                onClick={() => onTaskClick(task.id)}
                isCompleted={task.isCompleted}
                className={"flex gap-3 w-full"}
              >
                {task.isCompleted && <ClipboardCheck />}
                {task.title}
              </Button>

              <Button
                onClick={() => onSeeDetailsClick(task)}
              >
                <ChevronRightIcon />
              </Button>

              <Button
                onClick={() => onDeleteTask(task.id)}
              >
                <TrashIcon />
              </Button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Task;
