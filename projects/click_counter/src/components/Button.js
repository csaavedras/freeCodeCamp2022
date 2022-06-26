import './styles/button.css';

function Button({text, isButtonClick, eventClick}){

  return(
    <button
      className={isButtonClick ? 'button_click' : 'button_clean'}
      onClick={eventClick}
    > 
      {text}
    </button>
  );
}

export default Button;