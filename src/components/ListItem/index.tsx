import React from 'react';
import * as C from './style'
import {Item} from '../../types/Item'
import {BsTrash} from 'react-icons/bs'
type Props={
  item:Item
  onChange:(id:number,done:boolean) => void;
  onClick:(id:number) => void

}


export const ListItem = ({item,onChange,onClick}:Props) => {
  // const [isChecked,setIsChecked] = React.useState(false)
  
  return (
    <C.Container done={item.done}> 
      <input 
        type="checkbox" 
        checked={item.done} 
        onChange={e=>onChange(item.id,e.target.checked)}
      
      />

      <div className='space-icons'>
      <label>{item.name}{"    "}{item.done.toString()}</label>

      <BsTrash className='button-remove' onClick={e => onClick(item.id)} />
      </div>
      
      </C.Container>
  )
}

