import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import AllergyAdvice from "./Pages/AllergyAdvice";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Navigation from "./Navbar/Navigation";
import Footer from "./Pages/Footer";
import ProductDescription from "./Pages/ProductDescription";
import CartPage from "./Pages/CartPage";
import Payment from "./payment/Payment";
import Success from "./payment/Success";
import Failure from "./payment/Failure";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/allergyAdvice" element={<AllergyAdvice />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route
          path="/productDescription/:id"
          element={<ProductDescription />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
