var app= angular.module("ComposersList",[]);

app.controller("ComposerController",function($scope){
//$scope.testing="if you see angularjs is working"
$scope.pieces=[
{"pic":"images/bach.jpg","composer":"Bach","title":"Hunting Cantata, BWV "},
{"pic":"images/bach.jpg","composer":"Bach","title":"Orchestral Suite "},
{"pic":"images/bach.jpg","composer":"Bach","title":"Goldberg Variations"},
{"pic":"images/bach.jpg","composer":"Bach","title":"Ich ruf zu dir"},
{"pic":"images/bach.jpg","composer":"Bach","title":"Prelude"},
{"pic":"images/beethoven.jpg","composer":"Beethoven","title":"Moonlight Sonata"},
{"pic":"images/beethoven.jpg","composer":"Beethoven","title":"Piano Sonatax"},
{"pic":"images/beethoven.jpg","composer":"Beethoven","title":"Mozart"},
{"pic":"images/beethoven.jpg","composer":"Beethoven","title":"Symhony No9"},
{"pic":"images/beethoven.jpg","composer":"Beethoven","title":"Rondo A Capriccio In"},
{"pic":"images/mozart.jpg","composer":"Mozart","title":"Molto Allegro"},
{"pic":"images/mozart.jpg","composer":"Mozart","title":"Romanza"},
{"pic":"images/mozart.jpg","composer":"Mozart","title":"Cum Sanctis"},
{"pic":"images/mozart.jpg","composer":"Mozart","title":"Requiem: Rex Tremendae"},
{"pic":"images/mozart.jpg","composer":"Mozart","title":"Requiem: Rocardare"}]

});