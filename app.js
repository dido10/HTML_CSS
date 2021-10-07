var app= angular.module("SingerApp",[]);

app.controller("SingerController",function($scope){
//$scope.testing="if you see angularjs is working"
$scope.singers=[
    {"name":"beyonce","pic":"png/beyonce.jpg","gender":"F","quality":"png/like.png"},
    {"name":"Lady gaga","pic":"png/ladygaga.jpg","gender":"F","quality":"png/dislike.png"},
    {"name":"Bruno Mars","pic":"png/brunomars.jpg","gender":"M","quality":"png/like.png"},
    {"name":"Ed Sheeran","pic":"png/edsheeran.jpg","gender":"M","quality":"png/dislike.png"},
    {"name":"Adele","pic":"png/adele.jpg","gender":"F","quality":"png/like.png"}

]
});
