// import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you" name="Bitch" age="25" />
      <StatefulGreeting thingy="Crazy stateful timez" name="whore" />
    </div>
  );
}

export default App;
