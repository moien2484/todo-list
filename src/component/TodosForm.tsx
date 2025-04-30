import { useState } from "react";

// import React from 'react'
type TodosFormprops = {
  addtodo: (title: string) => boolean;
};
export default function TodosForm({ addtodo }: TodosFormprops) {
  const [valuetodo, setvaluetodo] = useState<string>("");
  const submithandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (valuetodo) {
      addtodo(valuetodo);
      setvaluetodo("");
    }
  };
  return (
    <form
      onSubmit={submithandler}
      action=""
      className="d-flex parent-form justify-content-around mt-5"
    >
      <button className="btn-form rounded ">add</button>
      <input
        onChange={(event) => setvaluetodo(event.target.value)}
        value={valuetodo}
        id="name-todo"
        type="text"
        placeholder=""
        className="rounded"
      />
    </form>
  );
}
