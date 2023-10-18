export interface IButtonProps {
  buttonText: string;
  handleClick?: () => void;
  fontSize?: number;
  type?: "button" | "submit" | "reset" | undefined;
}

export type TypeValidator = (value: string) => boolean