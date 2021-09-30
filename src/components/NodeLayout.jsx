import Node from "./Node";
import { useState, useEffect } from "react";

const NodeLayout = ({ node, level, onDelete }) => {
  const [nodes, setNodes] = useState(null);

  useEffect(() => {
    console.log("refresh");
    if (node !== null) setNodes({ id: node.id, childrens: node.childrens });
  }, [node]);

  const handleAddNode = () => {
    const id = nodes.childrens.length
      ? nodes.childrens[nodes.childrens.length - 1].id + 1
      : 1;
    setNodes({
      ...nodes,
      childrens: [...nodes.childrens, { id, childrens: [] }],
    });
  };

  const handleDeleteNode = (id) => {
    console.log(id);
    setNodes({
      ...nodes,
      childrens: nodes.childrens.filter((x) => x.id !== id),
    });
  };

  return nodes ? (
    <div>
      <Node
        id={node.id}
        handleAddNode={handleAddNode}
        handleDeleteNode={onDelete}
      />
      <div style={{ marginLeft: `10px` }}>
        {nodes && nodes.childrens
          ? nodes.childrens.map((elt) => {
              return (
                <NodeLayout
                  key={elt.id}
                  childrens={elt.childrens}
                  id={elt.id}
                  level={level + 1}
                  node={elt}
                  onDelete={handleDeleteNode}
                />
              );
            })
          : null}
      </div>
    </div>
  ) : null;
};
export default NodeLayout;
