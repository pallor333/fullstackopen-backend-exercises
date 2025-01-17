function count(string) {
    let chars = {}
    for(let i = 0; i < string.length; i++){
      chars[string[i]] ? chars[string[i]]++ : chars[string[i]] = 1;
    }
    return chars
  }

console.log(count('aba'))