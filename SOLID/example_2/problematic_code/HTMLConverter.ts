import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";

class HTMLConverter {
  static async main(): Promise<void> {
    try {
      console.log("Please specify the full file path to convert to HTML.");

      const fullFilePath = await this.askQuestion();

      if (!fullFilePath || fullFilePath.trim() === "") {
        return;
      }

      const inputText = this.readAllText(fullFilePath);

      const paragraphs = inputText.split(/\r\n?|\n/);

      let htmlContent = "";

      for (const paragraph of paragraphs) {
        if (paragraph.trim().length === 0) {
          continue;
        }

        htmlContent += `<p>${paragraph}</p>\n`;
      }

      htmlContent += "<br/>\n";

      this.writeToFile(fullFilePath, htmlContent);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }

    console.log("Press any key to exit.");

    process.stdin.resume();
    process.stdin.once("data", () => {
      process.exit(0);
    });
  }

  static askQuestion(): Promise<string> {
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

  static readAllText(fullFilePath: string): string {
    return fs.readFileSync(fullFilePath, "utf-8");
  }

  static writeToFile(fullFilePath: string, text: string): void {
    const fileNameWithoutExtension = path.parse(fullFilePath).name;

    const outputFilePath = `${fileNameWithoutExtension}.html`;

    console.log(outputFilePath);

    fs.writeFileSync(outputFilePath, text, "utf-8");
  }
}

HTMLConverter.main();
