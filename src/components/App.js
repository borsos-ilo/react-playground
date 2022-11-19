import logo from '../logo.svg';
import '../styles/App.css';
import Main from './Main';
import Nav from './Nav';
import Heading from './Heading';
import Button from './Button'
import Input from './Input'
import Focus from './Focus';

function App() {
  return (
    <div className="App">
      <Nav />
      <Heading  currentFramework="React" nextFramework="Next.js">
      </Heading>
      <Button/>
      <Main />
      <Input />
      <Focus />
    </div>
  );
}

export default App;
