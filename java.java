import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import org.apache.commons.codec.binary.Base64; // from http://www.reverse.net/pub/apache/commons/codec/binaries/commons-codec-1.4-bin.tar.gz

class java {  
  public static String base64_url_decode(String input) throws IOException {
    return new String(new Base64(true).decode(input));
  }

  public static void main(String[] args) throws Exception {
    BufferedReader in = new BufferedReader(new FileReader("tests.txt"));
    while (in.ready()) {
      String line = in.readLine();
      if (line.charAt(0) == '#') continue;
      String[] test = line.split(" ");
      String name = test[0];
      String input = test[1];
      String output = test[2];
      
      String data = base64_url_decode(input);
      if (!data.equals(output)) {
        System.out.println("java: "+name+" failed. "+data+" != "+output);
      }
    }
  }
}
