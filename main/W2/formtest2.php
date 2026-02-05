<?php
// formtest2.php

$name = $_POST['name'] ?? '(Not entered)';

echo <<<HTML
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Form Test</title>
  </head>
  <body>
    Your name is: $name <br>

    <form action="formtest2.php" method="post">
      <label for="name">What is your name?</label>
      <input type="text" id="name" name="name">
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
HTML;
