var numDeals = 3;
var numEvents = 2;

// opens popups
function openForm() {
    document.getElementById("filterForm").style.display = "block";
}

// closes popups
function closeForm() {
    document.getElementById("filterForm").style.display = "none";
}

function dUpVote(a) {
    y = "dLikes" + a
    var x = document.getElementById(y).innerHTML;
    x++;
    document.getElementById(y).innerHTML = x;
}

function dDownVote(a) {
    y = "dDislikes" + a
    var x = document.getElementById(y).innerHTML;
    x++;
    document.getElementById(y).innerHTML = x;
}

function eUpVote(a) {
    y = "eLikes" + a
    var x = document.getElementById(y).innerHTML;
    x++;
    document.getElementById(y).innerHTML = x;
}

function eDownVote(a) {
    y = "eDislikes" + a
    var x = document.getElementById(y).innerHTML;
    x++;
    document.getElementById(y).innerHTML = x;
}

// searching work for Deals
function searchDeals() {
    // Declare variables
    var input, filter, ul, li, h3, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("dealUL");
    li = ul.getElementsByTagName('div');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        h3 = li[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// searches events
function searchEvents() {
    // Declare variables
    var input, filter, ul, li, h3, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("eventUL");
    li = ul.getElementsByTagName('div');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        h3 = li[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function addPost(post){
    var div = document.createElement('div');
    div.className = "post module"

    if(post["postType"] == "deal") {
        numDeals++;
        div.innerHTML = `
            <div class='post_title'>
                <h3>`+ post['title'] +`</h3>
                <div class='clickables'>
                    <a role="button" onclick="dfavorite(`+ numDeals +`)"><img id="dfavorite`+ numDeals +`" class='favorite' src='./pics/fav.png' alt=''></a>
                    <span id='dLikes`+ numDeals +`'>0</span>
                    <button onclick='dUpVote(`+ numDeals +`)'><img class='thumb' src='./pics/Like.png' alt=''></button>
                    <span id='dDislikes`+ numDeals +`'>0</span>
                    <button type='button' name='button' onclick='dDownVote(`+ numDeals +`)'><img class='thumb' src='./pics/Dislike.png' alt=''></button>
                    <a role="button" class="collapsed" data-toggle="collapse" href="#dcollapse`+ numDeals +`" aria-expanded="false" onclick="dcolspand(`+ numDeals +`)" aria-controls="collapseExample"><img id="dexpand`+ numDeals +`" src="./pics/collapse.png" alt=""></a>
                </div>
            </div>
            <span class="collapse" id="dcollapse`+ numDeals +`" aria-expanded="false">
                <p>`+ post['description'] +`</p>
                <p>ENDS: `+ post['endDate'] +`<br>COST: `+ post['cost'] +`<br> LOCATION: `+ post['location'] +` <br>TAGS: `+ post['tags'] +`</p>
            </span>`;
            document.getElementById('dealUL').appendChild(div);
    } else {
        numEvents++;
        div.innerHTML = `
            <div class='post_title'>
                <h3>`+ post['title'] +`</h3>
                <div class='clickables'>
                    <a role="button" onclick="efavorite(`+ numEvents +`)"><img id="efavorite`+ numEvents +`" class='favorite' src='./pics/fav.png' alt=''></a>
                    <span id='eLikes`+ numEvents +`'>0</span>
                    <button onclick='eUpVote(`+ numEvents +`)'><img class='thumb' src='./pics/Like.png' alt=''></button>
                    <span id='eDislikes`+ numEvents +`'>0</span>
                    <button type='button' name='button' onclick='eDownVote(`+ numEvents +`)'><img class='thumb' src='./pics/Dislike.png' alt=''></button>
                    <a role="button" class="collapsed" data-toggle="collapse" href="#ecollapse`+ numEvents +`" aria-expanded="false" onclick="ecolspand(`+ numEvents +`)" aria-controls="collapseExample"><img id="eexpand`+ numEvents +`" src="./pics/collapse.png" alt=""></a>
                </div>
            </div>
            <span class="collapse" id="ecollapse`+ numEvents +`" aria-expanded="false">
                <p>`+ post['description'] +`</p>
                <p>ENDS: `+ post['endDate'] +`<br>COST: `+ post['cost'] +`<br> LOCATION: `+ post['location'] +` <br>TAGS: `+ post['tags'] +`</p>
            </span>`;
        document.getElementById('eventUL').appendChild(div);
    }
    alert("Your post titled: "+post["title"]+" has been added!")
}

// This script should make sure something is filled out for submissions. It doesn't
function required() {
    if (document.getElementById("postTitle").value == "" || document.getElementById("postDescription").value == "" || document.getElementById("tags").value == "" || document.getElementById("location").value == "") {
        alert("Please fill in every category");
    } else {
        var post = {
            'title': '',
            'startDate': '',
            'endDate': '',
            'location': '',
            'description': '',
            'postType': '',
            'tags': '',
            'cost': ''
        };

        // get data from form
        post['title'] = document.getElementById("postTitle").value;
        post['startDate'] = document.getElementById("startDate").value;
        post['endDate'] = document.getElementById("endDate").value;
        post['location'] = document.getElementById("location").value;
        post['description'] = document.getElementById("postDescription").value;
        var postTypes = document.getElementsByName("postType");
        for(var i = 0; i < postTypes.length; i++){
            if(postTypes[i].checked){
                post['postType'] = postTypes[i].value;
            }
        }
        post['tags'] = document.getElementById("tags").value;
        var costs = document.getElementsByName("cost");
        for(var i = 0; i < costs.length; i++){
            if(costs[i].checked){
                post['cost'] = costs[i].value;
            }
        }
        console.log("post: ", post);

        // clear data from form
        document.getElementById("postTitle").value = "";
        document.getElementById("startDate").value = "";
        document.getElementById("endDate").value = "";
        document.getElementById("location").value = "";
        document.getElementById("postDescription").value = "";
        for(var i = 0; i < postTypes.length; i++){
            if(postTypes[i].checked){
                document.getElementsByName("postType")[i].checked = false;
            }
        }
        $("#tags").tagsinput('removeAll');
        for(var i = 0; i < costs.length; i++){
            if(costs[i].checked){
                document.getElementsByName("cost")[i].checked = false;
            }
        }
        addPost(post);
    }
}

function dcolspand(num) {
    var id = 'dexpand' + num;
    if(document.getElementById(id).src == "file:///Users/ethantom/Documents/School/CMPM%20131/pics/collapse.png") {
        document.getElementById(id).src = "./pics/expand.png";
    } else {
        document.getElementById(id).src = "./pics/collapse.png"
    }

}

function ecolspand(num) {
    var id = 'eexpand' + num;
    if(document.getElementById(id).src == "file:///Users/ethantom/Documents/School/CMPM%20131/pics/collapse.png") {
        document.getElementById(id).src = "./pics/expand.png";
    } else {
        document.getElementById(id).src = "./pics/collapse.png"
    }

}

function dfavorite(num){
    var id = 'dfavorite' + num;
    if(document.getElementById(id).src == "file:///Users/ethantom/Documents/School/CMPM%20131/pics/fav.png") {
        document.getElementById(id).src = "./pics/faved.png";
    } else {
        document.getElementById(id).src = "./pics/fav.png"
    }
}

function efavorite(num){
    var id = 'efavorite' + num;
    if(document.getElementById(id).src == "file:///Users/ethantom/Documents/School/CMPM%20131/pics/fav.png") {
        document.getElementById(id).src = "./pics/faved.png";
    } else {
        document.getElementById(id).src = "./pics/fav.png"
    }
}
