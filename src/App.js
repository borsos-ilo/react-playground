import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Nav from './Nav';
import Heading from './Heading';

function App() {
  return (
    <div className="App">
      <Heading  currentFramework="React" nextFramework="Next.js" />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
