import React from "react";
import "../styles/note-list.css";
import { IProject } from "../Interfaces";
interface Props {
  task: IProject;
  handleDelete(taskNameToDelete: string): void;
}
const NoteList = ({ task, handleDelete }: Props) => {
  return (
    <div className="list-container">
      <h2 className="list-title"> {task.title}</h2>
      <p className="list-text"> {task.text}</p>
      <button
        className="deleteBtn"
        onClick={() => {
          handleDelete(task.title);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default NoteList;
