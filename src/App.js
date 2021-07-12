import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/loginForm";

import "./App.css";

const projectID = process.env.REACT_APP_PROJECT_ID;

const App = () => {
  // here we're checking if there is an localStorage which was used to store login creds
  // because while login in if creds are right we store the username in a localstorage
  // that means if there isn't any localstorage then person is not logedin
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
