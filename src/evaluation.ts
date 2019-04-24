import * as vscode from 'vscode';
import { codingSpeedCpsList, codingAccuracyList, codingSpeedWpsList } from './extension';

export function doEvaluation(context: vscode.ExtensionContext) {
    const panel = vscode.window.createWebviewPanel(
        'codingEvaluation',
        'Coding Evaluation',
        vscode.ViewColumn.One,
        { enableScripts: true }
    );
    context.subscriptions.push(panel);

    panel.webview.html = getWebviewContent();
    panel.webview.postMessage(getCodingMessage());
}

function getCodingMessage() {
    var speedJsonCps: any = [];
    var speedJsonWps: any = [];
    var accuracyJson: any = [];
    if (codingSpeedCpsList) {
        for (var i = 0; i < codingSpeedCpsList.length; i++) {
            speedJsonCps.push(codingSpeedCpsList[i]);
        }
    }
    if (codingAccuracyList) {
        for (i = 0; i < codingAccuracyList.length; i++) {
            accuracyJson.push(codingAccuracyList[i]);
        }
    }
    if (codingSpeedWpsList){
        for (i = 0; i < codingSpeedWpsList.length; i++){
            speedJsonWps.push(codingSpeedWpsList[i]);
        }
    }
    var json: any = [];
    json.push({ id: 0, content: speedJsonCps });
    json.push({ id: 1, content: speedJsonWps });
    json.push({ id: 2, content: accuracyJson });
    return json;
}

function getWebviewContent() {
    return `<!DOCTYPE HTML>
    <html>
    <head>
    <canvas id="myChart" style="height: 300px; width: 100%;"></canvas>
    <script>
    var speedJsonCps;
    var speedJsonWps;
    var accuracyJson;
    var xlabels = [];
    var ylabelsCps = [];
    var ylabelsWps = [];
    window.addEventListener('message', event => {
        const message = event.data;
        speedJsonCps = message[0].content;
        speedJsonWps = message[1].content;
        accuracyJson = message[2].content;
    });
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
    <script>
    window.onload = function () {
        for (var i = 0; i < speedJsonCps.length; i ++){
            xlabels.push(speedJsonCps[i].x.toString());
            ylabelsCps.push(speedJsonCps[i].y);
        }
        for (i = 0; i < speedJsonWps.length; i ++){
            ylabelsWps.push(speedJsonWps[i].y);
        }
        var data = {
            labels: xlabels,
            datasets: [{
                label: 'Coding Speed (Char/s)',
                data: ylabelsCps
            }, {
                label: 'Coding Speed (Word/s)',
                data: ylabelsWps
            }]
        };
        var options = {
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Time (s)'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Coding Speed'
                    }
                }]
            }
        };
        var ctx = document.getElementById("myChart").getContext("2d");
        var MyNewChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    }
    </script>
    </head>
    <body>
    </body>
    </html>`;
}

