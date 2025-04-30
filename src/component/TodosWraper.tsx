import { useState } from "react";
import { Todotype } from "./Todos-type";
import TodosForm from "./TodosForm";
export default function TodosWraper() {
  const [todos, settodos] = useState<Todotype[]>([]);
  const addtodo = (title: string) => {
    settodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: title,
        check: false,
      },
    ]);
  };
  const delettodo = (id: string) => {
    settodos(
      todos.filter((todo) => {
        return todo.id != id;
      })
    );
  };
  const checktodo = (id: string) => {
    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, check: !todo.check } : { ...todo }
      )
    );
  };
  return (
    <section style={{ overflowY: "auto" }}>
      <ul className="list-group parent-list ">
        <li className="list-group-item text-secondary list-group-item-first">
          <span>to do list</span>
          <i className="bx bx-list-plus bx-tada"></i>
        </li>
        {todos.map((todo) => (
          <li className="list-group-item color-red d-flex  justify-content-between">
            <span>
              <i
                onClick={() => delettodo(todo.id)}
                id="delet-todo"
                className="bx bxs-trash-alt color-delet"
              ></i>
              <i
                onClick={() => checktodo(todo.id)}
                id="checked"
                className={`bx bx-check color-green ${
                  todo.check ? "checkdone" : ""
                }`}
              ></i>
            </span>
            <span
              className={`${todo.check ? "completed" : ""}`}
              id="checked-filter"
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
      <TodosForm addtodo={addtodo} />
    </section>
  );
}
