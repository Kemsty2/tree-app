import { useState } from "react";
import Node from "./Node";

const Tree = () => {
  const [node, setNode] = useState({
    id: 1,
    childrens: [],
  });

  function addChildren(childrens, path) {
    if (path.length === 1) {
      const id =
        childrens.length > 0 ? childrens[childrens.length - 1].id + 1 : 1;
      childrens.push({ id, childrens: [] });
    } else {
      const index = childrens.findIndex((x) => x.id === parseInt(path[1]));

      addChildren(childrens[index].childrens, path.slice(1));
    }
  }

  function removeChildren(childrens, path, id) {
    if (path.length === 0) {
      return;
    } else if (path.length === 1) {
      const index = childrens.findIndex((x) => x.id === parseInt(path[0]));
      childrens.splice(index, 1);
    } else {
      const index = childrens.findIndex((x) => x.id === parseInt(path[0]));
      removeChildren(childrens[index].childrens, path.slice(1), id);
    }
  }

  const handleAddClick = (e, level) => {
    e.preventDefault();
    const path = level.split(";");
    const cloneChildrens = node.childrens;
    addChildren(cloneChildrens, path);

    setNode({
      ...node,
      childrens: cloneChildrens,
    });
  };

  const handleRemoveClick = (e, id, level) => {
    e.preventDefault();

    const cloneChildrens = node.childrens;
    removeChildren(cloneChildrens, level.split(";").slice(1), id);

    setNode({
      ...node,
      childrens: cloneChildrens,
    });
  };

  return (
    <div className="l-tree">
      <Node
        node={node}
        addChildren={handleAddClick}
        removeChildren={handleRemoveClick}
        level="#"
      />
    </div>
  );
};

export default Tree;
