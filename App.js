import './App.css';
import PositiveAff from './PositiveAff';

function App() {
  return (
    <div className="App">
      <h3>My Affirmations</h3>
      <PositiveAff randomMax={10} />
    </div>
  );
}

export default App;
