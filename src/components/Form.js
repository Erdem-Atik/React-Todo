import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState(""); //use hook is initial name, name
  function handleSubmit(e) {
    //event handling
    console.log("test");
    e.preventDefault();
    if (name) props.addTask(name); // added by me in order to solve the empty entry problem
    setName("");
  }
  function handleChange(e) {
    setName(e.target.value); // set the name from user input
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}
