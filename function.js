window.function = function(inputString) {
  const string = inputString.value;

  // Function to convert string to camelCase
  const toCamelCase = (str) => {
    return str
      .replace(/[^a-zA-Z0-9 ]/g, ' ') // Replace special characters with spaces
      .split(' ')
      .map((word, index) => 
        index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join('');
  };

  // Generate a random number sequence to append
  const generateRandomSequence = (length) => {
    const chars = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const camelCaseString = toCamelCase(string);
  const requiredLength = 27; // 27 characters + '***' = 30 characters
  const randomSequenceLength = requiredLength - camelCaseString.length;

  let finalString = camelCaseString;
  if (randomSequenceLength > 0) {
    const randomSequence = generateRandomSequence(randomSequenceLength);
    finalString += randomSequence;
  }

  finalString = finalString.slice(0, requiredLength) + '***';

  return finalString;
}