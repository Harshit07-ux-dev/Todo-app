import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick, onCompleteClick }) => {
  const activeItems = todoItems.filter((item) => !item.completed);
  const completedItems = todoItems.filter((item) => item.completed);

  const renderItems = (items) => items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoDate={item.duedate}
          todoName={item.task}
          isCompleted={item.completed}
          onDeleteClick={onDeleteClick}
          onCompleteClick={onCompleteClick}
        />
      ));

  return (
    <div className="space-y-6">
      {activeItems.length > 0 && (
        <section>
          <h2 className="mb-3 text-sm font-black uppercase tracking-wide text-black">Your tasks</h2>
          <div className="space-y-3">{renderItems(activeItems)}</div>
        </section>
      )}
      {completedItems.length > 0 && (
        <section>
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-500">Completed</h2>
          <div className="space-y-3">{renderItems(completedItems)}</div>
        </section>
      )}
    </div>
  );
};

export default TodoItems;