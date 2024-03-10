import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { decCount, incCount } from './redux/action/action';




function App() {

  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  const handleClickInc = () => {
    dispatch(incCount())
  }

  const handleClickDec = () => {
    dispatch(decCount())
  }


  return (
<div className='container'>
      <h1>Redux Increment Decrement</h1>

      <p style={{fontSize: 50}}>{count}</p>

      <button className='btnInc' onClick={handleClickInc}>INCREMENT</button>

      <button className='btnDec' onClick={handleClickDec}>DECREMENT</button>

</div>
  );
}

export default App;
