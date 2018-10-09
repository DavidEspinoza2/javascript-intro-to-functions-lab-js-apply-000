function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  string = "HELLO";
  console.log(string);
}

function logWhisper(string){
  string = "hello";
  console.log(string);
}

function sayHiToGrandma(string){
  string = 'hello';
  if(string === string.toLowerCase()){
    return "I can't hear you!";
  }
}
function sayHiToGrandma(string){
  string = 'HELLO';
  if(string === string.toUpperCase()){
    return "YES INDEED!";
  }
}
