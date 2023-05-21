function rightPlace(string, char, endWord) {
    let res = string.replace('_', char);
    let output = res === endWord ? "Matched" : "Not Matched"
    console.log(output);
}
rightPlace('Str_ng', 'i',
'String' )