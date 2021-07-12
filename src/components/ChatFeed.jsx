import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats ? chats[activeChat] : null;

  // const renderReadReceipts = (message, isMyMessage) => {
  //   return chat.people.map((person, index) => {
  //     // this is to check if ther person has read the message or not if yes then do..
  //     if (person.last_read === message.id) {
  //       <div
  //         key={`read_${index}`}
  //         className="read-receipt"
  //         style={{
  //           float: isMyMessage ? "right" : "left",
  //           backgroundImage: `url(${person?.person?.avatar})`,
  //         }}
  //       />;
  //     }
  //   });
  // };

  const renderReadReceipts = (message, isMyMessage) =>
    chat.people.map(
      (person, index) =>
        // if person.last_read === message.id then only
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );

  const renderMessages = () => {
    const keys = Object.keys(messages);
    // console.log(keys);

    // this is to map through all the messages
    return keys.map((key, index) => {
      // a specific message with key index
      const message = messages[key];

      // to get the lasy message
      const lastMessageKey = index === 0 ? null : keys[index - 1];

      // to check if last message is our own, if userName === messa... then isMyMessage = true else false
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {
              // if its our message then render 'MyMessage' if its not then render 'TheirMessage'
              isMyMessage ? (
                <MyMessage message={message} />
              ) : (
                <TheirMessage
                  message={message}
                  lastMessage={messages[lastMessageKey]}
                />
              )
            }
          </div>

          {/* this is read receipts, if its our message then margin will be different then if its their message */}
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  // this is to make sure if there is a chat, if there isn't then return 'Loading...'
  if (!chat) return "Loading...";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">
          {/* here we don't have to check weather there is a chat or not because we did that already*/}
          {chat?.title}
        </div>

        <div className="chat-subtitle">
          {/*  to map through all the people in chat and print their name */}
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}

      {/* this is just to enter some space after messages */}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
