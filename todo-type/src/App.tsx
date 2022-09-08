
import React from 'react';
import Header from './Component/header/header';
import Footer from './Component/footer/footer';

import styles from "./app.module.css"
import Taksform from './Component/Tasks.form';
import TaksList from './Component/Tasks.list';

import {ITasks} from './Interface/Tasks'


function App() {
  return (
    <div>
      <Header/>
        <main className={styles.main} >

         <div>
           <h2>What do you do ?</h2>
            <Taksform btnSend="Create tasks" />
         </div>  
        
         <div>
             <h1>Your daily tasks:</h1>
             <TaksList/>
             
         </div> 
        
        </main>
      <Footer/>
    </div>
  );
}

export default App;
