import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from "../Navigation";

import styles from './header.module.css';

export function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.homeLink} />

      <Navigation />
    </header>
  );
}
