import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => (
  <>
    <div className={styles.footer}>
      <div className={styles.footer__terms}>
        <ul>
          <li className="pointer">Terms and Conditions</li>
          <li className="pointer">Privacy Policy</li>
          <li className="pointer">Contac Us</li>
        </ul>
      </div>

      <div className={styles.footer__folow}>
       <span>Folow Us</span>
       <img src={'./assets/facebook.png'} alt="Facebook" />
       <img src={'./assets/twitter.png'}  alt="Twitter" />
      </div>
    </div>
  </>
);