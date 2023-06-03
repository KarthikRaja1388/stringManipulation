function manipulateString(str, func) {
  let convertedToUpper = str.toUpperCase();
  return logString(convertedToUpper);
}

function logString(input) {
  console.log(`The manipulated string: ${input}`);
}

let result = manipulateString("Hello, World!", logString);
