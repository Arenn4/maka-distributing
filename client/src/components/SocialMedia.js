import React, { Fragment } from "react";
import Instafeed from "instafeed.js";
import "../styles/socialmedia.css";


console.log(process.env);
const SocialMedia = () => {
  var userFeed = new Instafeed({
    get: "user",
    userId: "6691095851",
    resolution: "standard_resolution",
    limit: 30,
    accessToken: process.env.REACT_APP_IG_TOKEN,
    filter: function(image) {
      return image.tags.indexOf("event") >= 0;
    },
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
  });
  userFeed.run();

  return (
    <Fragment>
      <div className="social-title">Come party with us</div>
    <div className="social-container">
      <div id="instafeed" className=""/>
    </div>
    </Fragment>
  );
};

export default SocialMedia;


// render(){
//   const instafeedTarget = 'instafeed'
//   return (
//     <div id={instafeedTarget}>
//       <Instafeed
//         limit='5'
//         ref='instafeed'
//         resolution='standard_resolution'
//         sortBy=""
//         target={instafeedTarget}
//         userId='6691095851'
//         accessToken= {process.env.REACT_APP_IG_TOKEN}
//         tags= "event"
//       />
      
//     </div>
//     );
//   }
// };

// export default SocialMedia;