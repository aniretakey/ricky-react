import React, { useState } from 'react';
import styles from './Card.module.css';
import { CharacterType } from '../../models/card.model';
import Button from '../Button/Button';

const Card = ({ id, image, name, gender, species, status, type, url }: ICard) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return isOpen ? (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>
      <Button buttonText="Details" handleClick={():void => setIsOpen(prev => !prev)} />
    </div>
  ) : null;
};

export default Card;
