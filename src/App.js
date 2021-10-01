import { useState } from "react";
import "./App.css";
import NodeLayout from "./components/v1/NodeLayout";
import Tree from "./components/v2/Tree";

function App() {
  const [version, setVersion] = useState("v1");
  const onChange = (e) => {
    setVersion(e.target.value);
  };
  return (
    <div className="l-app">
      <div style={{ display: "flex" }}>
        <div>
          <label>Version 1 (Global State)</label>
          <input
            type="radio"
            name="version"
            value="v1"
            onChange={onChange}
            checked={version === "v1"}
          />
        </div>
        <div>
          <label>Version 2 (Local State per node)</label>
          <input
            type="radio"
            name="version"
            value="v2"
            onChange={onChange}
            checked={version === "v2"}
          />
        </div>
      </div>
      {version === "v1" ? (
        <Tree />
      ) : (
        <NodeLayout
          node={{
            id: 1,
            childrens: [],
          }}
          level={1}
        />
      )}
    </div>
  );
}

export default App;
