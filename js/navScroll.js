var scrollBtn = document.getElementById("scroll-button");
scrollBtn.style.visibility = "hidden";
window.onscroll = function() {
    if(this.document.body.scrollTop != 0) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};

var experienceClick = function (e) {
    let experience = document.getElementById("experience-section");

    window.scroll({
        top: experience.offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}

var portfolioClick = function (e) {
    let portfolio = document.getElementById("portfolio-section");
    window.scroll({
        top: portfolio.offsetTop,
        left: 0,
        behavior: 'smooth'
    });   
}

var scrollHome = function() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });  
}