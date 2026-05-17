import * as readline from "readline";
import FileProcessor from "./FileProcessor";
import Converter from "./Convert";

class TextConverter extends Converter {
  private fileProcessor: FileProcessor;

  constructor(fileProcessor: FileProcessor) {
    super();
    this.fileProcessor = fileProcessor;
  }

  async convert(): Promise<void> {
    try {
      console.log("Please specify the full file path to convert to HTML.");

      const fullFilePath = await this.readLine();

      if (!fullFilePath || fullFilePath.trim() === "") {
        return;
      }

      const inputText = this.fileProcessor.readAllText();

      const paragraphs = inputText.split(/\r\n?|\n/);

      let htmlContent = "";

      for (const paragraph of paragraphs) {
        if (paragraph.trim().length === 0) {
          continue;
        }

        htmlContent += `<p>${paragraph}</p>\n`;
      }

      htmlContent += "<br/>\n";

      this.fileProcessor.writeToFile(htmlContent);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  private readLine(): Promise<string> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.question("", (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }
}

export default TextConverter;
