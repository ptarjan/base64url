import base64
def base64_url_decode(input):
  #pythons base64 is close, but requires all the padding
  input += '=' * (4 - (len(input) % 4))
  return base64.urlsafe_b64decode(input)

tests = file('tests.txt').read().split('\n')
for test in tests:
  if not test or test[0] == '#': continue
  name, input, output = test.split(' ')
  data = base64_url_decode(input)
  if data != output:
    print 'python: ' + name + ' failed. ' + data + ' != ' + output
