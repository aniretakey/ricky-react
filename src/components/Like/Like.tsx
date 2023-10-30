import { ReactElement } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface LikeProps {
  active: boolean;
}
export const Like = ({ active }: LikeProps): ReactElement => {
  return active ? <AiFillHeart style={{ color: 'red' }} /> : <AiOutlineHeart />;
};
