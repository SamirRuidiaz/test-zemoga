import React from 'react';
import styles from './GridVotes.module.scss';
import { ItemVotes } from '../ItemVotes/ItemVotes';

export const GridVotes = () => {

  const getDataVote = localStorage.getItem('dataVotes');
  const arrayVote = JSON.parse(getDataVote);

  return (
    <div className={styles.GridVotes}>
      <h2 className={styles.GridVotes__title}>Votes</h2>
      <div className={styles.GridVotes__boxItems}>
        {
          arrayVote.map((value) => ( 
            <ItemVotes key={value.id} valueItem={ value } />
          ))
        }
      </div>
    </div>
  ) 
};
