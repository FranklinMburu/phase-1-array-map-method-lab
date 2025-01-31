const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Takes care of making titles look nice
function titleCased() {
  return tutorials.map(title => {
    // Get rid of ? for now
    let cleanTitle = title.replace(/\?$/, '');
    
    // Fix special coding terms first
    cleanTitle = cleanTitle.toLowerCase()
      .replace(/jsonp/i, 'JSONP')
      .replace(/nan/i, 'NaN')
      .replace(/oo pattern/i, 'OO Pattern')
      .replace(/web api/i, 'Web API')
      .replace(/stoppropagation/i, 'StopPropagation')
      .replace(/preventdefault/i, 'PreventDefault');

    // Make everything pretty
    let prettyTitle = cleanTitle.split(' ')
      .map(word => {
        // Don't mess with special terms
        if (['JSONP', 'NaN', 'OO', 'API', 'StopPropagation', 'PreventDefault'].includes(word)) {
          return word;
        }
        // Capitalize the rest
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');

    // Put back the ? if it was there before
    return title.includes('?') ? prettyTitle + '?' : prettyTitle;
  });
}

module.exports = { titleCased };