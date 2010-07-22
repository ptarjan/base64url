# perl

use MIME::Base64 qw(decode_base64);

sub base64_url_decode {
  (my $s = shift) =~ tr{-_}{+/};
  $s .= '=' x (4 - length($s));
  return decode_base64($s);
}


open(TESTS, 'tests.txt'); 
while (<TESTS>) {
  chomp;
  if (not $_ or /^#/) {
    next;
  }
  my ($name, $input, $output) = split / /;
  $data = base64_url_decode($input);
  if ($data ne $output) {
    print 'perl: ' . $name . ' failed. ' . $data . ' != ' . $output . "\n";
  }
}
