import * as fs from "fs";
import * as path from "path";

class FileProcessor {
  fullFilePath: string;

  constructor(fullFilePath: string) {
    this.fullFilePath = fullFilePath;
  }

  readAllText(): string {
    return fs.readFileSync(this.fullFilePath, "utf-8");
  }

  writeToFile(text: string): void {
    const fileNameWithoutExtension = path.parse(this.fullFilePath).name;

    const outputFilePath = `${fileNameWithoutExtension}.html`;

    console.log(outputFilePath);

    fs.writeFileSync(outputFilePath, text, "utf-8");
  }
}

export default FileProcessor;
