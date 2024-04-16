import { useGlobalContext } from "../AppContext";
import SingleItem from "./SingleItem";

const Item = () => {
  const { items } = useGlobalContext();
  return (
    <section className="items">
      {items.map(({ id, name, completed }) => {
        return (
          <SingleItem key={id} name={name} id={id} completed={completed} />
        );
      })}
    </section>
  );
};

export default Item;
