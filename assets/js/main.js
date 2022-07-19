//Static Part

$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
		    event.preventDefault();
		    var hash = this.hash;
		    $('html, body').animate({
		        scrollTop: $(hash).offset().top-60
		    }, 800, function(){
		        window.location.hash = hash;
		    });
		}
	});
});

var allPlats=["PlayStation Vita", "iPad", "Xbox 360", 
"PlayStation 3", "Macintosh", "PC", "iPhone", "Nintendo DS", 
"Nintendo 3DS", "Android", "Wii", "PlayStation 4", "Wii U", 
"Linux", "PlayStation Portable", "PlayStation", "Nintendo 64", 
"Saturn", "Lynx", "Game Boy", "Game Boy Color", 
"NeoGeo Pocket Color", "Game.Com", "Dreamcast", "Dreamcast VMU", 
"WonderSwan", "Arcade", "Nintendo 64DD"];

var genre=["Platformer", "Puzzle", "Sports", "Strategy", "Fighting", 
"RPG", "Action, Adventure", "Adventure", "Action", 
"Action, RPG", "Shooter", "Music", "Board", "Racing", "Strategy, RPG", 
"Racing, Action", "Shooter, RPG", "Simulation", "Action, Simulation", 
"Flight, Action", "Puzzle, Action", "Action, Compilation", 
"Educational, Puzzle", "Wrestling", "Fighting, Action", 
"Productivity", "Sports, Simulation", "Music, Action", "Sports, Action", 
"Party", "Battle", "Puzzle, Adventure", "Puzzle, Word Game", 
"Card, Battle", "Simulation, Adventure", "Compilation", "Flight", 
"Pinball", "Hunting", "Casino", "Sports, Racing", "Fighting, Compilation", 
"Flight, Simulation", "Trivia", "Action, Platformer", "Other", 
"Virtual Pet", "Music, Editor", "Sports, Editor", "Racing, Simulation", 
"RPG, Editor"];

for(var i=0;i<allPlats.length;i++) {
	$("#drop2 div").append("<label><input type='checkbox' name='z'>"+allPlats[i]+"</label><br>");
}

for(var i=0;i<genre.length;i++) {
	$("#drop3 div").append("<label><input type='checkbox' name='y'>"+genre[i]+"</label><br>");
}

var genreIcons={
	"Platformer": "assets/css/icons/platform.svg",
	"Puzzle": "assets/css/icons/jigsaw.svg",
	"Sports": "assets/css/icons/baseball.svg",
	"Strategy": "assets/css/icons/strategy.svg",
	"Fighting": "assets/css/icons/swords.svg",
	"RPG": "assets/css/icons/roleplaying.svg",
	"Action, Adventure": "assets/css/icons/trekking.svg",
	"Adventure": "assets/css/icons/map.svg",
	"Action": "assets/css/icons/fist.svg",
	"Action, RPG": "assets/css/icons/shield.svg",
	"Shooter": "assets/css/icons/goal.svg",
	"Music": "assets/css/icons/music.svg",
	"Board": "assets/css/icons/dices.svg",
	"Racing": "assets/css/icons/steering.svg",
	"Strategy, RPG": "assets/css/icons/adventure.svg",
	"Racing, Action": "assets/css/icons/chronometer.svg",
	"Shooter, RPG": "assets/css/icons/shooter.svg",
	"Simulation": "assets/css/icons/eye.svg",
	"Action, Simulation": "assets/css/icons/simulator.svg",
	"Flight, Action": "assets/css/icons/airplane.svg",
	"Puzzle, Action": "assets/css/icons/ninja.svg",
	"Action, Compilation": "assets/css/icons/behavior.svg",
	"Educational, Puzzle": "assets/css/icons/chalkboard.svg",
	"Wrestling": "assets/css/icons/wrestling.svg",
	"Fighting, Action": "assets/css/icons/boxing.svg",
	"Productivity": "assets/css/icons/gym.svg",
	"Sports, Simulation": "assets/css/icons/photographer.svg",
	"Music, Action": "assets/css/icons/muaction.svg",
	"Sports, Action": "assets/css/icons/baseball.svg",
	"Party": "assets/css/icons/confetti.svg",
	"Battle": "assets/css/icons/swords.svg",
	"Puzzle, Adventure": "assets/css/icons/ninja.svg",
	"Puzzle, Word Game":"assets/css/icons/scrabble.svg",
	"Card, Battle": "assets/css/icons/cards.svg",
	"Simulation, Adventure": "assets/css/icons/simulator.svg",
	"Compilation": "assets/css/icons/compiler.svg",
	"Flight": "assets/css/icons/airplane.svg",
	"Pinball": "assets/css/icons/pinball.svg",
	"Hunting": "assets/css/icons/weapons.svg",
	"Casino": "assets/css/icons/casino-chips.svg",
	"Sports, Racing": "assets/css/icons/chronometer.svg",
	"Fighting, Compilation": "assets/css/icons/boxing.svg",
	"Flight, Simulation": "assets/css/icons/airplane.svg",
	"Trivia": "assets/css/icons/question.svg",
	"Action, Platformer": "assets/css/icons/platform.svg",
	"Other": "assets/css/icons/paper-plane.svg",
	"Virtual Pet": "assets/css/icons/dog.svg",
	"Music, Editor": "assets/css/icons/equalizer.svg",
	"Sports, Editor": "assets/css/icons/baseball.svg",
	"Racing, Simulation": "assets/css/icons/steering.svg",
	"RPG, Editor": "assets/css/icons/roleplaying.svg",
	"": "assets/css/icons/magic-wand.svg"
};

