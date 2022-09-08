
import React from 'react';
import Header from './Component/header/header';
import Footer from './Component/footer/footer';

import styles from "./app.module.css"


function App() {
  return (
    <div>
      <Header/>
        <main className={styles.main} >
        <h2>Inside here is my insights!!!</h2>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
