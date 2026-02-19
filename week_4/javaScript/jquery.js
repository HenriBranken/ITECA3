// ------------------------------------------------------------------------------------ //
$(function() {
    let tabs = $('ul.nav>li>a');

    tabs.on('click', function() {
        $('ul.nav>li>a.selected').removeClass('selected');
        $(this).parent().addClass('selected');
    });
});

// ------------------------------------------------------------------------------------ //

$('ul#eg1>li').on('mouseup', function() {
    $(this).remove();
});

// ------------------------------------------------------------------------------------ //
// LOOPING, page 310.

$('ul#eg2>li.hot').addClass('special');

// ------------------------------------------------------------------------------------ //
// CHAINING, page 311.

$('ul#eg3>li[id!="one"]').hide().delay(500).fadeIn(1500);

// ------------------------------------------------------------------------------------ //
// GETTING CONTENT, page 315.

let listText = $('ul#eg4').text();
$('ul#eg4').append('<p class="eg4">' + listText + '<p>');

// ------------------------------------------------------------------------------------ //
// CHANGING CONTENT, page 317.

$(function() {
    $('ul#eg5>li:contains("pine")').text('almonds');
});

// ------------------------------------------------------------------------------------ //
// ADDING NEW CONTENT, page 319.

$(function() {
    $('ul#eg6>li.hot').prepend('+ ');
    let $newListItem = $('<li class="eg cool">gluten-free soy sauce</li>');
    $('ul#eg6>li:last').after($newListItem);
});

// ------------------------------------------------------------------------------------ //
// CHANGING CSS RULES

$(function() {
    let backgroundColor = $('ul#eg7>li.normal').css('background-color');

    $('ul#eg7').append('<p class="blackBackdrop">Color was: ' + backgroundColor + '</p>');

    $('ul#eg7>li').css({
        'background-color': '#c5a996',
        'border': '1px solid #fff',
        'color': '#000',
        'font-family': 'Georgia',
        'padding-left': '+=75px'
    });
});

// ------------------------------------------------------------------------------------ //
// USING .each().

$(function() {
    // A jQuery object containing all the <li> elements.
    $('ul#eg8>li').each(function() {
        // We can access the current element using the this keyword.
        let theId = this.id;
        // $(this) allows us to use jQuery methods on the current element.
        $(this).append(' <span><em>' + theId + '</em></span>');
    });
});

// ------------------------------------------------------------------------------------ //
// EVENTS, page 327.

$(function() {
    let ids = '';
    let $listItems = $('ul#eg9>li');

    $listItems.on('mouseover', function() {
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append(' <span>' + ids + '</span>');
    });

    $listItems.on('mouseout', function() {
        $(this).children('span').remove();
    });
});

// ------------------------------------------------------------------------------------ //
// EVENT OBJECT, page 329.

$(function() {
    let $liElem = $('ul#eg10>li');

    $liElem.on('click', function(e) {
        $('ul#eg10>li span').remove();

        $(this).append(' <span><em>' + ' ' + e.type + '</em></span>');
    });
});

// ------------------------------------------------------------------------------------ //
// DELEGATING EVENTS, p. 331.

$(function() {
    let listItem, eventType;

    $('ul#eg11').on(
        'click mouseover',
        ':not(#four)',
        function(e) {
            listItem = 'Item: ' + e.target.textContent + '<br>';
            eventType = 'Event: ' + e.type;
            $('#notes').html(listItem + eventType);
        }
    );
});

// ------------------------------------------------------------------------------------ //
// BASIC EFFECTS

$(function() {
    let $liElems = $("ul#eg12>li");

    $liElems.hide().each(function(index) {
        $(this).delay(700 * index).fadeIn(700);
    });

    $liElems.on('click', function() {
        $(this).fadeOut(700);
    });
});

// ------------------------------------------------------------------------------------ //
// USING ANIMATION

