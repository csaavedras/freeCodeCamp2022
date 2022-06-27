import './button.css'

function Button({text}){
  return(
      <button className='circleButton'>
        {text}
      </button>
  );
}

export default Button;