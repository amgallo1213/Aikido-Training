import { Link } from '@reach/router';
import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import IndexPage from './components/Index';
import StudentMain from './views/StudentMain';
// import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <Navbar />
      <hr/>
      <div>
        <IndexPage/>
      </div>
      <hr/>
      <div>

        {/* <Login/> */}
        <StudentMain/>
      </div> 
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
