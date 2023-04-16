import { useState } from "react";
import PropTypes from "prop-types";
import Copy from "./Copy";
const Button = () => {
  const [url, setUrl] = useState();
  const [shortendUrl, setShortenedUrl] = useState("");

  const shortenUrl = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      const data = await response.json();
      setShortenedUrl(data.result.full_short_link);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div id="url">
      <div className="shortener">
        <h2>URL shortener</h2>
        <form id="myForm" onSubmit={shortenUrl}>
          <label htmlFor="enter your url">
            Enter Url to get it shortened:{" "}
          </label>
          <input
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            id="urlChecker"
          />
          <button id="myButton">Submit</button>
        </form>
        {/* shortendUrl &&*/}{" "}
        <div className="shortener__copy">{shortendUrl}</div>
      </div>
      <Copy />
    </div>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.prototypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
