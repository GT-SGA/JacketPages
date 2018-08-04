var socket = io();

$(function() {
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

socket.on("voted", getVotes);

function getVotes() {
	$.get("http://localhost:8081/bill_vote", (data) => {
		$("#yeas").text(data["yeas"]);
		$("#nays").text(data["nays"]);
		$("#abstains").text(data["abstains"]);

	});
	console.log("getting votes");
}

function addVote(option) {
	$.post("http://localhost:8081/votes/"+option);
}

function createVoteEntry() {
	$.post("http://localhost:8081/create_votes");
}