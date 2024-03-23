
interface ButtonPros {
  text: string;
  onClick?: (e?: any) => void;
  disabled?: boolean;
  className?: string;
  icon?: IconType;
  buttonType?: "submit" | "reset" | "button";
}

type IconType = () => JSX.Element;

export default function Button({
  text,
  onClick,
  disabled,
  className,
  buttonType,
}: ButtonPros) {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
      className={`flex max-h-[44px] items-center justify-center rounded-md transition-all ${
        className ?? ''
      }`}
    >
      {text}
    </button>
  );
}
