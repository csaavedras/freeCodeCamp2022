import './controls.css'
import Button from './Button';

function Controls(){
  return(
    <div className='controls'>
      <div className='stack'>
        <button className='clean'>Clean</button>
        <Button text='%'/>
        <Button text='/'/>
      </div>
      <div className='stack'>
        <Button text='7'/>
        <Button text='8'/>
        <Button text='9'/>
        <Button text='X'/>
      </div>
      <div className='stack'>
        <Button text='4'/>
        <Button text='5'/>
        <Button text='6'/>
        <Button text='-'/>
      </div>
      <div className='stack'>
        <Button text='1'/>
        <Button text='2'/>
        <Button text='3'/>
        <Button text='+'/>
      </div>
      <div className='stack'>
        <button className='clean'>0</button>
        <Button text=','/>
        <Button text='='/>
      </div>
    </div>
  );
}

export default Controls;