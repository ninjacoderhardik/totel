import React from "react";

const GoogleMap = () => {
  return (
    <div className="google-map-code">
      <iframe
        className="h-screen iframe-map"
        src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
