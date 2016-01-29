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
        var stopwatch = Stopwatch.create();
        monte_carlo(n, function(estimate) {
            stopwatch.stop();

            console.log('Estimate value of pi: ', estimate);
            console.log('Accuracy (estimate - pi): ', estimate - Math.PI);

            if (verbose) {
                console.log('Elapsed time: ' + stopwatch.elapsedMilliseconds + 'ms');
            }
        });
        break;

    default:
        break;
}