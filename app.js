var Stopwatch = require('node-stopwatch').Stopwatch;
var monte_carlo = require('./samples/monte-carlo-pi/monte-carlo-pi').run;

var args = process.argv.slice(2);
if (args.length < 1) {
    console.error("Usage: node app.js {sample-to-run} {required sample arguments}");
}

var sample = args[0];
switch (sample) {
    case 'monte-carlo-pi':
        if (args.length < 2) {
            console.error("Usage: node app.js monte-carlo-pi {number of darts to throw}");
            break;
        }

        var verbose = false;
        if (args.length > 2) {
            var optSwitch = args[2];
            if (optSwitch == '-v') {
                verbose = true;
            }
        }

        var n = parseInt(args[1], 10);
        if (verbose) {
            var stopwatch = Stopwatch.create();
            stopwatch.start();
            monte_carlo(n);
            stopwatch.stop();
            console.log('Elapsed time: ' + stopwatch.elapsedMilliseconds + 'ms');
        }
        else {
            monte_carlo(n);
        }

        break;

    default:
        break;
}