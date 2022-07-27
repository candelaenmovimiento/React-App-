import { BrowserRouter, Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

function AboutIconLink() {
  return (
    <div className="about-link">
      <BrowserRouter>
        <Link to="/about">
          <FaQuestion size={30} />
        </Link>
      </BrowserRouter>
    </div>
  );
}

export default AboutIconLink;
