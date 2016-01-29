exports.run = function(n) {
    // Given a circle of radius R = 1/2 and square of length L = 1, both
    // centered at the origin, estimate pi.

    // C = π * D, where C is the circumference of a circle, and D
    // is the diameter of the circle.

    // The area of the circle Ac = π * R², and the area of the square
    // As = L * L = D * D = D² = (2R)² = 4R².

    // Therefore, Ac / As = (π * R²) / (4 * R²), leading to:
    // Ac / As = π/4, leading to: π = 4 * (Ac / As), or put into english:
    // Pi is equal to the ratio of the area of an inscribed circle to the area
    // of its outer square, all multiplied by 4.

    // We can estimate pi using the "dartboard" method. If you set up a dartboard
    // (with a perfectly inscribed circle inside a square) and you have an equal chance
    // of hitting inside at least the square on the board (and possibly inside the circle
    // as well), then we can say that the ratio between the number of darts that land in the circle
    // versus the total number of darts thrown is equal to the area of the circle over the area of
    // the square, or Ac/As = number of darts landing in the circle / total darts thrown. We'll label
    // the number of darts landing in the circle as p and the total number of darts thrown as n. Finally,
    // we can right the equation as π = 4 * (p/n).

    var remainingDarts = n;
    var nInsideCircle = 0;

    while (remainingDarts > 0)
    {
        // x ∊ [-1, 1], y ∊ [-1, 1]
        var x = Math.random() * 2 - 1;
        var y = Math.random() * 2 - 1;

        // Even though distance = √(x² + y²), we only care if the
        // distance is less than 1. If the distance to the point
        // is less than 1, it's in the circle. If the distance to
        // the point is greater than 1, it must be in the square.
        // Therefore, our condition is √(x² + y²) < 1 or x² + y² < 1.
        // In other words, we can save time by not using Math.sqrt.
        var distSquared = x * x + y * y;
        if (distSquared < 1) {
            nInsideCircle += 1;
        }

        remainingDarts -= 1;
    }

    var hitPct = nInsideCircle / n;
    var estimate = hitPct * 4;
    console.log("Estimated pi value: ", hitPct * 4);
    console.log("Accuracy (estimate - pi): ", (estimate - Math.PI));
}