let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    console.log(content);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/* BACK-TO-TOP BUTTON ------------------------------------------------------------------*/
let $window = $(window);
let $backToTop = $('div#back-to-top');
$window.on('scroll', function () {
    if ($window.scrollTop() >= 200) {
        $backToTop.fadeIn(700);
    }
    else {
        $backToTop.fadeOut(700);
    }
});