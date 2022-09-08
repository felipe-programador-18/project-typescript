import  React from 'react';
import styles from './footer.module.css'

const Footer = () => {
  return (<>
    <footer className={styles.footer} >
        <p>
          <span>
          React + Typescript + Todo
          </span> @2022
        </p>
      </footer>
  </>)
};

export default Footer;
