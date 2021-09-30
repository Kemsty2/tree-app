export default function Node({ id, handleAddNode, handleDeleteNode }) {
  return (
    <div className="node">
      <span>-{id}</span>
      <button onClick={handleAddNode}>+</button>
      <button onClick={() => handleDeleteNode(id)}>-</button>
    </div>
  );
}
