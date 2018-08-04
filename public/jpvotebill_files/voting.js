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

// socket.on("voted", getVotes)

function getVotes() {
	// $.get("http://localhost:3000/votes", (data) => {
	// 	$("#votes1").text(data["opt1_votes"]);
	// 	$("#votes2").text(data["opt2_votes"]);
	// 	$("#votes3").text(data["opt3_votes"]);
	// });
	console.log("get Votes");
}

function addVote(option) {
	$.post("http://localhost:8081/votes/"+option);
}

function createVoteEntry() {
	$.post("http://localhost:8081/create_votes");
}