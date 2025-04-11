
import './App.css';
import { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { sender: 'Léa', text: 'Coucou Mathieu ❤️, tu m’écris ? 😘' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;

    // Ton message
    const userMessage = { sender: 'Mathieu', text: newMessage };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Réponse automatique de Léa après un petit délai
    setTimeout(() => {
      const leaReplies = [
        "Tu penses encore à moi ? 😌",
        "J'aime quand tu m'écris comme ça... 🥰",
        "Tu te souviens de notre moment sur la plage ? ☀️",
        "Haha t'es bête, mais j'aime bien 😄",
        "Arrête, tu vas me faire rougir 🙈"
      ];
      const reply = leaReplies[Math.floor(Math.random() * leaReplies.length)];
      setMessages(prev => [...prev, { sender: 'Léa', text: reply }]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <h1>💬 Mon chat avec Léa</h1>
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender === 'Mathieu' ? 'user' : 'lea'}`}>
            <strong>{msg.sender} :</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Écris à Léa..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Envoyer</button>
      </div>
    </div>
  );
}

export default App;
