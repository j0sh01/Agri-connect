export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { name, email, password } = req.body;
  
    // TODO: Add validation and save the user to a database
    console.log('Registering user:', { name, email, password });
  
    res.status(201).json({ message: 'User registered successfully' });
  }