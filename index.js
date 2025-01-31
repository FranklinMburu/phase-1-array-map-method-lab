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

function titleCased() {
  return tutorials.map(tutorial => {
    // Remove existing question mark (we'll add it back later if needed)
    let processed = tutorial.replace(/\?$/, '');

    // Handle special cases
    processed = processed
      .toLowerCase()
      .replace(/jsonp/i, 'JSONP')
      .replace(/nan/i, 'NaN')
      .replace(/oo pattern/i, 'OO Pattern')
      .replace(/web api/i, 'Web API')
      .replace(/stoppropagation/i, 'StopPropagation')
      .replace(/preventdefault/i, 'PreventDefault');

    // Capitalize each word
    let result = processed
      .split(' ')
      .map(word => {
        // Don't modify special cases
        if (['JSONP', 'NaN', 'OO', 'API', 'StopPropagation', 'PreventDefault']
            .includes(word)) {
          return word;
        }
        // Always capitalize first letter of each word
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');

    // Add question mark back if original had one
    return tutorial.endsWith('?') ? result + '?' : result;
  });
}

module.exports = { titleCased };


