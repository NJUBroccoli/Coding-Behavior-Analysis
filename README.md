# Coding Behavior Analysis

An extension for VS Code to provide an analysis of coding behavior like coding speed, coding accuracy and frequency of typed characters.

## Features

- At current stage, by launching the CBA extension, you can see your coding speed and accuracy in the status bar of VS Code. An example is shown as follows.

![](https://github.com/NJUBroccoli/Coding-Behavior-Analysis/blob/master/images/example.gif?raw=true)

- A shortcut `CTRL+SHIFT+A` is provided to generate a broken line graph which shows the change of your coding speed. Currently we use [Chart.js](https://www.chartjs.org) to generate it. **At current stage, network connection is required.**

- You can type `CTRL+SHIFT+C` to disable it.

## Install & Run

- It is available in the VS Code Extension Marketplace, and you can search `Coding Behavior Analysis` in it. [Visual Studio Code Market Place: Coding Behavior Analysis](https://marketplace.visualstudio.com/items?itemName=Broccoli.cba-vscode)

- You can also download the source code and open it in VS Code. After you type `Ctrl+F5`, a new window will appear. By typing `SHIFT+SPACE+P` and then inputing `CBA`, the extension will be launched.

## TODO

1. Look for better indicators to measure one's coding performance.
2. Mine the coding content and analyze it for more interesting conclusion.
3. Dynamically update graphs while typing.

## Release Notes

### 1.0.2

New features: Show the frequency of typed characters in a bar.

### 1.0.1

Add support for disabling this extension.

### 1.0.0

Initial release

## License

[MIT](https://github.com/NJUBroccoli/Coding-Behavior-Analysis/blob/master/LICENSE)