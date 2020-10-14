function advanceSearch() {
    var x = document.getElementById("dateDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function showBenefitDiv() {
    var x = document.getElementById("benefitDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}

function hideBenefitDiv() {
    var x = document.getElementById("benefitDiv");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
}

function showParticipantDiv() {
    var x = document.getElementById("participantDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}

function hideParticipantDiv() {
    var x = document.getElementById("participantDiv");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
}