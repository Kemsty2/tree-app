const Node = ({ node, addChildren, removeChildren, level }) => {
  return (
    <div className="node">
      <span>-{node.id}</span>
      <button onClick={(e) => addChildren(e, level)}>+</button>
      <button onClick={(e) => removeChildren(e, node.id, level)}>-</button>
      <div className="children">
        {node.childrens
          ? node.childrens.map((children, idx) => {
              return (
                <Node
                  key={children.id}
                  node={children}
                  addChildren={addChildren}
                  removeChildren={removeChildren}
                  level={`${level};${children.id}`}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Node;
