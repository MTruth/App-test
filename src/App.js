import './App.css';
import ProjSelect from './Components/ProjSelect';
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import NewProject from "./Components/Forms/NewProject";


function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      <ProjSelect />
      
      <NewProject />

      
      
    </div>
  );
}

export default App;
