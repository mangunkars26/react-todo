import React from "react";
import Button from "./commons/Button";


const TodoItem = ({todo, onToggleComplete, handleDeleteClick}) => {
    // `todo` adalah data tugas yang diterima dari prop yang dikirim App
    // `onToggleComplete` adalah fungsi untuk menandai selesai (dikirim dari App)
    // `onDelete` adalah fungsi untuk menghapus tugas (dikirim dari App)

  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-300">
        <span
            onClick={() => onToggleComplete(todo.id)}
            className={`cursor-pointer flex-1 transition duration-200 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
        >
            {todo.text}
        </span>
        <Button variant="white" onClick={() => handleDeleteClick(todo)}>
        <svg xmlns="http://www.w3.org/2000/svg" color="white" width="16" height="16" viewBox="0 0 24 24">
        <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
        </Button>
    </div>
);
}

export default TodoItem;