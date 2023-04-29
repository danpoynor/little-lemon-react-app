import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import BookingPage from "./pages/BookingPage";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import FeedbackForm from "./components/forms/FeedbackForm";
import ReservationConfirmation from "./pages/ReservationConfirmation";
import NoPage from "./pages/NoPage";
import './App.css';

export default function App() {
  const [isModal,setIsModal] = useState(false);

  const handleSubmit = () => {
    console.log("Feedback submitted");
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservations" element={<BookingPage />} />
        <Route path="reservations/confirmation" element={<ReservationConfirmation />} />
        <Route path="order-online" element={<OrderOnline />} />
        <Route path="login" element={<Login />} />
        <Route path="feedback" element={<FeedbackForm onSubmit={handleSubmit} />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}