//Dynamic Part

var data=[],presentData=document.querySelector("#mainData .row");
var workData=[],titles=[];
var requestURL ="/gamesext";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
	var s = request.response;

	for(var i=0;i<s.length;i++) {
		data.push(s[i]);
		titles.push(data[i].title.toString());
	}
	workData=data.slice(0);
	whatNow(workData);
	autocomplete(titles);
}

function whatNow(dataTo) {
	$("#mainData .row").html("");
	$("#paging").html("");
	for(var i=0;i<48&&i<dataTo.length;i++) {
		var myH5 = document.createElement('h5'),classEdu;
		myH5.textContent = dataTo[i]['title'];
		var iconPos=Object.keys(genreIcons),pathIcon;
		for(var j=0;j<52;j++) {
			if(dataTo[i]['genre']==iconPos[j]) {
				pathIcon=genreIcons[iconPos[j]];
				break;
			}
		}
		if((i%4)==0)
			classEdu="education";
		else if((i%4)==1)
			classEdu="education1";
		else if((i%4)==2)
			classEdu="education2";
		else
			classEdu="education3";
		if(dataTo[i]["editors_choice"]==='Y') {
			presentData.innerHTML+="<div class='col-lg-3 col-md-4 col-sm-6'><span><a href='javaScript:void(0)' class='card "+classEdu+"'><div class='starred'><img src='assets/css/icons/ribbon.svg'  title='Editor&rsquo;s choice' alt='Editor&rsquo;s choice'></div><div class='circle'><img src='"+pathIcon+"'></div><h6>"+dataTo[i]['genre']+"</h6><div class='belowOne'><h5>"+dataTo[i]['title']+"</h5></div><div><div><span class='stars'>"+dataTo[i].score+"</span></div><div class='circleText'>"+dataTo[i].score+"</div></div><br><div class='questans'><div class='quest'>Platform: <span class='ans'>"+dataTo[i].platform+"</span></div><div class='quest'>Release Year: <span class='ans'>"+dataTo[i].release_year+"</span></div></div></a></span></div>";
		}
		else 
			presentData.innerHTML+="<div class='col-lg-3 col-md-4 col-sm-6'><span><a href='javaScript:void(0)' class='card "+classEdu+"'><div class='starred'></div><div class='circle'><img src='"+pathIcon+"'></div><h6>"+dataTo[i]['genre']+"</h6><div class='belowOne'><h5>"+dataTo[i]['title']+"</h5></div><div><div><span class='stars'>"+dataTo[i].score+"</span></div><div class='circleText'>"+dataTo[i].score+"</div></div><br><div class='questans'><div class='quest'>Platform: <span class='ans'>"+dataTo[i].platform+"</span></div><div class='quest'>Release Year: <span class='ans'>"+dataTo[i].release_year+"</span></div></div></a></span></div>";
	}
	if(dataTo.length===0) {
		presentData.innerHTML="<p style='margin: 50px auto 200px auto; font-size: 68px'>No results Found :(</p>";
	}
	$('span.stars').stars();
	addLiHtml(dataTo,dataTo.length);
};

