const readline = require("readline"); //library for input/output

module.exports = class CommandLine {
  static ask(question) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) => {
      rl.question(`${question}`, (answer) => {
        resolve(answer);
        rl.close();
      });
    });
  }

  static print(text) {
    console.log(text);
  }
};
