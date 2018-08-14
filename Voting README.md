# Voting

My goal was to implement the voting feature where the the speaker of the house would initialize voting, a bill would be presented, the representatives would vote, the speaker of the house would end voting, and the speaker would present the results.

I implemented this using JQuery, NodeJS, Express, and Socket.io

## jpvotebill.html
I created a simple page in the same format as the other jacketpages html files. I added buttons to test the functionality of "start voting", and adding different vote options. I also added text to display the number of yeas, nays, and abstains of the current bill. 

## voting.js
This file contains the on-click listeners that correspond to the buttons. 
* "createVoteEntry" sends a post request that creates an entry in the bill_votes table. 
* "getVotes" changes the elements in the h1 tags based on the number of yeas, nays, and abstains of the most recently created bill_votes entry.
* "addVote" sends a post request that adds a yea, nay, or abstain to the current bill_vote entry.
* The socket.on command calls getVotes whenever "voted" is emited, which happens whenever the bill_votes entry is changed.

## Contributions to main.js
I added three routes: create_votes, bill_vote, and votes with an "opt" parameter that indicates which option was voted for. 
* create_votes is a post request that calls an INSERT command into the bill_votes table. It also emits "voted" so that the text in the html file changes.
* bill_vote is a get request selects the row in bill_votes with the highest ID. 
* votes/:opt updates the bill_votes row with the highest id, adding whichever option was passed in.