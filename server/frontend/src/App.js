import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

//Components
import Layout from './components/Layout/Layout';
import Create from './pages/Create';
import Home from './pages/Home';
import Login from './pages/Login';
import Details from './pages/Details';

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Details />} />
            <Route path='/login' element={<Login />} />
            <Route path='/crear' element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
