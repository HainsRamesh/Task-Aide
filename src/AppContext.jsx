import { createContext, memo, useContext, useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

// create global context
const GlobalContext = createContext();

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);

// Entire application's context
const AppContext = ({ children }) => {
  // Get Local Storage
  const defaultItems = JSON.parse(localStorage.getItem("myList") || "[]");
  // App States
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState(defaultItems);
  //  Add items
  const addItem = () => {
    const value = {
      id: nanoid(),
      name: inputText,
      completed: false,
    };
    setItems((prevItems) => {
      const newItems = [...prevItems, value];
      setLocalStorage(newItems);
      return newItems;
    });
    toast.success("item added to the list");
    setInputText("");
  };
  //   Remove items
  const removeItem = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
    setLocalStorage(newList);
    toast.success("item removed");
  };
  //   Edit item
  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  // Set Local Storage
  const setLocalStorage = (item) => {
    localStorage.setItem("myList", JSON.stringify(item));
  };
  return (
    <GlobalContext.Provider
      value={{
        inputText,
        setInputText,
        items,
        addItem,
        removeItem,
        editItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default memo(AppContext);
