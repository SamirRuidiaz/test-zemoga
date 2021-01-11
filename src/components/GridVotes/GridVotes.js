import React from 'react';
import styles from './GridVotes.module.scss';
import { ItemVotes } from '../ItemVotes/ItemVotes';

export const GridVotes = () => {

  const data = [
    {id: 1, name: 'Kanye West', like: 64, unlike: 36, ago: 'in Entertainment', descrip: 'Vestibulum diam ante, porttitor a odio aget rhoncus neque. Aenean eu velit libero.', img: '/assets/ft3.png'},
    {id: 2, name: 'Mark Zuckerberg', like: 36, unlike: 64, ago: 'in Business', descrip: 'Vestibulum diam ante, porttitor a odio aget rhoncus neque. Aenean eu velit libero.', img: '/assets/ft4.png'},
    {id: 3, name: 'Cristina Fernández de Kirchner', like: 36, unlike: 64, ago: 'in Politics', descrip: 'Vestibulum diam ante, porttitor a odio aget rhoncus neque. Aenean eu velit libero.', img: '/assets/ft2.png'},
    {id: 4, name: 'Malala Yousafzai', like: 60, unlike: 30, ago: 'in Entertainment', descrip: 'Vestibulum diam ante, porttitor a odio aget rhoncus neque. Aenean eu velit libero.', img: '/assets/ft1.png'}
  ]

  return (
    <div className={styles.GridVotes}>
      <h2 className={styles.GridVotes__title}>Votes</h2>
      <div className={styles.GridVotes__boxItems}>
        {
          data.map((value) =>  <ItemVotes key={value.id} valueItem={ value } />)
        }
      </div>
    </div>
  ) 
};
