import { DeezyWidget } from "deezy-widget";
import "./App.css";
console.log(DeezyWidget);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DeezyWidget inscriptionId="b312d2ac6ed1fee29acb6be9d1cf07e001595a6e9a1a26fef324552da290e343i0" />
      </header>
    </div>
  );
}

export default App;
