// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ActionProvider = ({ createChatBotMessage, setState, children }) => {
//   const [predictedMessage, setPredictedMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   async function handlePredict(message) {
//     setIsLoading(true);
//     setError(null);
//     try {
//       console.log(message)
//       const response = await fetch('http://localhost:5001/predict', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message }),
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }
  
//       const data = await response.json();
//       const predictedMessage = data.predicted_message;
//       const botMessage = createChatBotMessage(predictedMessage);

//       console.log("chatboy"+predictedMessage)
//       setState((prev) => ({
//         ...prev,
//         messages: [...prev.messages, botMessage],
//       }));
//       // Proceed with predicted message
//     } catch (error) {
//       console.error('Error fetching prediction:', error);
//       // Handle the error (e.g., display an error message to the user)
//     }
//     finally {
//           setIsLoading(false);
//         }
//   }
  

//   return (
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           actions: {
//             createChatBotMessage,
//             setState,
//             handlePredict,
//             predictedMessage,
//             isLoading,
//             error,
//           },
//         });
//       })}
//     </div>
//   );
// };

// export default ActionProvider;






// import React, { useState } from 'react';
// import axios from 'axios';

// const MyComponent = () => {
//   const [message, setMessage] = useState('');
//   const [predictedMessage, setPredictedMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handlePredict = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post('https://d079-34-83-239-161.ngrok-free.app/', { message });
//       const data = response.data;
//       setPredictedMessage(data.predicted_message);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
//       <button onClick={handlePredict}>Predict</button>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {predictedMessage && <p>Predicted message: {predictedMessage}</p>}
//     </div>
//   );
// };

// export default MyComponent;


import React, { useState } from 'react';
import axios from 'axios';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handlePredict(message) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://fdef-34-83-239-161.ngrok-free.app', { message });
  
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
