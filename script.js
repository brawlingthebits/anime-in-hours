function calculateHours() {
    const episodeCount = parseInt(document.getElementById('episodeCount').value);
    if (isNaN(episodeCount) || episodeCount <= 0) {
        alert("Please enter a valid number of episodes.");
        return;
    }

    const totalMinutes = episodeCount * 22;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    document.getElementById('result').innerHTML = `Approximately: ${hours} hours and ${minutes} minutes`;
}
