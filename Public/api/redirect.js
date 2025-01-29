module.exports = (req, res) => {
    const userLanguage = req.headers['accept-language'] || 'en';  // Default to 'en' if no language detected
    const language = userLanguage.startsWith('fi') ? 'fi' : 'en';  // Detect Finnish or default to English
    
    // Redirect user to the appropriate language version
    res.writeHead(302, { Location: `/${language}` });
    res.end();
  };
  