function addLiHtml(dat,len) {
	var noOf=parseInt(Math.ceil(len/48));
	$('#paging').bootpag({
	    total: noOf,
	    page: 1,
	    maxVisible: 5,
	    leaps: true,
	    firstLastUse: true,
	    wrapClass: 'pagination',
	    activeClass: 'active',
	    disabledClass: 'disabled',
	    nextClass: 'next',
	    prevClass: 'prev',
	    lastClass: 'last',
	    firstClass: 'first'
	}).on("page", function(event, num){
		$("#mainData .row").html("");
		for(var i=(num-1)*48;i<dat.length&&i<num*48;i++) {
			var myH5 = document.createElement('h5'),classEdu;
			myH5.textContent = dat[i]['title'];
			var iconPos=Object.keys(genreIcons),pathIcon;
			for(var j=0;j<52;j++) {
				if(dat[i]['genre']===iconPos[j]) {
					pathIcon=genreIcons[iconPos[j]];
					break;
				}
			}
			if((i%4)==0)
				classEdu="education";
			else if((i%4)==1)
				classEdu="education1";
			else if((i%4)==2)
				classEdu="education2";
			else
				classEdu="education3";
			if(dat[i]["editors_choice"]==='Y') {
				presentData.innerHTML+="<div class='col-lg-3 col-md-4 col-sm-6'><span><a href='javaScript:void(0)' class='card "+classEdu+"'><div class='starred'><img src='assets/css/icons/ribbon.svg' title='Editor&rsquo;s choice' alt='Editor&rsquo;s choice'></div><div class='circle'><img src='"+pathIcon+"'></div><h6>"+dat[i]['genre']+"</h6><div class='belowOne'><h5>"+dat[i]['title']+"</h5></div><div><div><span class='stars'>"+dat[i].score+"</span></div><div class='circleText'>"+dat[i].score+"</div></div><br><div class='questans'><div class='quest'>Platform: <span class='ans'>"+dat[i].platform+"</span></div><div class='quest'>Release Year: <span class='ans'>"+dat[i].release_year+"</span></div></div></a></span></div>";
			}
			else 
				presentData.innerHTML+="<div class='col-lg-3 col-md-4 col-sm-6'><span><a href='javaScript:void(0)' class='card "+classEdu+"'><div class='starred'></div><div class='circle'><img src='"+pathIcon+"'></div><h6>"+dat[i]['genre']+"</h6><div class='belowOne'><h5>"+dat[i]['title']+"</h5></div><div><div><span class='stars'>"+dat[i].score+"</span></div><div class='circleText'>"+dat[i].score+"</div></div><br><div class='questans'><div class='quest'>Platform: <span class='ans'>"+dat[i].platform+"</span></div><div class='quest'>Release Year: <span class='ans'>"+dat[i].release_year+"</span></div></div></a></span></div>";
			}
		$('span.stars').stars(); 
	});
}

// autocomplete+ search bar

function autocomplete(arr) {
	$( "#myInput" ).autocomplete({
		minLength: 3,
		source: function(request, response) {
	        var results = $.ui.autocomplete.filter(arr, request.term);
	        response(results.slice(0, 15));
	    }
    });
}

$(".autocomplete button").on("click", function(event) {
	event.preventDefault();
	if($("#myInput").val()!=="") {
		var substring=$("#myInput").val().toString().toLowerCase();
		var renderData=[];
		for(var i=0;i<workData.length;i++) {
			if((workData[i]["title"].toString().toLowerCase().indexOf(substring))!=-1) 
				renderData.push(workData[i]);
		}
		$("#myInput").val("");
		whatNow(renderData);
	}
});

