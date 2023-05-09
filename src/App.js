import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import FeedbackForm from "./components/forms/FeedbackForm";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import NoPage from "./pages/NoPage";
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservations" element={<Booking />} />
        <Route path="reservations/confirmation" element={<ConfirmedBooking />} />
        <Route path="order-online" element={<OrderOnline />} />
        <Route path="login" element={<Login />} />
        <Route path="feedback" element={<FeedbackForm />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}
