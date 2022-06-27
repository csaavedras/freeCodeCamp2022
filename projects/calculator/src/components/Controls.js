import './controls.css'
import './button.css'
import Button from './Button';

function Controls(){
  
  const handleButton = (e) => {
    const value = e.target.innerHTML;
    console.log(value)
  }

  return(
    <div className='controls'>
      <div className='stack'>
        <Button value='Clean' eventClick={handleButton} className='largeButton'/>
        <Button value='%' eventClick={handleButton} className='circleButton custom'/>
        <Button value='/' eventClick={handleButton} className='circleButton operation'/>
      </div>
      <div className='stack'>
        <Button value='7' eventClick={handleButton} className='circleButton numbers'/>
        <Button value='8' eventClick={handleButton} className='circleButton numbers'/>
        <Button value='9' eventClick={handleButton} className='circleButton numbers'/>
        <Button value='X' eventClick={handleButton} className='circleButton operation'/>
      </div>
      <div className='stack'>
        <Button value='4' eventClick={handleButton} className='circleButton numbers'/>
        <Button value='5' eventClick={handleButton} className='circleButton numbers'/>
        <Button value='6' eventClick={handleButton} className='circleButton numbers'/>
        <Button value='-' eventClick={handleButton} className='circleButton operation'/>
      </div>
      <div className='stack'>
        <Button value='1' eventClick={handleButton} className='circleButton numbers'/>
        <Button value='2' eventClick={handleButton} className='circleButton numbers'/>
        <Button value='3' eventClick={handleButton} className='circleButton numbers'/>
        <Button value='+' eventClick={handleButton} className='circleButton operation'/>
      </div>
      <div className='stack'>
        <Button value='0' eventClick={handleButton} className='largeButton numbers'/>
        <Button value=',' eventClick={handleButton} className='circleButton numbers'/>
        <Button value='=' eventClick={handleButton} className='circleButton operation'/>
      </div>
    </div>
  );
}

export default Controls;