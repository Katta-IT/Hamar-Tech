var dropdowns = document.querySelectorAll('.sidenav .dropdown');
console.log(dropdowns);

var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );
    
window.onscroll = function() {scrollFunction()};


if (page != "index.html" && page != "compiler.html") {
    let compilerTing = document.getElementById("copyTekst");
    console.log(compilerTing)
    
    let compilerTing2 = compilerTing.innerHTML.replace("", "");
    console.log(compilerTing2)
    localStorage.setItem("compilerTekst", compilerTing2);
    
} else if (page == "compiler.html"){
    document.getElementById("text-html").innerHTML =  localStorage.getItem("compilerTekst");
    run()
}



dropdowns.forEach(function (dropdown) {
    var parentItem = dropdown.parentElement;
    var parentLink = parentItem.querySelector('a');
    console.log(parentItem)
    console.log(parentLink)

    parentLink.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        var trekant = document.querySelector('.trekant');
        var boks = document.querySelector('.sidenav ul a');
        dropdown.classList.toggle('active');
        trekant.classList.toggle('active');
        boks.classList.toggle('active')
    });

    var dropdownItems = dropdown.querySelectorAll('li a');
    dropdownItems.forEach(function (dropdownItem) {
        dropdownItem.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });
});

function copy() {
    let kopiert = document.getElementById("copyKnapp");
    let copyText = document.querySelector(".copyTekst");
    console.log(copyText.innerHTML)
    navigator.clipboard.writeText(copyText.innerHTML);
    kopiert.innerHTML = "Kopiert!"
    kopiert.setAttribute('class', 'copyKnappKlikket')
}

function scrollFunction() {
    if (page != 'compiler.html') {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("logo").setAttribute('class', 'logoMidten');
            document.getElementById("sidenav").setAttribute('class', 'sidenavNårLitenLogoIHeader');

        }  else {
            document.getElementById("logo").setAttribute('class', 'logo');
            document.getElementById("sidenav").setAttribute('class', 'sidenav');   
        } 
    }

}

function testJS() {
    var b = document.getElementById('copyTekst').value,
        url = 'http://htmlHead.html/next.html?name=' + encodeURIComponent(b);
    
    document.location.href = url;
}