import React from "react";
import styles from "./Footer.module.css";
import { blue } from "@material-ui/core/colors";

const Footer = () => {
  const onMouseOut = (e) => {
    e.target.style.color = "#cccccc";
  };

  const SocialWidget = [
    {
      SocialMediaName: "LinkedIn",
      ProfileLink: "https://www.linkedin.com/in/hariom-malviya-614160148/",
      fontAwesomeIconName: "fab fa-linkedin",
      OnMouseOverColor: "#4875B4",
    },
    {
      SocialMediaName: "GitHub",
      ProfileLink: "https://github.com/HarsH-OhM",
      fontAwesomeIconName: "fab fa-github",
      OnMouseOverColor: "#211F1F",
    },
   
    {
      SocialMediaName: "Gmail",
      ProfileLink: "mailto:gurjarhariom3114@gmail.com",
      fontAwesomeIconName: "far fa-envelope",
      OnMouseOverColor: "#D44638",
      _comment: "OnMouseOverColor for yahoo mail: #720e9e",
    },
    {
      SocialMediaName: "WhatsApp",
      ProfileLink: "https://wa.me/9685640396",
      fontAwesomeIconName: "fab fa-whatsapp",
      OnMouseOverColor: "#25d366",
    },
  
  ];

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Created with care by{" "}
          <a
            
            href="https://github.com/HarsH-OhM"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
           Hariom Malviya
          </a>
        </h6>
      </div>
      <div className={styles.container}>
        <br />
        <ul className="list" >
          {SocialWidget.map((data, key) => {
            return (
              <li
                key={key}
                style={{ display: "inline-block", marginRight: "17px" }}
              >
                <a
                  onMouseOver={(e) => {
                    e.target.style.color = `${data.OnMouseOverColor}`;
                  }}
                  onMouseOut={onMouseOut}
                  href={data.ProfileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#cccccc", fontSize: "40px" }}
                >
                  <i className={`${data.fontAwesomeIconName}`} ></i>

                  
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div>

      <h3>
      <a href= "https://www.linkedin.com/in/hariom-malviya-614160148/" fontAwesomeIconName="fab fa-linkedin">Visit My LinkedIn Profile</a></h3>
      
   
      </div>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 16,
            marginTop: "20px",
            textAlign: "center",
          }}
        >

            <span>
          Data provided 💖 by{" "}
          </span>
          <a
            href="https://github.com/mathdroid/covid-19-api"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Mathdroid
          </a>
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;