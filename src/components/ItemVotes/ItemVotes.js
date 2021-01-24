import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemVotes.module.scss';
import { useStateVote } from '../../hooks/useStateVote';

export const ItemVotes = ({valueItem}) => {

  const {stateVote, handleVote, handleVoteAgain, handleOption} = useStateVote(valueItem);
  const { like, unlike, voted } = stateVote;
  const getPercent = (number) => {
    return Math.ceil( (number*100)/( like + unlike) ); 
  }

  const _renderContentSelector = () => (
    <div className={styles.ItemVotes__contentSelector}>
      {
        !voted &&
        <>
          <div className={styles.ItemVotes__selector}>
            <input 
              onChange={ (e) => handleOption(e.target.value) }
              checked={stateVote.selectedOption === 'like'}
              id={`like-${valueItem.id}`} type="radio" name={`voting-${valueItem.id}`} value="like" />
            <label className={`${styles.drinkcard} ${styles.bkLike} pointer`} htmlFor={`like-${valueItem.id}`}>
              <span 
                style={{backgroundImage: 'url(./assets/like.png'}}
                className={styles.ItemVotes__contentImg}></span>
            </label>

            <input 
              onChange={ (e) => handleOption(e.target.value) }
              checked={stateVote.selectedOption === 'unlike'}
              id={`unlike-${valueItem.id}`} type="radio" name={`voting-${valueItem.id}`} value="unlike" />
            <label className={`${styles.drinkcard} ${styles.bkUnLike} pointer`} htmlFor={`unlike-${valueItem.id}`}>
              <span
                style={{backgroundImage: 'url(./assets/unlike.png'}} 
                className={styles.ItemVotes__contentImg}></span>
            </label>
          </div>

          <button 
            onClick={ handleVote }
            className={`${styles.ItemVotes__voteNow} pointer`}
            type="button">Vote now</button>
        </>
      } 
      {
        voted &&
        <>
          <button 
            onClick={ handleVoteAgain }
            className={`${styles.ItemVotes__voteNow} pointer`}
            type="button">Vote again</button>
        </>
      }
    </div>
  )

  const _renderContentProgress = () => (
    <div className={styles.ItemVotes__progress}>
      <div style={{ width: `${  getPercent(like) }%` }} className={styles.progressUp}>
        <img src={'./assets/like.png'} alt="like" />
          <p>
            {`${ getPercent(like) }`}<span>%</span>
          </p>
      </div>
      <div style={{ width: `${ getPercent(unlike) }%` }} className={styles.progressDown}>
        <img src={'./assets/unlike.png'} alt="inlike" />
        <p>
          {`${ getPercent(unlike) }`}<span>%</span>
        </p>
      </div>
    </div>
  )

  return(
    <div className={styles.ItemVotes}>
      <div style={{backgroundImage: `url(${valueItem.img})`}} className={styles.ItemVotes__box}>

          {
            (getPercent(like) >= 50) ? 
            <div className={styles.drinkcardTitle}>
              <div className={`${styles.drinkcard} ${styles.bkLike}`}>
                <span 
                  style={{backgroundImage: 'url(./assets/like.png'}}
                  className={styles.ItemVotes__contentImg}></span>
              </div>
            </div> :
            <div className={styles.drinkcardTitle}>
              <div className={`${styles.drinkcard} ${styles.bkUnLike}`}>
                <span 
                  style={{backgroundImage: 'url(./assets/unlike.png'}}
                  className={styles.ItemVotes__contentImg}></span>
              </div>
            </div>
          }

        <div className={styles.ItemVotes__boxItem}>
          <h2 className={styles.ItemVotes__title}>
            { valueItem.name }
          </h2>
          <p className={styles.ItemVotes__ago}> <span>1 month ago</span>{ valueItem.ago }</p>
          <p className={styles.ItemVotes__descrip}>
            { (!voted) ? valueItem.descrip : 'Thank you for voting!' }
          </p>

          { _renderContentSelector() }
          
        </div>
      </div>

      { _renderContentProgress() }
    </div>
  )
};

ItemVotes.propTypes = {
  valueItem: PropTypes.object.isRequired
};