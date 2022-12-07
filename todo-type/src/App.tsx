
import{useState} from 'react';
import Header from './Component/header/header';
import Footer from './Component/footer/footer';
import Modal from './Component/Modal';

import styles from "./app.module.css"
import Taksform from './Component/Tasks.form';
import TaksList from './Component/Tasks.list';



import {ITasks} from './Interface/Tasks'


function App() {
  const [taksItem,setTaskList] = useState<ITasks[]>([])
  const [taskUpdate , setTaskUpdate] = useState<ITasks|null>(null)  



  const deletedTasks = (id:number) => {
   setTaskList(
    taksItem.filter(task => {
      return task.id !== id
    })
   )
  }

  const HideorShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide")
    }else{
      modal!.classList.add("hide")
    }

  }

  const EditTasks =( tasks: ITasks ):void => {
    HideorShowModal(true)
    setTaskUpdate(tasks)
  }
  

  const UpdateTask =(id: number, title: string, hard:number)=> {
   
    const updatedTasks: ITasks = {id,title,hard}
    const updateList =  taksItem.map((task) => {
      return task.id === updatedTasks.id ? updatedTasks : task
    })
    setTaskList(updateList)
    HideorShowModal(false)
  }
  
  return (
    <div>
     <Modal 
      children={<Taksform   
      btnSend="Edit your tasks:" 
      taksItem={taksItem}
      tasks ={taskUpdate}
      HandleUpdate={UpdateTask}
      />} />

      <Header/>
        <main className={styles.main} >

         <div>
           <h2>What do you do here?</h2>
            <Taksform 
             btnSend="Create tasks" 
             taksItem={taksItem}
             setTaskList={setTaskList} />
         </div>  
        
         <div>
            <h1>Your daily tasks:</h1>
            <TaksList 
              taskList={taksItem} 
              handleDeleted={deletedTasks}
              HandleEdit={EditTasks} 
              />
             
         </div> 
        
        </main>
      <Footer/>
    </div>
  );
}

export default App;
