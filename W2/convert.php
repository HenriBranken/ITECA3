<?php
// convert.php

$f = sanitizeString($_POST['f'] ?? '');  // NULL coalescing operator.
$c = sanitizeString($_POST['c'] ?? '');  // NULL coalescing operator.
$out = "";

if (is_numeric($f)) {
    $c = round((5 / 9) * ($f - 32), 1);
    $out = "$f &deg;F equals $c &deg;C";
} elseif (is_numeric($c)) {
    $f = round((9 / 5) * $c + 32, 1);
    $out = "$c &deg;C equals $f &deg;F";
}


echo <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Enter either Fahrenheit or Celsius, and click on Convert.</p>

    <strong>$out</strong>

    <form action="" method="post">
        <fieldset>
            <pre>
                Fahrenheit <input type="text" name="f" size="12">
                   Celsius <input type="text" name="c" size="12"> <br />
                           <input type="submit" value="Convert">
            </pre>
        </fieldset>
    </form>
</body>
</html>
HTML;

function sanitizeString($var)
{
    $var = stripslashes($var);
    $var = strip_tags($var);
    $var = htmlentities($var);
    return $var;
}
