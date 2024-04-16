import Item from "./Item";
import { useGlobalContext } from "../AppContext";
import { toast } from "react-toastify";

const Form = () => {
  const { inputText, setInputText, addItem } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText) {
      toast.error("please provide value");
      return;
    }
    addItem();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>task aide</h4>
      <div className="form-control">
        <input
          type="text"
          name="name"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          className="form-input"
        />
        <button className="btn">add item</button>
      </div>
      <Item />
    </form>
  );
};
export default Form;
