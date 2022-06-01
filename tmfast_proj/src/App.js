import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import "./styles.css";

function App() {
  return (
    <body>
      <div className="App">
        <Navbar />
        <Sidebar />
      </div>
    </body>
  );
}

export default App;
