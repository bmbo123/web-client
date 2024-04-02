// pages/ChatInterfacePage.tsx

import React from "react";
import ChatBar from "./components/chatbar";

const ChatInterfacePage: React.FC = () => {
  const handleSubmitMessage = (message: string) => {
    // Handle message submission logic here
    console.log("Submitted message:", message);
  };

  return (
    <div>
      <h1>Chat Interface</h1>
      <ChatBar onSubmit={handleSubmitMessage} />
    </div>
  );
};

export default ChatInterfacePage;
