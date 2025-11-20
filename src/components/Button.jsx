function Button({onClick,isCompleted, className, children}) {
  return <button      
            className={`bg-slate-400 p-2 text-white rounded-md flex items-center ${isCompleted && "line-through"} ${className}`}
            onClick={onClick}
            
        >{children}</button>
}

export default Button;
