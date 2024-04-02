// components/ChatBar.tsx

import React, { useState } from "react";

interface ChatBarProps {
  onSubmit: (message: string) => void;
}

const ChatBar: React.FC<ChatBarProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type your message..."
        style={inputStyle as React.CSSProperties} // Type assertion for style prop
      />
      <button
        type="submit"
        style={buttonStyle as React.CSSProperties} // Type assertion for style prop
      >
        Send
      </button>
    </form>
  );
};

const inputStyle = {
  width: "200px",
  height: "30px",
  padding: "5px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  marginRight: "10px",
};

const buttonStyle = {
  height: "40px",
  padding: "5px 10px",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
};

export default ChatBar;
