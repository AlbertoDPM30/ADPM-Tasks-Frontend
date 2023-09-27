/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { TbX } from "react-icons/tb";
import {
  InputAddTask,
  ButtonStyle,
  H1Style,
  ContainerStyle,
  TextareaStyle,
  FormStyle,
  InputDate,
  XMark,
} from "../components/Login.styles";
import { useTask } from "../context/task.context";

import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);

function TaskForm() {
  const { register, handleSubmit, setValue } = useForm();
  const { CreateTask, GetTask, UpdateTask } = useTask();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await GetTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    if (params.id) {
      UpdateTask(params.id, dataValid);
    } else {
      CreateTask(dataValid);
    }
    navigate("/tasks");
  });

  return (
    <div className={ContainerStyle}>
      <form onSubmit={onSubmit} className={FormStyle}>
        <Link to={"/tasks"} className={XMark}>
          <TbX />
        </Link>
        <h1 className={H1Style}>Nueva tarea</h1>

        <input
          className={InputAddTask}
          type="text"
          placeholder="Titulo"
          {...register("title")}
          autoFocus
        />

        <textarea
          className={TextareaStyle}
          rows="3"
          placeholder="Descripción"
          {...register("description")}
        ></textarea>

        <div className={InputDate}>
          <label htmlFor="date">Fecha:</label>
          <input
            className={InputAddTask}
            id="date"
            type="date"
            {...register("date")}
          />
        </div>

        <button type="submit" className={ButtonStyle}>
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
