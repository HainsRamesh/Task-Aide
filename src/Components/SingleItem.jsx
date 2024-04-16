import { useGlobalContext } from "../AppContext";

const SingleItem = ({ name, completed, id }) => {
  const { removeItem, editItem } = useGlobalContext();
  return (
    <article className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {name}
      </p>
      <button
        className="remove-btn btn"
        onClick={() => {
          removeItem(id);
        }}
      >
        remove
      </button>
    </article>
  );
};
export default SingleItem;
