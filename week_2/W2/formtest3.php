<?php
// formtest.php

$name = '(Not Entered)';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'] ?? '(Not Entered)';
}

echo <<<HTML
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Form Test</title>
  </head>
  <body>
    <p>Your name is: $name</p>

    <form action="formtest.php" method="post">
      <label for="name">What is your name?</label>
      <input type="text" id="name" name="name">
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
HTML;
