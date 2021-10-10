import { MouseEventHandler } from "react";
import cn from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
  appearance: "primary" | "outline";
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  children,
  className,
  isDisabled,
  appearance = "primary",
  onClick,
}: Props) => {
  return (
    <button
      disabled={isDisabled}
      className={cn("button", className, appearance)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
