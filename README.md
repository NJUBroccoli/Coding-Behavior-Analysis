# Coding Behavior Analysis

An extension for VS Code to provide an analysis of coding behavior like coding speed and coding accuracy.

## Features

- At current stage, by launching the CBA extension, you can see your coding speed and accuracy in the status bar of VS Code. An example is shown as follows.

![](images/example.gif)

- A shortcut `CTRL+SHIFT+A` is provided to generate a broken line graph which shows the change of your coding speed. Currently we use [Chart.js](https://www.chartjs.org) to generate it.

## Run

Since the naïve extension hasn't been published to market, you can download the source code and open it in VS Code. After you type `Ctrl+F5`, a new window will appear. By typing `SHIFT+SPACE+P` and then inputing `CBA`, the extension will be launched.

## TODO

1. Look for better indicators to measure one's coding performance.
2. Mine the coding content and analyze it for more interesting conclusion.

## Release Notes

It hasn't yet been released...

### License

[MIT](LICENSE)