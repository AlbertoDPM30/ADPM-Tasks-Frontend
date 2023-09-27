/* eslint-disable react/prop-types */
import { TbEdit, TbTrashX } from "react-icons/tb";
import { useTask } from "../context/task.context";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard({ task }) {
  const { DeleteTask } = useTask();

  return (
    <div className="bg-gray-800 sm:w-[350px] max-sm:w-[80vw] sm:h-[250px] max-sm:h-[200px] p-4 text-center rounded-md">
      <h2 className="sm:text-2xl max-sm:text-lg font-semibold text-slate-200">
        {task.title}
      </h2>
      <p className="sm:text-base max-sm:text-sm py-3 px-2 text-slate-400 break-words sm:h-[130px] max-sm:h-[85px] overflow-auto">
        {task.description}
      </p>
      <div className="flex justify-between items-center pt-10 h-[10%]">
        <div className="flex gap-3 px-2 py-1">
          <Link
            to={`/tasks/${task._id}`}
            className="flex items-center gap-1 bg-green-700 text-zinc-300 hover:bg-green-600 max-sm:py-2 px-2 rounded-lg outline-none"
          >
            <TbEdit />
            <span className="max-sm:hidden">Editar</span>
          </Link>
          <button
            onClick={() => {
              DeleteTask(task._id);
            }}
            className="flex items-center gap-1 bg-red-800 text-zinc-300 hover:bg-red-700 max-sm:py-2 px-2 rounded-lg outline-none"
          >
            <TbTrashX />
            <span className="max-sm:hidden">Borrar</span>
          </button>
        </div>
        <p className="text-slate-600 md:text-sm">
          Para el: {dayjs(task.date).utc().format("DD/MM/YYYY")}
        </p>
      </div>
    </div>
  );
}

export default TaskCard;
