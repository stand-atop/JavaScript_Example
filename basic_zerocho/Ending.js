//끝말잇기
var word = '시계'

while(true){
    var newWord = prompt(word);
    if(word[word.length - 1] === newWord[0]){
        word = newWord;
    } else {
        alert('끝말잇기야!')
    }
}