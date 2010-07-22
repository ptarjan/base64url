<?php
function base64_url_decode($input) {
  return base64_decode(strtr($input, '-_', '+/'));
}


$tests = explode("\n", file_get_contents('tests.txt'));
foreach ($tests as $test) {
  if (!$test || $test[0] == '#') continue;
  list($name, $input, $output) = explode(' ', $test);
  $data = base64_url_decode($input);
  if ($data !== $output) {
    print 'php: ' . $name . ' failed. ' . $data . ' != ' . $output . "\n";
  }
}