$(".autocomplete input").keypress(function (e) {
	if($("#myInput").val()!=="") {
	 	var key = e.which;
	 	if(key == 13) {
		    var substring=$("#myInput").val().toString().toLowerCase();
			var renderData=[];
			for(var i=0;i<workData.length;i++) {
				if((workData[i]["title"].toString().toLowerCase().indexOf(substring))!=-1) 
					renderData.push(workData[i]);
			}
			$("#myInput").val("");
			whatNow(renderData);
	  	}
	}
});

// Filters

$("#filterIcon").on("click",function() {
	var workData2=[],flag1=0,arr1=[],arr2=[],arr3=[],fin=[];
	for(var i=0;i<allPlats.length;i++) {
		if($("#drop2 input")[i].checked) {
			flag1=1;
			var gamePlatform=$("#drop2 label")[i].innerText;
			for(var j=0;j<data.length;j++) {
				if(data[j].platform===gamePlatform) {
					arr1.push(parseInt(j));
				}
			}
		}
	}
	if(flag1===0) {
		for(var i=0;i<data.length;i++)
			arr1.push(parseInt(i));
	}
	flag1=0;
	for(var i=0;i<genre.length;i++) {
			if($("#drop3 input")[i].checked) {
			flag1=1;
			var gamePlatform=$("#drop3 label")[i].innerText;
			for(var j=0;j<data.length;j++) {
				if(data[j].genre===gamePlatform) {
					arr2.push(parseInt(j));
				}
			}
		}
	}
	if(flag1===0) {
		for(var i=0;i<data.length;i++)
			arr2.push(parseInt(i));
	}
	arr1.sort(function(a,b) {
		return a-b;
	});
	arr2.sort(function(a,b) {
		return a-b;
	});
	var result = [];
	while( arr1.length > 0 && arr2.length > 0 ) {  
	    if(arr1[0]<arr2[0]) { arr1.shift(); }
	    else if(arr1[0]>arr2[0]) { arr2.shift(); }
	    else
	    {
		    result.push(arr1.shift());
		    arr2.shift();
	    }
	}
	if($("#ch1:checked").val()==="on") {
		for(var j=0;j<data.length;j++) {
			if(data[j].editors_choice==="Y") {
				arr3.push(parseInt(j));
			}
		}
	}
	else if($("#ch2:checked").val()==="on") {
		for(var j=0;j<data.length;j++) {
			if(data[j].editors_choice==="N") {
				arr3.push(parseInt(j));
			}
		}
	}
	if(arr3.length===0) {
		for(var i=0;i<2499;i++)
			arr3.push(parseInt(i));
	}
	flag1=0;
	arr3.sort(function(a,b) {
		return a-b;
	});
	result.sort(function(a,b) {
		return a-b;
	});
	while( arr3.length > 0 && result.length > 0 ) {  
	    if(arr3[0]<result[0]) { arr3.shift(); }
	    else if(arr3[0]>result[0]) { result.shift(); }
	    else
	    {
		    fin.push(arr3.shift());
		    result.shift();
	    }
	}
	for(var i=0;i<fin.length;i++) {
		workData2.push(data[fin[i]]);
	}
	workData=workData2.slice(0);

	if($("#sort1:checked").val()==="on") {
			workData.sort(function(a, b) {
		    return a.score - b.score;
		});
	}
	else if($("#sort2:checked").val()==="on") {
		workData.sort(function(a, b) {
		    return b.score - a.score;
		});
	}
	whatNow(workData);
	var subtitles=[];
	for(var i=0;i<workData2.length;i++)
		subtitles.push(workData2[i].title);
	autocomplete(subtitles);
});

// Reset filter

$("#resetFilter").on("click",function() {
	$('.dropdown input').prop('checked', false);
	workData=data.slice(0);
	whatNow(workData);
	autocomplete(titles);
});

// Ratings(Star) Feature

$.fn.stars = function() {
    return $(this).each(function() {
        $(this).html($('<span />').width(Math.max(0, (Math.min(10, parseFloat($(this).html())))) * 16));
    });
}