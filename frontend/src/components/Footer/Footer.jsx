import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Experience the best of culinary delights with Yammy! Your go-to food
            delivery service, offering a diverse range of dishes delivered
            straight to your door. Fresh, fast, and delicious - every time.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/YourFacebookProfile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a
              href="https://www.facebook.com/YourFacebookProfile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="" />
            </a>
            <a
              href="https://www.facebook.com/YourFacebookProfile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>SUPPORT</h2>
          <ul>
            <li>
              <a
                href="tel:+919121467809"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91-912-146-7809
              </a>
            </li>
            <li>
              <a
                href="mailto:support@Yammy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                support@yammy.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        All trademarks are properties of their respective owners. 2024 &copy;
        Yammy&trade; Ltd. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
