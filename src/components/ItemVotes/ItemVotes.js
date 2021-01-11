import React from 'react';
import styles from './ItemVotes.module.scss';

export const ItemVotes = ({valueItem}) => {

  return(
    <div className={styles.ItemVotes}>
      <div style={{backgroundImage: `url(${valueItem.img})`}} className={styles.ItemVotes__box}>

      <div className={styles.drinkcardTitle}>
            <div className={`${styles.drinkcard} ${styles.bkLike}`}>
              <span 
                style={{backgroundImage: 'url(/assets/like.png'}}
                className={styles.ItemVotes__contentImg}></span>
            </div>
          </div>

        <div className={styles.ItemVotes__boxItem}>
          <h2 className={styles.ItemVotes__title}>
            { valueItem.name }
          </h2>
          <p className={styles.ItemVotes__ago}> <span>1 month ago</span>{ valueItem.ago }</p>
          <p className={styles.ItemVotes__descrip}>{ valueItem.descrip }</p>

          <div className={styles.ItemVotes__contentSelector}>
            <div className={styles.ItemVotes__selector}>
              <input id="like" type="radio" name="voting" value="1" />
              <label className={`${styles.drinkcard} ${styles.bkLike} pointer`} htmlFor="like">
                <span 
                  style={{backgroundImage: 'url(/assets/like.png'}}
                  className={styles.ItemVotes__contentImg}></span>
              </label>

              <input id="unlike" type="radio" name="voting" value="1" />
              <label className={`${styles.drinkcard} ${styles.bkUnLike} pointer`} htmlFor="unlike">
                <span
                  style={{backgroundImage: 'url(/assets/unlike.png'}} 
                  className={styles.ItemVotes__contentImg}></span>
              </label>
            </div>

            <button 
              className={styles.ItemVotes__voteNow}
              type="button">Vote now</button>
          </div>

        </div>
      </div>

      <div className={styles.ItemVotes__progress}>
        <div style={{ width: `${64}%` }} className={styles.progressUp}>
          <img src={'/assets/like.png'} alt="like" />
            <p>
              {`${ valueItem.like }`}<span>%</span>
            </p>
        </div>
        <div style={{ width: `${36}%` }} className={styles.progressDown}>
          <img src={'/assets/unlike.png'} alt="inlike" />
          <p>
            {`${ valueItem.unlike }`}<span>%</span>
          </p>
        </div>
      </div>
    </div>
  )
};
