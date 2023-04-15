import { CopyToClipboard } from "react-copy-to-clipboard";

import React from "react";

const Copy = ({ shortendUrl }) => {
  return (
    <div className="shortener__copy">
      {shortendUrl}

      <CopyToClipboard text={shortendUrl}>
        <button onClick={() => alert("The URL has been copied")}>copy</button>
      </CopyToClipboard>
    </div>
  );
};

export default Copy;
