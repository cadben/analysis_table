import ColSelector from './components/ColSelector';
import WorkArea from './components/WorkArea';
import './App.css';

function App() {
  return (
    <div className="App">
      <ColSelector />
      <div className='line'></div>
      <WorkArea />
    </div>
  );
}

export default App;
