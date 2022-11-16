import logo from '../logo.svg';
import '../styles/App.css';
import Main from './Main';
import Nav from './Nav';
import Heading from './Heading';

function App() {
  return (
    <div className="App">
      <Nav />
      <Heading  currentFramework="React" nextFramework="Next.js">
      </Heading>
      <Main />
    </div>
  );
}

export default App;
