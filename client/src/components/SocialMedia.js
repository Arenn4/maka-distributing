import React from "react";
import Instafeed from "instafeed";
import "../styles/socialmedia.css";

console.log(process.env);
const SocialMedia = () => {
  var userFeed = new Instafeed({
    get: "user",
    userId: "6691095851",
    limit: 3,
    // filter: function(image) {
    //   return image.tags.indexOf("event") >= 0;
    // },
    resolution: "standard_resolution",
    accessToken: process.env.REACT_APP_IG_TOKEN
    
  });
  userFeed.run();

  return (
    <div className="social-container">
      <div id="instafeed" />
    </div>
  );
};

export default SocialMedia;
