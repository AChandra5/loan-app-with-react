import './App.css';
import HomeTop from './Components/Top_Home';
import CreditLine from './Components/CreditLine';
import Emi from './Components/EMi';
import Drawdowns from './Components/Drawdowns';
import Actions from './Components/Actions';
import Congrats from './Components/Congrats';
// import Enhance from './Components/Enhance';

function App() {
  return (
    <div className="App">
      <HomeTop name="Ankur"/>
      <Congrats />
      {/* <Enhance /> */}
      <CreditLine />
      <Emi amount="₹13,500" date="02, Jun 2022" />
      <Drawdowns amount="40,000" month="May"/>
      <Actions />
    </div>
  );
}

export default App;
