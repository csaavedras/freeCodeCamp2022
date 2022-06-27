import './button.css'

function Button({value, eventClick, className}){
  return(
      <button 
        className={className}
        onClick={eventClick}
      >
        {value}
      </button>
  );
}

export default Button;