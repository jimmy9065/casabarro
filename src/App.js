import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing";
import VisionPage from "./pages/vision";
import ResidencePage from "./pages/residence";
import AmenitiesPage from "./pages/amenities";
import NeighborhoodPage from "./pages/neighborhood";
import CollaborationPage from "./pages/collaboration";
import ContactPage from "./pages/contact";

import NavigatorBar from "./components/navigatorBar";

function App() {
    return (
        <BrowserRouter>
            <NavigatorBar />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="vision" element={<VisionPage />} />
                <Route exact path="residence" element={<ResidencePage />} />
                <Route exact path="amenities" element={<AmenitiesPage />} />
                <Route
                    exact
                    path="neighborhood"
                    element={<NeighborhoodPage />}
                />
                <Route
                    exact
                    path="collaboration"
                    element={<CollaborationPage />}
                />
                <Route exact path="contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
