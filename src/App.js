import './App.css';
import ProjSelect from './Components/ProjSelect';
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";


function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      <ProjSelect />
      
      
    </div>
  );
}

export default App;
