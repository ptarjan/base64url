require 'base64'
  
def base64_url_decode(str)
  str += '=' * (4 - str.length.modulo(4))
  Base64.decode64(str.gsub("-", "+").gsub("_", "/"))
end


file = File.new("tests.txt", "r")
while (line = file.gets)
  if line.match(/^#/)
    next
  end
  name, input, output = line.split(' ')
  data = base64_url_decode(input)
  if data != output
    puts 'ruby: ' + name + ' failed. ' + data + ' != ' + output
  end
end
