import React from 'react';
import styles from './Header.module.scss';
import { Link } from "react-router-dom";

export const Header = () => (
  <header style={{backgroundImage: 'url(/assets/slider.png)'}} className={styles.navbar}>
    <div className={styles.navbar__band}>
      <div className="container">

        <nav className={styles.navbar__navigation}>
          <p className={styles.navbar__logo}><Link to="/">Rule of Thumb.</Link></p>
          <ul className={styles.navbar__ul}>
            <li><Link to="/trials">Past Trials</Link></li>
            <li><Link to="/works">How It Works</Link></li>
            <li><Link to="/login-signup">Log In/Sign Up</Link></li>
            <li>
              <img src={'/assets/search.png'}  alt="Seach" />
            </li>
          </ul>
        </nav>

        <article className={styles.navbar__article}>
          <div className={styles.navbar__descrip}>
            <span className={styles.navbar__opinion}>What's your opinion on</span>
            <h1 className={styles.navbar__title}>
              Pope Francis ?
            </h1>
            <h3  className={styles.navbar__more}>
              He's talking tough on clery sexual abuse,
              but is he just another papal pervert
              protector ? (thumbs down) or true
              pedophile punishing pontiff? (thumbs up) 
            </h3>

            <span className={styles.navbar__info}> <i class="fab fa-wikipedia-w"></i> More information</span>
            <h3 className={styles.navbar__verdict}>What's Your Verdict?</h3>
          </div>

          <div className={styles.navbar__thumbs}>
            <div className={styles.navbar__thumbsup}>
              <img src={'/assets/like.png'} alt="like" />
            </div>
            <div className={styles.navbar__thumbsdown}>
              <img src={'/assets/unlike.png'} alt="unlike" />
            </div>
          </div>
        </article>
        
      </div>
    </div>


    <div className={styles.navbar__closing}>
      <div className={styles.closingIn}>
        CLOSING IN
      </div>
      <div className={styles.closingDays}>
        <span>22</span> days
      </div>
    </div>
  </header>

);