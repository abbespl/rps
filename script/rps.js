function computerPlay() {
    let cpuPicks = ['Rock', 'Paper', 'Scissors'];
    return cpuPick = cpuPicks[Math.floor(Math.random() * cpuPicks.length)];
}
console.log (computerPlay())