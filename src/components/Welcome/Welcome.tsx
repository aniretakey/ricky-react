import { ReactElement } from 'react';
import styles from './Welcome.module.css';

export const Welcome = (): ReactElement => {
  return (
    <div className={styles.welcome}>
      <h2 className={styles.welcome_title}>Rick & Morty Universe</h2>

      <p className={styles.welcome_text}>
        Welcome to the ultimate destination for all things Rick and Morty! Our website, the Rick and Morty Universe
        Explorer, is a fan&apos;s dream come true, providing a comprehensive hub for all your favorite characters
      </p>
    </div>
  );
};
