import './App.css';
import Display from './components/Display';
import Controls from './components/Controls';

function App() {

  return (
    <div className="container">
      <Display value='0'/>
      <Controls />
    </div>
  );
}

export default App;
