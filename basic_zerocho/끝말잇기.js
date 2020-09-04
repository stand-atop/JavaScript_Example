var 바디 = document.body; //html의 body태그를 선택
var 단어 = document.createElement('div'); //html div태그 생성
단어.textContent = '크롱'; //html dif태그 안에 크롱을 넣음
document.body.append(단어); //단어,바디는 변수라 화면에 보여주지 않음. body안에 추가(body안에 div태그 추가해줌).
var 폼 = document.createElement('form'); //Enter key 활용하기 위해 만들어줌
document.body.append(폼);
var 입력창 = document.createElement('input'); //input창
폼.append(입력창);
var 버튼 = document.createElement('button'); //button
버튼.textContent = '입력';
폼.append(버튼);
var 결과창 = document.createElement('div'); //딩동댕
document.body.append(결과창); 

//버튼.addEventListener('click', function 콜백함수(){
//form에 enter key 활용하기 위해 submit 활용 - 새로고침 되서 새페이지로 이동(기본동작임)
폼.addEventListener('submit', function 콜백함수(이벤트) {  //새로고침 되지 않도록 매개변수 지정
    이벤트.preventDefault(); //새로고침 하지 않도록 기본 동작 변경
    if(단어.textContent[단어.textContent.length - 1] === 입력창.value[0]){
        //'안녕하세요'['안녕하세요'.length - 1] -> '안녕하세요'[5 - 1] -> '요'
        //입력창.value === 초밥 -> 초
        결과창.textContent = '딩동댕';
        단어.textContent = 입력창.value; //입력값 보여줌
        입력창.value = ''; //입력창을 비워줌
        입력창.focus(); //포커스 이동 : 버튼->입력창
    }else{
        결과창.textContent = '땡';
        입력창.value = ''; //입력창을 비워줌
        입력창.focus(); //포커스 이동 : 버튼->입력창
    }
})

/*
var word = '크롱'
while (true) {
    var answer = prompt(word);
    if(word[word.length - 1] === answer[0]){
        alert('딩동댕');
        word = answer;
    }else{
        alert('땡');
    }
}
*/