export const addItemToServer = async (task ,date) => {
const response = await fetch("http://localhost:3000/api/todo", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ task, date }),
});
const item = await response.json();
return mapServerItemToClientItem(item);
}

export const getItemsFromServer = async () => {
  const response = await fetch("http://localhost:3000/api/todo");
  const items = await response.json();
  return items.map(mapServerItemToClientItem);
};
export const markItemCompletedOnServer = async (id) => {
  const response = await fetch(`http://localhost:3000/api/todo/${id}/completed`, {
    method: "PUT",

  });
  const item = await response.json();
  return mapServerItemToClientItem(item);
};
export const deleteItemFromServer = async (id) => {
  await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "DELETE",
  });
  return id;
};


const mapServerItemToClientItem = (serverItem) => {
  return {
    id: serverItem._id,
    task: serverItem.task,
    duedate: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  };
};