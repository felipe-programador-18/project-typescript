import React from 'react';
import styles from './task.list.module.css'
import { ITasks } from '../Interface/Tasks';


export interface IAppProps {
taskList: ITasks[];
handleDeleted(id:number): void
HandleEdit(tasks: ITasks): void
}

const TaksList =  ({taskList, handleDeleted, HandleEdit}: IAppProps) =>  {
  
    return (
    <>
      {taskList.length === 0 ? ( <div> 
        <p>
        Don't have tasks here!
      </p>
      </div>
        ) : 
       ( <p>
        {taskList.map((tasks) => (
        <div className={styles.tasks} 
         key={tasks.id} >
          <div className={styles.details} >
            <h4> {tasks.title} </h4> 
            <p> {tasks.hard}</p>
          </div>
          
          <div className={styles.action} >
           <i className='bi bi-pencil'
            onClick={() => HandleEdit(tasks)}  
            />

           <i className='bi bi-trash'
            onClick={()=>{handleDeleted(tasks.id)} } />
          </div>
      
        </div>)) }
      </p>) }
    </>
  );
}


export default TaksList