import { useRef } from "react";
import { MdAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  /*const handleNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(`noOfUpdates are :${noOfUpdates.current}`);
  };*/
  const handleButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value
    const dueDate = dueDateElement.current.value
    todoNameElement.current.value ="";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="mb-6 rounded-xl border-2 border-black bg-white p-4 shadow-[5px_5px_0_0_#000] sm:p-5">
      <form className="grid gap-3 sm:grid-cols-[1fr_170px_auto]" onSubmit={handleButtonClicked}>
        <div>
          <input
            type="text"
            ref={todoNameElement}
            placeholder="What needs to get done?"
            required
            className="h-11 w-full rounded-lg border-2 border-neutral-300 px-3 text-sm font-medium text-black outline-none placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-neutral-200"
          />
        </div>
        <div>
          <input type="date"
            ref={dueDateElement}
            required
            className="h-11 w-full rounded-lg border-2 border-neutral-300 px-3 text-sm font-medium text-black outline-none focus:border-black focus:ring-2 focus:ring-neutral-200"
           />
        </div>
        <div>
          <button type="submit" className="flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-black px-4 text-sm font-bold text-white shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black sm:w-auto">
            <MdAdd className="text-xl" />
            Add task
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
