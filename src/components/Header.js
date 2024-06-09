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
      setOpacity(1)
    } else if (locationId) {
      setOpacity(0.5);
      if (locationId === "sidekick-ai") {
        updateMessage("This was a challenging project! But my team and I did a great job.");
      } else if (locationId === "fun") {
        updateMessage("OMG fun!!!!!");
      }
    }
  }, [location]);

  const [opacity, setOpacity] = useState(1);

  return (
    <header style={{ opacity: opacity }}>
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
