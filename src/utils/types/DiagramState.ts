
import type {IDiagramEdges} from "./DiagramEdge";
import type {IDiagramElement} from "./DiagramElement";
export interface DiagramState {
    edges: IDiagramEdges[];
    diagramElements: IDiagramElement[];
}