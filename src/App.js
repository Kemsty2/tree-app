import "./App.css";
import NodeLayout from "./components/NodeLayout";

function App() {
  return (
    <div className="l-app">
      <div className="l-node">
        <NodeLayout
          node={{
            id: 1,
            childrens: [],
          }}
          level={1}
        />
      </div>
    </div>
  );
}

export default App;
