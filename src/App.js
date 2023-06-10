import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import AddDates from "./components/add-dates/AddDates";
import Patient from "./components/patients/Patient";
import CheckDates from "./components/check-dates/CheckDates";
import Principal from "./components/Principal";
import Modal from "./components/Modal";
import AddHistory from "./components/patients/AddHistory";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Principal />} />
        <Route path="/add-dates" element={<AddDates />} />
        <Route path="/patient/*" element={<Patient />} />
        <Route
          path="/patient/:id/:atention/:date/*"
          element={<Modal children={<AddHistory />} />}
        />
        <Route path="/check-dates/*" element={<CheckDates />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
