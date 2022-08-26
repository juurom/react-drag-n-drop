//import {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {useDrag} from 'react-use-gesture';
import logo from './logo.svg';
import './App.css';

function App() {
  //const [logoPos, setlogoPos] = useState({x:0, y:0})
  const logoPos = useSpring({x:0, y:0});
  const bindLogoPos = useDrag((params)=>{
    /*setlogoPos({
      x: params.offset[0],
      y: params.offset[1],
    })*/
    logoPos.x.set(params.offset[0]);
    logoPos.y.set(params.offset[1]);
  });

  const pPos = useSpring({x:0, y:0});
  const bindpPos = useDrag((params)=>{
    pPos.x.set(params.offset[0]);
    pPos.y.set(params.offset[1]);
  });

  const aPos = useSpring({x:0, y:0});
  const bindaPos = useDrag((params)=>{
    aPos.x.set(params.offset[0]);
    aPos.y.set(params.offset[1]);
  });

  return (
    <div className="App">
      <header className="App-header">
        <animated.div {...bindLogoPos()} style={{
          /*position:"relative",
          top: logoPos.y,
          left: logoPos.x*/
          x: logoPos.x,
          y: logoPos.y
        }}>
        <img src={logo} className="App-logo" alt="logo" />
        </animated.div>
        <animated.p {...bindpPos()} style={{
          x: pPos.x,
          y: pPos.y
        }}>
          Edit <code>src/App.js</code> and save to reload.
        </animated.p>
        <animated.a {...bindaPos()} style={{
          x: aPos.x,
          y: aPos.y
        }}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </animated.a>
      </header>
    </div>
  );
}

export default App;
