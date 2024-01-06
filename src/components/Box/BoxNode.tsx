import React from "react";
import {BoxContainer, BoxContent, BoxWraper} from "./Box.styled";
import {Handle, Position} from "reactflow";
import DropDownList from "./DropDownList";
import {BoxNodeProps} from "../../utils/types/BoxProps";

const BoxNode: React.FC<BoxNodeProps> = ({ isConnectable, data }) => {
  return (
    <BoxWraper>
      <Handle
        type={"target"}
        position={Position.Bottom}
        isConnectable={isConnectable}
      /><Handle
        type={"source"}
        position={Position.Bottom}
        isConnectable={isConnectable}
    />
        <BoxContainer>
          <BoxContent></BoxContent>
          <DropDownList data={data} />
        </BoxContainer>
    </BoxWraper>
  );
};

const nodeTypes = {boxNode: BoxNode}
export default nodeTypes