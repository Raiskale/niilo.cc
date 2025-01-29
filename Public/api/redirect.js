export default function handler(req, res) {
    // Get the user's preferred language from the 'Accept-Language' header
    const language = req.headers['accept-language'].split(',')[0];
  
    // Redirect to the appropriate language folder based on the browser's language
    if (language.startsWith('en')) {
      res.redirect(301, '/en');
    } else if (language.startsWith('fi')) {
      res.redirect(301, '/fi');
    } else {
      // Default to English if the language is not recognized
      res.redirect(301, '/en');
    }
  }
  