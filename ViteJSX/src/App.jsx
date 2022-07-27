
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route exact path="/about" element={<AboutPage />}></Route>
          </Routes>
          <AboutIconLink />
        </BrowserRouter>
      </div>
    </FeedbackProvider>
  );
}

export default App;
