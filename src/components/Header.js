import "./Header.scss";
import Avatar from "../media/avatar.svg";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [chatMessage, setChatMessage] = useState(
    "Hey, welcome to my world of ideas!"
  );

  const [messageVisible, setMessageVisible] = useState(true);

  const updateMessage = (newMessage) => {
    setMessageVisible(false);
    setChatMessage(newMessage);

    setTimeout(() => {
      setMessageVisible(true);
    });
  };

  const location = useLocation();

  const locationSplit = location.pathname.split("/");

  const locationId = locationSplit[2];

  useEffect(() => {
    if (!locationId) {
      updateMessage("Hey, welcome to my world of ideas!");
    } else if (locationId === "sidekick-ai") {
      updateMessage("Ah Sidekick, one of my favourite projects!");
    } else if (locationId === "fun") {
      updateMessage("OMG fun!!!!!");
    }
  }, [location]);

  return (
    <header>
      <div className="avatar">
        <img src={Avatar} />
      </div>
      <div className="chat-right">
        <h1 className="text-small text-weight-medium">Emmanuel</h1>

        <div className="chat-bubble text-small">
          {messageVisible && (
            <Typewriter words={[chatMessage]} typeSpeed={50} />
          )}
        </div>
      </div>

      <button className="contact-button text-small">Get in Touch</button>
    </header>
  );
};

export default Header;
