import React from 'react'
import * as C from './App.styles'
import { Item} from './types/Item'
import {ListItem} from './components/ListItem'
import AddArea from './components/AddArea'

const App = () => {
  
  const [list,setList] = React.useState<Item[]>(()=>{
    const storedTodos = localStorage.getItem('@todoList:todos')
    if(storedTodos){
      return JSON.parse(storedTodos)
    }
    return[];
  }
  )
  

  const removeTask = (id: number)=>{
    setList((previousTodos) => previousTodos.filter((todo) => todo.id !== id));


  }

  const handleTaskChange=(id:number,done:boolean)=>{
    let newList = [...list];
    for(let i in newList){
      if(newList[i].id === id){
        newList[i].done = done
      }

    }
      setList(newList);
  }
  const handleAddTask = (taskName:string)=>{
    let newList = [...list];
    
    newList.push({
      id:list.length+1,
      name:taskName,
      done:false
    });
    setList(newList);
  }
  React.useEffect(()=>{
    localStorage.setItem('@todoList:todos', JSON.stringify(list))

  },[list])
  return (
    <C.Container>
      <C.Area>
        <C.Header>LISTA DE TAREFAS</C.Header>
        {/* AREA DE ADICIONAR UMA NOVA TAREFA  */}
        <AddArea onEnter={handleAddTask}/>
        {list.map((item,index)=>
          <ListItem 
            key={index} 
            item={item}
            onChange={handleTaskChange}
            onClick={removeTask}
            />
        )}
        </C.Area>
        
    </C.Container>
  )
}

export default App;