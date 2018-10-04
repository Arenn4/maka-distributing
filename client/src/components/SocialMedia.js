import React from "react";
import Instafeed from "instafeed";
import "../styles/socialMedia.css";

console.log(process.env);
const SocialMedia = () => {
  var userFeed = new Instafeed({
    get: "user",
    userId: "6691095851",
    limit: 3,
    resolution: "standard_resolution",
    accessToken: process.env.REACT_APP_IG_TOKEN,

    // filter: function (image) {
    //   console.log(image)
    //   return image.tags.indexOf("event") >= 0;
    // }
  });
  userFeed.run();

  return (
    <div className="e">
      <div id="instafeed" />
    </div>
  );
};

export default SocialMedia;
