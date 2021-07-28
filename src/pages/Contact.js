import React from "react";

import phone from "../images/phone.svg";
import envelope from "../images/envelope.svg";
import rym from "../profile-images/rym.jpg";

function Contact() {
  return (
    <div className="contact">
      <div className="profile-img">
        <img src={rym} alt="rym-image"/>
        <div className="contact__info">
          <p className="contact__text">
            {" "}
            Я очень признательна, что Вы решили связаться со мной. <br />
            Выберите наиболее подходящий вариант для вас:
          </p>
          <h3 className="myContacts">Мои контакты</h3>
          <div className="contact__phone">
            <img className="contact__icons" src={phone} />
            <p>
              <a href="tel:+996707411680">996707411680</a>
            </p>
          </div>
          <div className="contact__email">
            <img className="contact__icons" src={envelope} />
            <p>
              <a href="mailto:gulzana.katkeldieva@gmail.com">
                gulzana.katkeldieva@gmail.com
              </a>
            </p>
          </div>

          <div className="links">
            <div className="links__github">
              <a target="_blank" href="https://github.com/kgulzana">
                Github
              </a>
            </div>
            <div className="links__linkedin">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/gulzanakatkeldieva/"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
