import React from 'react';
import styles from './modal.module.css'

export interface IAppProps {
  children: React.ReactNode
}

const Modal = ({children}: IAppProps) => {
  
  const closeModal = (e:React.MouseEvent):void => {
   const modal = document.querySelector("#modal")
   modal!.classList.add("hide")
  }
  
  return (
    <div id='modal' className='hide' >
       <div className={styles.fade} onClick={closeModal} > 
       </div>
       
       <div className={styles.modal} >
        <h2 >Modal.</h2>
        {children}
       </div>

    </div>
  );
}


export default Modal