import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import AddDates from './components/AddDates';
import Patient from './components/Patient';
import CheckDates from './components/CheckDates';
import Principal from './components/Principal';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Layout />} >
        <Route index element={<Principal />} />
        <Route path='/add-dates' element={<AddDates />} />
        <Route path='/patient' element={<Patient />} />
        <Route path='/check-dates' element={<CheckDates />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
