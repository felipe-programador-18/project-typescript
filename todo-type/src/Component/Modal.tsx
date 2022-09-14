import React from 'react';
import styles from './modal.module.css'

export interface IAppProps {
  children: React.ReactNode
}

const Modal = ({children}: IAppProps) => {
  return (
    <div id='modal' >
       <div className={styles.fade}>
       </div>
       
       <div className={styles.modal} >
        <h2 >Modal.</h2>
        {children}
       </div>

    </div>
  );
}


export default Modal