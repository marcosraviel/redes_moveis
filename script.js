var action1 = document.getElementById("add-1")
var action2 = document.getElementById("add-2")
var action3 = document.getElementById("add-3")
var action4 = document.getElementById("add-4")

var body = {
    algumaCoisa: 'algumValor',
    'outraCoisa': 'outroValor'
};
body['algumaCoisa'] = 'ouyto';

body.raviel = 'Raviel';

function buildRequest(body) {
    
}
var allBooks = new Array();

function book (title, author, number) {
    this.title = title;
    this.author = author;
    this.number = number;
}

action1.onclick = function(){
    var title = document.getElementsByClassName("title")[0].textContent;
    var author = document.getElementsByClassName("author")[0].textContent;

    var alocador = prompt("Qual o seu Nome: ");

    allBooks.push(new book(title, author, alocador));
    var request = new XMLHttpRequest();

request.open('POST', 'https://api-rest.zenvia.com/services/send-sms');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Authorization', 'Basic YW50b25pby5zbXNvbmxpbmU6VHY5NGdFdjVVZw==');
request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'sendSmsRequest': {
    'from': 'Remetente',
    'to': '5585985238006',
    'schedule': new Date(new Date().getTime() + 120000).toISOString(),
    'msg': 'alocado por: ' + alocador +' '+ title +' ' + author,
    'callbackOption': 'NONE',
    'id': '002',
    'aggregateId': '1111',
    'flashSms': false
  }
};

request.send(JSON.stringify(body));

};

action2.onclick = function(){
    var title = document.getElementsByClassName("title")[1].textContent;
    var author = document.getElementsByClassName("author")[1].textContent;

    var number = prompt("Qual o seu numero: ");

    allBooks.push(new book(title, author, number));
};

action3.onclick = function(){
    var title = document.getElementsByClassName("title")[2].textContent;
    var author = document.getElementsByClassName("author")[2].textContent;

    var number = prompt("Qual o seu numero: ");

    allBooks.push(new book(title, author, number));
};

action4.onclick = function(){
    var title = document.getElementsByClassName("title")[3].textContent;
    var author = document.getElementsByClassName("author")[3].textContent;

    var number = prompt("Qual o seu numero: ");

    allBooks.push(new book(title, author, number));
};


