import React, { useState } from 'react';
import axios from 'axios';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handlePredict(message) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://0f76-35-202-207-140.ngrok-free.app', { message });
      if (response.status !== 200) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      const data = response.data;
      const predictedMessage = data.predicted_message;
      const botMessage = createChatBotMessage(predictedMessage);

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error('Error fetching prediction:', error);
      setError(error.message);
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            createChatBotMessage,
            setState,
            handlePredict,
            isLoading,
            error,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
