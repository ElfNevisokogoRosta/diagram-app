import React from 'react';
import {Button, Dropdown, MenuProps, Space} from "antd";
import {useDispatch} from "react-redux";
import {addElement} from "../../redux/reducers";
interface IDropDownListProps{
    data: string[],
    // id: string
}
const DropDownList: React.FC<IDropDownListProps> = ({data}) => {
    const dispatch = useDispatch()
    const checkBoxHandler = (value: boolean, data: string)=>{
        if(value){
           return  dispatch(addElement(data))
        }
      return
    }
    const items:MenuProps['items'] = data.map((e, i)=>{
        return {key: `${e}-${i}`, label: (<label><input onChange={(event: any) => {console.log(e); checkBoxHandler(event.target.checked, e)}} type={'checkbox'} defaultValue={'false'}/><span>Варіант {e}</span></label>)}
    })
    return (
        <Space>
            <Dropdown menu={{items}} placement={"bottomLeft"} >
                <Button>Виберіть варіант</Button>
            </Dropdown>
        </Space>
    );
};
export default DropDownList;