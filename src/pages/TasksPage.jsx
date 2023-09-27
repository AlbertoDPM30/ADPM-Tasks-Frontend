/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useTask } from "../context/task.context";
import TaskCard from "../components/TaskCard";
import { SearchBar } from "../components/Login.styles";

function TasksPage() {
  const { GetTasks, tasks } = useTask();

  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const results = !search
    ? tasks
    : tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    GetTasks();
  }, []);

  if (results.length === 0)
    return (
      <>
        <div className="flex justify-center">
          <input
            onChange={searcher}
            value={search}
            type="search"
            placeholder="Buscar"
            className={SearchBar}
          />
        </div>
        <h1 className="pt-[80px] text-center text-3xl font-semibold text-slate-200">
          No hay tareas
        </h1>
      </>
    );

  return (
    <div className="flex flex-col items-center">
      <input
        onChange={searcher}
        value={search}
        type="search"
        placeholder="Buscar"
        className={SearchBar}
      />

      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5 py-[55px] sm:px-[40px] max-sm:px-0">
        {results.map((task) => (
          <TaskCard task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
