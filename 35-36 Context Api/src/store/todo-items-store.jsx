import { createContext } from "react";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: ()=>{},
    deleteItem: ()=>{},
});

const TodoItemsContextProvider = () =>{

}

export default TodoItemsContextProvider;