export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { email, password } = req.body;
  
    // TODO: Add validation and check credentials against the database
    console.log('Logging in user:', { email, password });
  
    res.status(200).json({ message: 'Login successful' });
  }