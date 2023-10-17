export interface IButtonProps {
  buttonText: string;
  handleClick?: () => void;
  fontSize?: number;
  type?: "button" | "submit" | "reset" | undefined;
}

// eslint-disable-next-line no-unused-vars
export type TypeValidator = (value: string) => boolean