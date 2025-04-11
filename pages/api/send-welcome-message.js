
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Envoi d'un message de bienvenue simulé
      res.status(200).json({ message: 'Message de bienvenue simulé' });
    } catch (error) {
      // Gère les erreurs internes si quelque chose se passe mal
      console.error('Erreur interne:', error);
      res.status(500).json({ error: 'Erreur interne du serveur' });
    }
  } else {
    // Si la méthode n'est pas POST, retourne l'erreur "Méthode non autorisée"
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
