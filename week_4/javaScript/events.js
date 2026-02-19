// ----------------------------------------------------------------------------------- //

// Navigate to the correct folder.
let PATH_IMAGES = "./images/";

// ------------------------------------------------------------------------------------ //
// window.onload example

// Extract the <img> element.
let $imgGenya = document.getElementById("genya-img");
// Extract the <figcaption> element.
let $capGenya = document.getElementById("genya-cap");

// When the entire page has loaded, execute the `populateGenya()` function.
window.onload = populateGenya;

// The handler function.
function populateGenya() {
  // Hook up the `src` attribute with the correct filepath.
  $imgGenya.setAttribute("src", PATH_IMAGES + "genya.png");
  // Generate the appropriate caption beneath the figure.
  $capGenya.innerHTML = "A demonized Genya";
}

// ------------------------------------------------------------------------------------ //
// nodeElement.onclick example.

// Extract the image node we are interested in.
let $yoriichi = document.getElementById("yoriichitsugikuni");

// Assign the `showTrueImage` function to the `onclick` property.
$yoriichi.onclick = showTrueImage;

function showTrueImage(e) {
  // Specify the image we are interested in.
  let imgElement = e.target;
  // Get the name of the non-blurred image.
  let name = PATH_IMAGES + imgElement.id + ".jpg";
  // Change the `src` attribute to the non-blurred image filepath.
  imgElement.src = name;

  // Set up an timer event that will fire in 2.5 seconds.
  setTimeout(reblur, 2500, imgElement);
}

// When this handler is called, it will be passed `imgElement`
function reblur(imgElement) {
  // Get the name of the blurred image.
  let name_blur = PATH_IMAGES + imgElement.id + "_blur.jpg";
  // Change the `src` attribute back to the name of the blurred image filepath.
  imgElement.src = name_blur;
}

// ------------------------------------------------------------------------------------ //
// nodeElement.onkeydown example

// Create an <img> element.
let $elem = document.createElement("img");
// Specify the path of the image.
$elem.setAttribute("src", PATH_IMAGES + "rengoku.jpg");
// Assign id attribute to <img> element.
$elem.setAttribute("id", "rengoku");

// Extract Input Node.
let $keydownInput = document.getElementById("keydownInput");

// Hook up the handler with the keydown event.
$keydownInput.onkeydown = populateImage;

function populateImage(e) {
  // Determine whether the character 'j' was pressed.  'j' has a code of 74.
  let keyCode = e.which;
  if (keyCode == 74) {
    // Append <img> element to the div#keydownDiv.
    document.getElementById("keydownDiv").appendChild($elem);
    // Set a timer event that will fire in 5 seconds.
    setTimeout(destroy, 5000, $elem);
  }
}

function destroy(elem) {
  // Identify the <div> element.
  let $div = document.getElementById("keydownDiv");
  // Remove the <img> element from div#keydownDiv.
  $div.removeChild(elem);
}

// ------------------------------------------------------------------------------------ //
// nodeElement.onmouseover & nodeElement.onmouseout examples.

// Extract the appropriate <img> node element.
let $imgDaki = document.getElementById("daki");

// Hook up event handlers with the `mouseover` & `mouseout` events.
$imgDaki.onmouseover = invertImg;
$imgDaki.onmouseout = revertImg;

// Invert the image completely.
function invertImg() {
  $imgDaki.style.filter = "sepia(100%)";
}

// Revert the image back to its initial colours.
function revertImg() {
  $imgDaki.style.filter = "sepia(0%)";
}

// ------------------------------------------------------------------------------------ //
// nodeElement.onchange example

// Extract the <select> node.
let $selection = document.getElementById("mySelect");
// Extract the <img> node.
let $upper_moon = document.getElementById("upper_moon");
// Extract the <figcaption> mode.
let $caption = document.getElementById("upper_moon_cap");

// Hook up handler `changeImage` with the `onchange` event.
$selection.onchange = changeImage;

function changeImage() {
  // Get the filename of the image we need.
  let filename = $selection.value;
  // Extract the number at the 5th-last position.
  let number = filename.charAt(filename.length - 5);
  // Insert the filepath value into the 'src' attribute.
  $upper_moon.setAttribute("src", "../images/" + filename);
  // Generate the correction caption for the corresponding image.
  $caption.innerHTML = "Upper Moon " + number;
}

// ------------------------------------------------------------------------------------ //
/* BACK-TO-TOP BUTTON ------------------------------------------------------------------*/
let $backToTop = $("div#back-to-top");
console.log($backToTop);
$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 200) {
    $backToTop.fadeIn(700);
  } else {
    $backToTop.fadeOut(700);
  }
});
