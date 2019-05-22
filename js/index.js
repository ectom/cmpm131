// opens popups
function openForm() {
    document.getElementById("filterForm").style.display = "block";
}

// closes popups
function closeForm() {
    document.getElementById("filterForm").style.display = "none";
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

// This script should make sure something is filled out for submissions. It doesn't
function required(){
    var empt = document.forms["postTitle"]["postDescription"]["type"].value;
    if (empt == "")
    {
        alert("Please fill in every category");
    return false;
    }

    else
    {
    alert('Congrats on finishing your submission! Our editors will review it soon.');
    return true;
    }
}
