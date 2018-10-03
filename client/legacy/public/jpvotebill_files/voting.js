var socket = io();

$(function() {
	// Add onClicks for buttons
	$("#start-btn").click(function() {
		createVoteEntry();
	});

	$("#yes-btn").click(function() {
		addVote("yeas");
	})

	$("#no-btn").click(function() {
		addVote("nays");
	})

	$("#abstain-btn").click(function() {
		addVote("abstains");
	})

	getVotes();
})

// When socket emits "voted", run getVotes
socket.on("voted", getVotes);

// Changes text based on yeas, nays, abstains
function getVotes() {
	$.get("http://localhost:8081/bill_vote", (data) => {
		$("#yeas").text(data["yeas"]);
		$("#nays").text(data["nays"]);
		$("#abstains").text(data["abstains"]);

	});
}

// Changes number of yeas, nays, abstains in database
function addVote(option) {
	$.post("http://localhost:8081/votes/"+option);
}

// Create database entry in bill_votes
function createVoteEntry() {
	$.post("http://localhost:8081/create_votes");
}