 url ='empty';
function callapi(){

var nameValue = document.getElementById("search").value;
if(nameValue.length == 0){
    nameValue  = 'sports';
}
var key = 'ca80b8fe731b4e93a459ae6edf0ccad8';
var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

//today = yyyy + '-' + mm + '-' + dd;

var url = 'https://newsapi.org/v2/everything?q=' + nameValue +'&sortBy=popularity&apiKey=' + key;

// alert(url);
console.log(url);
fetchUserData(url);
}





function fetchUserData(url){
    fetch(url)
        .then(response => response.json())
        .then(users => {
            console.log(users.articles);
            
                document.getElementById('href1').href= (users.articles[0].url);
                document.getElementById('pic1').src = users.articles[0].urlToImage;
                document.getElementById('author1').innerText = users.articles[0].author;
                
                document.getElementById('content1').innerText = users.articles[0].title;
                
                document.getElementById('pat1').innerText = users.articles[0].publishedAt;

                document.getElementById('href2').href= (users.articles[1].url);
                document.getElementById('pic2').src = users.articles[1].urlToImage;
                document.getElementById('author2').innerText = users.articles[1].author;
                
                document.getElementById('content2').innerText = users.articles[1].title;
                
                document.getElementById('pat2').innerText = users.articles[1].publishedAt;
                
                document.getElementById('href3').href= (users.articles[2].url);
                document.getElementById('pic3').src = users.articles[2].urlToImage;
                document.getElementById('author3').innerText = users.articles[2].author;
                
                document.getElementById('content3').innerText = users.articles[2].title;
                
                document.getElementById('pat3').innerText = users.articles[2].publishedAt;

                document.getElementById('href4').href= (users.articles[3].url);
                document.getElementById('pic4').src = users.articles[3].urlToImage;
                document.getElementById('author4').innerText = users.articles[3].author;
                
                document.getElementById('content4').innerText = users.articles[3].title;
                
                document.getElementById('pat4').innerText = users.articles[3].publishedAt;
            
        });
}
