import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-inner flex flex-col">
      <Input 
        type="text"
        placeholder="Digite a tarefa"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />

      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />

      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          //se estiver vazio
          if(!title.trim() || !description.trim()){
            return alert("Preencha os campos corretamente")
          }
          onAddTask(title, description)
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
