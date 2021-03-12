import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent";
import MySection from "./components/MySection";
import MyButton from "./components/MyButton";
import MyNameSpaceComponent from './components/MyNameSpaceComponent';
import MyMap from "./components/MyMap";
import MyFragment from './components/MyFragment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React My Ass
        </a>
        <MyComponent />
        <MySection>
          <MyButton>
            Hello I am a Button
          </MyButton>
        </MySection>
        <MyNameSpaceComponent>
          <MyNameSpaceComponent.First />
          <MyNameSpaceComponent.Second />
        </MyNameSpaceComponent>
        <MyMap />
        <MyFragment />
      </header>
    </div>
  );
}

export default App;
