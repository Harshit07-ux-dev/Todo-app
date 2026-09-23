import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./TodoItems";
import WelcomeMessage from "./WelcomeMessage";
import { useState,useEffect } from "react";
import { addItemToServer, deleteItemFromServer, getItemsFromServer, markItemCompletedOnServer } from "./services/itemService";
import "./components/App.css";



function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemsFromServer().then((initialItems) => {
      setTodoItems(initialItems);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    const item = await addItemToServer(itemName, itemDueDate);

    setTodoItems((currentItems) => [...currentItems, item]);
  };

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    setTodoItems((currentItems) => currentItems.filter((item) => item.id !== deletedId));
  };

  const handleMarkCompleted = async (id) => {
    const updatedItem = await markItemCompletedOnServer(id);
    setTodoItems((currentItems) => currentItems.map((item) =>
      item.id === id ? updatedItem : item,
    ));
  };

  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-10 text-black sm:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-7 flex items-end justify-between gap-4 border-b-2 border-black pb-5">
          <AppName />
          <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-white">
            {todoItems.length} {todoItems.length === 1 ? "task" : "tasks"}
          </span>
        </div>
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length > 0 && (
          <p className="mb-3 text-sm text-slate-500">
            {todoItems.filter((item) => !item.completed).length} active {todoItems.filter((item) => !item.completed).length === 1 ? "task" : "tasks"}
          </p>
        )}
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
          onCompleteClick={handleMarkCompleted}
        />
      </div>
    </main>
  );
}
export default App;
