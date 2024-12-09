import CorouselComponent from "./components/corousel";
import "./styles.css";
import { data } from "./data.js";
export default function App() {
  return (
    <div className="App">
      <CorouselComponent data={data} count={3} />
    </div>
  );
}
