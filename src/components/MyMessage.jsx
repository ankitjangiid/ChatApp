import React from "react";

const MyMessage = ({ message }) => {
  // this is to check if the message is an image to text
  // if its an img then its length should be greater then 0
  // the line 'message?.attachments?.length' means, if there is an message -> then in 'message.attachments' -> then in it if there is an attachment then -> 'message.attachments.lenght'
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  //  here is its a text then render this
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
