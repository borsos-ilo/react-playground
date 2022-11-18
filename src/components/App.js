import logo from '../logo.svg';
import '../styles/App.css';
import Main from './Main';
import Nav from './Nav';
import Heading from './Heading';
import Button from './Button'

function App() {
  return (
    <div className="App">
      <Nav />
      <Heading  currentFramework="React" nextFramework="Next.js">
      </Heading>
      <Button/>
      <Main />
    </div>
  );
}

export default App;
