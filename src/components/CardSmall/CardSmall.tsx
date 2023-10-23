import { ReactElement } from 'react';

import styles from './CardSmall.module.css';

import { CharacterType } from '../../models/card.model';
import { Button } from "../Button";

export const CardSmall = ({ image, name }: CharacterType): ReactElement => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>
      <Button buttonText="Details"/>
    </div>
  );
};
