import React from "react";
import Button from "../../../reusecore/Button";
import CloudNativeWrapper from "./cloud-native.style";
import cncf from "../../../assets/images/partners/cncf-stacked-white-color.svg";

const CloudNativeLeaders = () => {
  return (
    <CloudNativeWrapper >
      <div className="cloud-cont">
        <div className="col-1">
          <h4>We are</h4>
          <h1>Cloud Native</h1>
          <h1>Leaders</h1>
        </div>
        <div className="col-2">
          <p>
              From the beginning Layer5 actively engaged in leadership roles in CNCF initiatives and projects.Commissioned by the CNCF for research and analysis.
            <br />
              Published the Serverless Whitepaper Chatir of 
          </p>
          <img src={cncf} alt="Cloud Native-logo" />
        </div>
        
      </div>
      <div className="btn-cont">
        <Button primary title="About Us" url="/company/about" />
      </div>
    </CloudNativeWrapper>
  );
};

export default CloudNativeLeaders;