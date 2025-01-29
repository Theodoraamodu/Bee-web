function calculateScore() {
    // Get user inputs
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;

    // Get answers
    const colorAnswer = document.querySelector('input[name="color"]:checked').value;
    const leaderAnswer = document.querySelector('input[name="leader"]:checked').value;
    const oddAnswer = document.querySelector('input[name="odd"]:checked').value;
    const commAnswer = document.querySelector('input[name="comm"]:checked').value;
    const threatAnswer = document.querySelector('input[name="threat"]:checked').value;

    // Define correct answers
    const correctColor = "Black and yellow";
    const correctLeader = "queen";
    const correctOdd = "sleepy bee";
    const correctComm = "Waggle dance";
    const correctThreat = "climate change";

    // Calculate score
    let score = 0;
    if (colorAnswer === correctColor) score++;
    if (leaderAnswer === correctLeader) score++;
    if (oddAnswer === correctOdd) score++;
    if (commAnswer === correctComm) score++;
    if (threatAnswer === correctThreat) score++;

    // Display score
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.innerHTML = `<p>${fname} ${lname}'s Score: ${score} out of 5</p>`;

    // Prevent the form from submitting
    return false;
}
