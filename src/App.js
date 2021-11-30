import logo from './logo.svg';
import './App.css';
import VisWithClass from "./ThreeDViews/VisWithClass";
import ThreePointVis from "./ThreeDViews/ThreePointVis";
import LoadGlb from './ThreeDViews/LoadGlb';
import OC from './ThreeDViews/OC';

const data = new Array(1000).fill(0).map((d,id)=>({id}));
function App() {
  return (
    <div className="App">
        <OC />
    </div>
  );
}

export default App;
