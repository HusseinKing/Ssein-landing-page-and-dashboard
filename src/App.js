import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";

export default function App() {
    const openWhatsAppChat = () => {
      // Replace 'your_whatsapp_number' with your actual WhatsApp business number
      const phoneNumber = "+250 785 767 647";
      // Generate the WhatsApp API link
      const whatsappLink = `https://wa.me/${phoneNumber}`;

      // Open the link in a new tab/window
      window.open(whatsappLink, "_blank");
    };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div>
              <Home />
              {/* Add WhatsApp chat button */}
              <button onClick={openWhatsAppChat}>
                <img
                  src="path-to-whatsapp-logo.png" // Replace with the actual path to the WhatsApp logo
                  alt="WhatsApp Chat"
                />
              </button>
            </div>
          }
        />
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
