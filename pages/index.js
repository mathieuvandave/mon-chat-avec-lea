import { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState(null);

  const sendMessage = async () => {
    setStatus('Envoi en cours...');
    const res = await fetch('/api/send-welcome-message', {
      method: 'POST',
    });
    const data = await res.json();
    if (res.ok) {
      // Si la réponse est OK, on affiche le message de succès
      setStatus('Message envoyé à Léa 💬');
    } else {
      // Si la réponse contient une erreur, on l'affiche
      setStatus(`Erreur : ${data.message || 'Une erreur est survenue'}`);
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Mon chat avec Léa 💖</h1>
      <button onClick={sendMessage} style={{ padding: '1rem', fontSize: '1rem', marginTop: '1rem' }}>
        Envoyer le message d'accueil
      </button>
      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </div>
  );
}
