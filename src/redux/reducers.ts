import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import generateArray from "../utils/generateArray";
import { DiagramState } from "../utils/types/DiagramState";
import { IDiagramElement } from "../utils/types/DiagramElement";

const initialState: DiagramState = {
  edges: [],
  diagramElements: [
    {
      id: "1",
      position: { x: 20, y: 80 },
      type: "boxNode",
      data: ["1", "2", "3", "4", "5", "6"],
    },
  ],
};

const foundElement = (searchValue: string, arr: IDiagramElement[]) => {
  return arr.find((e) => {
    return e.data.includes(searchValue);
  });
};
export const diagramSlice = createSlice({
  name: "diagram",
  initialState,
  reducers: {
    initElements: (state, action: PayloadAction<DiagramState>) => {
      return { ...state, ...action.payload };
    },
    updateElement: (
      state,
      action: PayloadAction<{ position: { x: number; y: number }; id: string }>,
    ) => {
      state.diagramElements = state.diagramElements.map((element) =>
        element.id === action.payload.id
          ? { ...element, ...action.payload }
          : element,
      );
    },
    addElement: (state, action: PayloadAction<string>) => {
      const foundElement1 = foundElement(action.payload, [
        ...state.diagramElements,
      ]);
      if (!foundElement1?.id) return;
      const variants = generateArray(action.payload);
      const newElement = {
        id: Date.now().toString(),
        position: { x: 25, y: 40 },
        type: "boxNode",
        data: variants,
      };
      const edge = {
        id: variants[0],
        source: foundElement1?.id,
        target: newElement.id,
      };
      console.log(edge);
      return {
        ...state,
        diagramElements: [...state.diagramElements, newElement],
        edges: [...state.edges, edge],
      };
    },
    removeElement: (state, action: PayloadAction<string>) => {
      //TODO create delete logic
    },
  },
});

export const { initElements, updateElement, addElement, removeElement } =
  diagramSlice.actions;
export const diagram = diagramSlice.reducer;
