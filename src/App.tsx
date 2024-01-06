
import type { Node } from "reactflow";
import { NodeChange, ReactFlow, useEdgesState, useNodesState } from "reactflow";
import { useDispatch, useSelector } from "react-redux";
import {  initElements, updateElement } from "./redux/reducers";
import "reactflow/dist/style.css";
import nodeTypes from "./components/Box/BoxNode";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import {DiagramState} from "./utils/types/DiagramState";
const App = () => {
  const [diagramData, setDiagramData] = useLocalStorage<DiagramState | undefined>(
    "diagram",
    undefined,
  );
  const { diagram } = useSelector((state: { diagram: DiagramState }) => state);
  const dispatch = useDispatch();
  const [nodes, setNodes, onNodesChange] = useNodesState(
    diagram.diagramElements,
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(diagram.edges);
  const nodesChangeHandler = (changes: NodeChange[]) => {
    onNodesChange(changes);
  };
  useEffect(() => {
    if (diagramData && diagramData.diagramElements && diagramData.edges) {
      dispatch(initElements(diagramData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setNodes(diagram.diagramElements);
    setEdges(diagram.edges);
    setDiagramData(diagram);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diagram]);
  const dragStopHandler = (event: any, node: Node) => {
    const { position, id } = node;
    dispatch(updateElement({ position, id }));
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onNodesChange={nodesChangeHandler}
        onNodeDragStop={dragStopHandler}
      />
    </div>
  );
};

export default App;
