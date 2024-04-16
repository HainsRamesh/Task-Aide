import Form from "./Components/Form";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <section>
      <Form />
      <ToastContainer position="top-center" autoClose="3000" />
    </section>
  );
};
export default App;
