// import PropTypes from 'prop-types'


function Header({ text, bgColor, textColor }) {

  const HeaderSty = {
    backgroundColor: bgColor, 
    color: textColor,
  }

  return (
    <header style={HeaderSty}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95"
  }

  // Header.propTypes = {
  //   text: PropTypes.string,
  //   textColor: PropTypes.string,
  // }

export default Header;
