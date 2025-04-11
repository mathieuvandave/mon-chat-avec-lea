export default async function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ message: 'Message de bienvenue simulé' });
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
