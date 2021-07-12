import React from "react";

const TheirMessage = ({ message, lastMessage }) => {
  // if we're dealing with the message that someone else send then we want to know if its his first message
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username != message.sender.username;

  return (
    <div className="message-row">
      {/* this line means that if isFirstMessageByUser is 'true' then do.. */}
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}

      {
        // this is to check weather send message is a text or an image
        message?.attachments?.length > 0 ? ( // if
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
          />
        ) : (
          // else
          <div
            className="message"
            style={{
              float: "left",
              backgroundColor: "#CABCDC",
              marginLeft: isFirstMessageByUser ? "4px" : "48px",
            }}
          >
            {message.text}
          </div>
        )
      }
    </div>
  );
};

export default TheirMessage;
