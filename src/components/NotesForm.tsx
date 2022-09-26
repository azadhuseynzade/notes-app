import React, { useState, FC, ChangeEvent } from "react";
import "../styles/notes-form.css";
import { IProject } from "../Interfaces";
import NoteList from "./NoteList";

const NotesForm: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [arr, setArr] = useState<IProject[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else {
      setText(event.target.value);
    }
  };

  const handleAdd = () => {
    const newTask = { title: title, text: text };

    setArr([...arr, newTask]);
    setText("");
    setTitle("");
  };

  const handleDelete = (deletedName: string): void => {
    setArr(
      arr.filter((task) => {
        return task.title !== deletedName;
      })
    );
  };

  return (
    <div className="main-container">
      <label style={{ marginTop: "50px" }}>Title</label>
      <input
        value={title}
        onChange={handleChange}
        name="title"
        className="title"
        placeholder="Add title..."
      />
      <label style={{ marginTop: "30px" }}>Text</label>
      <input
        value={text}
        onChange={handleChange}
        name="text"
        className="text"
        placeholder="Add your notes"
      />
      <button type="submit" onClick={handleAdd}>
        Submit
      </button>
      <h1 className="notes-title">Notes</h1>

      <ul>
        {arr.map((task: IProject, key: number) => {
          return <NoteList key={key} task={task} handleDelete={handleDelete} />;
        })}
      </ul>
    </div>
  );
};

export default NotesForm;
