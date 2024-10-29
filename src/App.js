import { useState, useEffect } from 'react';
import './index.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import Modal from './components/commons/Modal';
import Button from './components/commons/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';


const App = () => {
  //state utuk save daftar tugas
  const [todos, setTodos] = useState(() => {

    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // const [showModal, setShowModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null); //state u simpan tugas yang akan dihapus
  const [isModalOpen, setIsModalOpen] = useState(false);

  //efek u simpan daftar tugas ke local storage tiap kali state `todos` berubah
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); //ubah array `todos` jadi string jSON dan simpan dia
  }, [todos]);

  //fungsi tambah tugas baru
  const addTodo = (text) => {
    //buat objek baru  dgn id unik, teks tugas dan status blm slesai
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]); //tambah tugas baru ke dalam array `todos`
  }

  //fungsi ut tandai tugas slesai atau belum
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        //cari tugas yang ID nya sesuai lalu mengubahnya jadi `completed`
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

const handleDeleteClick = (todo) => {
  setTodoToDelete(todo);
  setIsModalOpen(true);
}

const confirmDelete = () => {
  if (todoToDelete) {
      setTodos(todos.filter(todo => todo.id !== todoToDelete.id )); //hapus tugas yg tersimpan di todotodelete
      toast.success(`Tugas "${todoToDelete.text}" berhasil dihapus!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTodoToDelete(null);
  }
  setIsModalOpen(false);
};



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Todo List</h1>
        
        {/* Memanggil komponen TodoForm dan mengirim fungsi addTodo sebagai prop `onAddTodo` */}
        <TodoForm onAddTodo={addTodo} />

        {/* Mapping setiap tugas di array todos dan render komponen TodoItem */}
        <div className="w-full max-w-md mt-4">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo} // Mengirim data tugas sebagai prop ke TodoItem
                    onToggleComplete={toggleComplete} // Mengirim fungsi toggleComplete untuk menandai selesai
                    handleDeleteClick={handleDeleteClick}          
                />
            ))}
        </div>

        <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Konfirmasi Hapus"
        >
            <p>Apa anda yakin akan hapus tugas "<strong>{todoToDelete?.text}</strong>"?</p>
            <Button onClick={confirmDelete} variant="danger">
                Tentu!
            </Button>
        </Modal>

        <ToastContainer />
    </div>
);


}
export default App;
