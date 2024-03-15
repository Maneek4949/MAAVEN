interface IProps{
  labelText?: string;
  className?: string;
  type: string;
  setValue:any;
  inputClassName?: string;
}

const LABEL_CLASS = `duration absolute top-px left-2 -translate-y-1/2 scale-75 bg-white px-1 transition-all origin-left	
peer-placeholder-shown:top-7 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-slate-500
peer-focus:top-px peer-focus:left-2 peer-focus:scale-75 peer-focus:text-violet-500 pointer-events-none	`;

const Input = ({labelText,className,type,setValue,inputClassName}:IProps) => {
    return (
      <>
        <div
          className={`${
            className ?? ''
          } relative`}
        >
          <input
            className={`peer w-full rounded-lg border-2 border-gray-400 ${inputClassName ?? ''}`}
            type={type}
            placeholder=" "
            onChange={(e) => setValue(e.target.value)}
          />
          <label className={LABEL_CLASS}>{labelText}</label>
        </div>
      </>
    );
  };

export default Input;
