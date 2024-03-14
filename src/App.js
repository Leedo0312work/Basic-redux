import logo from './logo.svg';
// import './App.css';

import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"

import { useSelector, useDispatch } from "react-redux"

import Home from './components/Home';

function App(props) {

  const dispatch = useDispatch()

  const newCount = useSelector(
    (state) => { return state.counter.count }
  );

  //event handler
  const handleIncrease = () => {
    //dispatch actions
    // props.increaseCounter()

    dispatch(increaseCounter())
  }



  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <div>Count: {newCount} </div>

    //     <button onClick={() => handleIncrease()}>Increase Count</button>

    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    //   </header>
    // </div>
    <Home />
  );
}

// //map state (redux store) + props react
// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }
// //map dispatch (redux) to props react
// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;