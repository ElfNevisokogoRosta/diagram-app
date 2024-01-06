export interface IDiagramElement {
    id: string;
    position: {
        x: number;
        y: number;
    };
    data: string[];
    type: string;
}