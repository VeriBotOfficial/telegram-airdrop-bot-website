let points = 0;
let multitapLevel = 1;
let multitapCost = 50;

// Load saved points, multitap level, and multitap cost from local storage
window.onload = function() {
    let savedPoints = localStorage.getItem("points");
    let savedMultitapLevel = localStorage.getItem("multitapLevel");
    let savedMultitapCost = localStorage.getItem("multitapCost");
    if (savedPoints) {
        points = parseInt(savedPoints);
        document.getElementById("points").innerText = "ZT Coins: " + points;
    }
    if (savedMultitapLevel) {
        multitapLevel = parseInt(savedMultitapLevel);
        updateMultitapDisplay();
    }
    if (savedMultitapCost) {
        multitapCost = parseInt(savedMultitapCost);
        updateMultitapDisplay(); // Update the display immediately after loading the cost
    }
}

// Function to handle cookie click
function clickCookie() {
    points += multitapLevel; // Increment points based on multitap level
    document.getElementById("points").innerText = "ZT Coins: " + points;
    saveGame(); // Save game after each click
}

// Function to buy multitap upgrade
function buyMultitap() {
    if (points >= multitapCost) {
        points -= multitapCost;
        multitapLevel++;
        multitapCost = Math.ceil(multitapCost * 2); // Increase cost by 50%
        document.getElementById("points").innerText = "ZT Coins: " + points;
        updateMultitapDisplay();
        saveGame(); // Save game after buying upgrade
    } else {
        alert("Not enough ZT Coins to buy Multitap!");
    }
}

// Function to update multitap display
function updateMultitapDisplay() {
    document.getElementById("multitap").innerText = "Multitap: " + multitapLevel + " (Cost: " + multitapCost + ")";
}

// Function to save game using local storage
function saveGame() {
    localStorage.setItem("points", points);
    localStorage.setItem("multitapLevel", multitapLevel);
    localStorage.setItem("multitapCost", multitapCost);
    updateMultitapDisplay(); // Update the display after saving to ensure the correct cost is shown
}
