// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import Crud from './components/Crud';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EditUser from './components/EditUser';

function App() {
  return (
   <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path='/' element={<Crud/>} />
            <Route path='/add' element={ <AddUser/>} />
            <Route path='/all' element={<AllUsers/>} />
            <Route path='/edit/:id' element={<EditUser/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
