import React from 'react';
import {FaRegTrashAlt} from "react-icons/fa";
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

const PrintList = ({todos,onDel,onToggle}) => {

    const {id,text,done} = todos

    return (
        <div>
            <li className={done ? 'on' : ''}>
                <span onClick={()=>onToggle(id)}>
                    {done ? <MdOutlineCheckBox/> : <MdOutlineCheckBoxOutlineBlank/>}
                </span>
                <em onClick={()=>onToggle(id)}>{text}</em>
                <button onClick={()=>onDel(id)}><FaRegTrashAlt /></button>
            </li>
        </div>
    );
};

export default PrintList;