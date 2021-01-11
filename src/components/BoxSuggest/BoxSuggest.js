import React from 'react';
import styles from './BoxSuggest.module.scss';

export const BoxSuggest = () => (
  <div className={styles.BoxSuggest}>
    <p>Is there anyone else you would want us to add?</p>
    <button className="pointer" type="button">Submit a Name</button>
  </div>
);
