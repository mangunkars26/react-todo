import React, { useState } from "react";
import Button from "./commons/Button";
import InputField from "./commons/InputField";

//menerima onAddTodo dari App
const TodoForm = ({ onAddTodo }) => {

    //state untuk save teks input pengguna
    const [input, setInput] = useState('');

    //fungsi yg dipanggil saat form disubmit
    const handleSubmit = (e) => {
        e.preventDefault(); //cegah hlman reloading
        if (input.trim()) { //memastikan input tak kosong stelah di trim
            onAddTodo(input); //panggil fungsi onAddTodo dari prop utuk tambah tugas ke list
            setInput(''); //kosongin input field stelah submit
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
            <InputField
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tambah tugas baru"
            />
            <Button
                type="submit"
                variant="primary"
                >
                Tambah
            </Button>
        </form>
    );
}


export default TodoForm;