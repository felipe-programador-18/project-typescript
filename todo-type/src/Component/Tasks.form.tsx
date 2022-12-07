import React, {useState, ChangeEvent, FormEvent, useEffect } from 'react';
import {ITasks} from '../Interface/Tasks'
import styles from './taksform.module.css'


export interface IAppProps {
    btnSend: string;
    taksItem: ITasks[];
    setTaskList?: React.Dispatch<React.SetStateAction <ITasks[]>>;
    tasks?: ITasks | null;
    HandleUpdate?(id: number, title: string, hard:number): void; 
}

const Taksform = ({btnSend, taksItem, setTaskList,HandleUpdate}: IAppProps) => {
    
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [hard, setHard] = useState<number>(0)

    
    const addTaksProject = (e:FormEvent <HTMLFormElement>) =>{
      e.preventDefault()


     if(HandleUpdate){
        HandleUpdate(id, title, hard)
     }else{
      
      const id = Math.floor(Math.random() *1000)
      const newTasks: ITasks= {id, title, hard}  
        
      setTaskList!([...taksItem, newTasks])
      setTitle("")
      setHard(0)
     }
    }
    
    
    const HandChange= (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if(e.target.name === 'title'){
          setTitle(e.target.value)
        }else{
          setHard(parseInt(e.target.value))
        }
    }

    
    useEffect(() => {

    },[])
   
   
    return (
   
      <form onSubmit={addTaksProject} className={styles.form} >
       <div className={styles.input_container} > 
         <label>Title:</label>
            <input type="text" 
            name='title' 
            placeholder='write your tasks'
            value={title}
            onChange={HandChange} />
            
        </div> 
        
        <div className={styles.input_container} > 
         <label>Hard tasks.</label>
            <input type="text" 
            name='hard' 
            placeholder='how hard is your tasks?'
            onChange={HandChange}
            value={hard} />
            
        </div>

        <input type="submit" value={btnSend} />    
          
      </form>
      
  
    );
}


export default Taksform