$(function() {
    let $liElems = $("ul#eg13>li");

    $liElems.on('click', function() {
        $(this).animate({
            opacity: 0,
            paddingLeft: '+=100'
        }, 600, function() {
            $(this).remove();
        });
    });
});

// ------------------------------------------------------------------------------------ //
// TRAVERSING the DOM, page 337.

$(function() {
    let $h3 = $('ul#eg14').prev('h3');

    $('ul#eg14').hide();

    $h3.append('<a class="show">show</a>');

    $h3.find('a').on('click', function() {
        $h3.next()
            .fadeIn(600)
            .children('.hot')
            .toggleClass('normal');
        
    $h3.find('a').fadeOut();
    });
});

// ------------------------------------------------------------------------------------ //
// .SHOW() example.

$(function() {
    // Identify the paragraph, and the two buttons: one for showing, and one for hiding.
    let $par = $('p#show');
    let $showBtn = $('button#btn1');
    let $hideBtn = $('button#btn2');

    // Set things up such that the paragraph is initially hidden.
    $par.hide();

    // When the `show` button is clicked, show the paragraph.
    $showBtn.on('click', function() {
        $par.show();
    });
    // When the `hide` button is clicked, hide the paragraph.
    $hideBtn.on('click', function() {
        $par.hide();
    });
});

// ------------------------------------------------------------------------------------ //
// SLIDEDOWN example.

$(function() {
    // When #triggerSlide is clicked, 
    // then slide down/up #slidePanel over a span of 1 second.
    $('#triggerSlide').on('click', function() {
        $('#slidePanel').slideToggle(1000);
    });
});

// ------------------------------------------------------------------------------------ //
// STOP Example.

$(function() {
    $('#triggerSlide-2').on('click', function() {
        $('#slidePanel-2').slideToggle(5000, 'linear');
    });

    // When clicking the stop button, stop the #slidePanel-2 animation.
    $('button#stopSliding').on('click', function() {
        $('#slidePanel-2').stop();
    });
});

// ------------------------------------------------------------------------------------ //
// DOUBLE CLICK event.

$(function() {
    // When double-clicking on the paragraph, Alert the user.
    $('p#clickclick').on('dblclick', function() {
        alert('You just double-clicked a paragraph element...');
    });
});

// ------------------------------------------------------------------------------------ //
// Keyboard Events

$(function() {
    // Listen for a keydown event.
    $('input#kbdown').on('keydown', function(e) {
        $(this).css('background-color', 'hotpink');
        let char = String.fromCharCode(e.which);
        alert('Keydown event fired. You pressed ' + char + ', which has an ASCII code of ' + e.which + '.');
    });
});

$(function() {
    // Listen for a keyup event.
    $('input#kbup').on('keyup', function(e) {
        $(this).css('background-color', 'limegreen');
        let char = String.fromCharCode(e.which);
        alert('Keyup event fired. You pressed ' + char + ', which has an ASCII code of ' + e.which + '.');
    });
});

$(function() {
    // Listen for a keypress event.
    $('input#kbpress').on('keypress', function(e) {
        $(this).css('background-color', 'aquamarine');
        let char = String.fromCharCode(e.which);
        alert('Keypress event fired. You pressed ' + char + ', which has an ASCII code of ' + e.which + '.');
    });
});

// ------------------------------------------------------------------------------------ //
// FORM EVENTS

$(function() {
    // Detect when an element loses focus.
    $('input#blur').on('blur', function() {
        alert('The input has lost focus.');
    });
});

$(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        // Extract the text that the user entered.
        let x = $('input#toSubmit').val();
        // Evaluate this text, `x`, against 'Hyperion'
        if (x == 'Hyperion') {  // Show Success Message
            $('span#formFeedback').text('Submitted Successfully').show();
            return;
        } else { // Show Error Message
            $('span#formFeedback').text('Not Valid').show().fadeOut(2500);
        }
    });
});
// ------------------------------------------------------------------------------------ //

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