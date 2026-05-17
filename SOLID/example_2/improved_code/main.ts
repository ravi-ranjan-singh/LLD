import FileProcessor from "./FileProcessor";
import TextConverter from "./TextConverter";

function main() {
  let fp = new FileProcessor("../");
  let textConverter = new TextConverter(fp);
  textConverter.convertText();
}

main();
