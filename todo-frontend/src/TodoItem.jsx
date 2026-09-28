import { MdCalendarToday, MdCheck, MdDelete } from "react-icons/md";

function formatTodoDate(dateValue) {
  if (!dateValue) return "No date";
  const [year, month, day] = String(dateValue).slice(0, 10).split("-");
  return `${day}/${month}/${year}`;
}

function TodoItem({id ,todoName ,todoDate , isCompleted, onDeleteClick, onCompleteClick}){ 
  const formattedDate = formatTodoDate(todoDate);

  return (
  <div className={`grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border-2 border-neutral-200 border-l-4 ${isCompleted ? "border-l-neutral-300" : "border-l-black"} bg-white px-3 py-3 shadow-sm transition-shadow hover:border-black hover:shadow-md sm:grid-cols-[auto_1fr_150px_auto]`}>
          <button
            type="button"
            aria-label={isCompleted ? `${todoName} completed` : `Mark ${todoName} as completed`}
            disabled={isCompleted}
            className={`flex h-7 w-7 items-center justify-center rounded-full border-2 ${isCompleted ? "border-black bg-black text-white" : "border-neutral-300 text-transparent hover:border-black"}`}
            onClick={() => onCompleteClick(id)}
          >
            <MdCheck />
          </button>
          <div className="min-w-0">
            <p className={`truncate text-sm font-bold ${isCompleted ? "text-neutral-400 line-through" : "text-black"}`}>{todoName}</p>
            <p className="mt-1 text-xs text-neutral-500 sm:hidden">Due: {formattedDate}</p>
          </div>
          <div className="hidden items-center justify-end gap-2 text-right text-sm font-medium text-neutral-500 sm:flex">
            <MdCalendarToday className="text-sm text-neutral-400" />
            {formattedDate}
          </div>
          <div>
            <button type="button" aria-label={`Delete ${todoName}`} className="flex h-9 w-9 items-center justify-center rounded-md text-neutral-400 hover:bg-neutral-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-black" onClick={() => onDeleteClick(id)}>
              <MdDelete className="text-xl" />
            </button>
          </div>
    </div>
  );
}
export default TodoItem;