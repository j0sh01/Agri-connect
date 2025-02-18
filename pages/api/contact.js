// pages/api/contact.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, subject, message, honeypot } = req.body;
      
      // Anti-spam honeypot check
      if (honeypot) {
        // If honeypot field is filled, consider it spam
        return res.status(400).json({ success: false, message: 'Spam detected' });
      }
  
      // Implement your logic here (e.g., send an email, save to database)
      // For demonstration purposes, we will return success
  
      console.log('Contact form submitted:', { name, email, subject, message });
  
      return res.status(200).json({ success: true });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  }
  