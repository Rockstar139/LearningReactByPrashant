import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if (action.type === "NEW_ITEM") {
      newTodoItems = [
        ...currTodoItems,
        { name: action.payload.txtInput, dueDate: action.payload.dueDate },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newTodoItems = currTodoItems.filter((item) => {
        if (
          item.name === action.payload.txtInput &&
          item.dueDate === action.payload.dueDate
        ) {
          return false;
        } else return true;
      });
    }
    return newTodoItems;
  };

const TodoItemsContextProvider = ({children}) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (txtInput, dueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        txtInput,
        dueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (txtInput, dueDate) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        txtInput,
        dueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
