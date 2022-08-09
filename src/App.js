import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {SingleCheck}  from './test/SingleCheck';
import Test from './test/Test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test />
        <SingleCheck />
      </header>
    </div>
  );
}

export default App;
