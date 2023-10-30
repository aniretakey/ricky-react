export interface IButtonProps {
  buttonText: string;
  handleClick?: () => void;
  fontSize?: number;
  type?: "button" | "submit" | "reset" | undefined;
  isButtonEnable?: boolean;
}

export type TypeValidator = (value: string) => boolean