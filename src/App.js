import './App.css';
import './components/GetWeatherForecast'
import GetWeatherForecast from './components/GetWeatherForecast';

function App() {
  return (
    <div className="App">
      <h1> React Weather App</h1>
      <main>
        <GetWeatherForecast />
      </main>
      <footer>
        Created By Sheetal.
      </footer>
    </div>
  );
}

export default App;
