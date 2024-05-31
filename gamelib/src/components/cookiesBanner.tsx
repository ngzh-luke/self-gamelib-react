import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const CookiesBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);
  const cookies = new Cookies(null, { path: "/" });
  useEffect(() => {
    if (cookies.get("acknowledge") == true) {
      setShowBanner(false);
      console.log("acknowledged");
    } else {
      setShowBanner(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAcknowledge = () => {
    cookies.set("acknowledge", true);
    setShowBanner(false);
  };

  return showBanner ? (
    <div className="cookies-banner">
      <div className="cookies-banner-content">
        <h4
          style={{
            fontWeight: "bold",
            color: "blue",
          }}
        >
          Cookies notice
        </h4>
        <h6
          style={{
            color: "red",
          }}
        >
          Necessary type
        </h6>
        <p className="alimamadongfangdakai">
          We use cookies to help the website functional properly.
        </p>
        <button onClick={handleAcknowledge}>Acknowledge</button>
      </div>
    </div>
  ) : null;
};

export default CookiesBanner;
