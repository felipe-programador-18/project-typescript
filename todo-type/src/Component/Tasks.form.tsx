import React, {useState, ChangeEvent, FormEvent, useEffect } from 'react';
import {ITasks} from '../Interface/Tasks'
import styles from './taksform.module.css'


export interface IAppProps {
    btnSend: string
}

const Taksform = ({btnSend}: IAppProps) => {
    
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [hard, setHard] = useState<number>(0)

    const HandChange= (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if(e.target.name === 'title'){
          setTitle(e.target.value)
        }else{
          setHard(parseInt(e.target.value))
        }

        console.log(title)
    }

    
    const  addTaksProject = () =>{
        
    }
    
    useEffect(() => {

    },[])
   
   
    return (
   
      <form onSubmit={addTaksProject} className={styles.form} >
       <div className={styles.input_container} > 
         <label>Title:</label>
            <input type="text" name='title' placeholder='write your tasks' onChange={HandChange} />
            
        </div> 
        
        <div className={styles.input_container} > 
         <label>Hard tasks.</label>
            <input type="text" name='title' placeholder='how hard is your tasks?' onChange={HandChange} />
            
        </div>

        <input type="submit" value={btnSend} />    
          
      </form>
      
  
    );
}


export default Taksform
