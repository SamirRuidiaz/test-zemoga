import React from 'react';
import styles from './BoxInformation.module.scss';

export const BoxInformation = () => (
  <article className={styles.boxInformation}>
    <div className={styles.boxInformation__speak}>
      <p>Speak out. Be heard.</p>
      <h3>Be counted</h3>
    </div>
    <p className={styles.boxInformation__descrip}>
      Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. 
      It's easy: You share your opinion, we analyze and put the data in a public report.
    </p>
    <div className={styles.boxInformation__close}>
      <i className="fas fa-times"></i>
    </div>
  </article>
);