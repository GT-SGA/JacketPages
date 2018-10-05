# Users
Displays the first 50 users in the user table with their name, email, GT username, level, major, and year. 
  - can click on name to take to usersview page 
  - added major and year column to website and local database 
  - edit link at very right end of table to edit user 
  - add sga member and add user link on left nav 
  - displaying all the users crashes the website since no filtering or paging

# UsersAdd
Form to add user to user table 
  - empty form with fields for first name, last name, GT username, email, major, and year 
  - successfully adds to database and redirects to user page 

# UsersEdit
Form to edit a user 
  - autopopulates form fields (first name, last name, level, email, major, year) with user information 
  - changes submit to database then redirect to user page 

# UsersView
Displays the GT username and email of the clicked user
  - links on side to edit and delete user 
  - delete link deletes user from database but doesn't redirect

# SgaPeople
Displays all the people in the sga_people database with name, house, department, and status. 
  - click on name takes to usersview page 
  - edit link on right side of table 
  - add sga member link on left nav takes you to SgaPeopleSearch page 
  - no paging or filtering 

# SgaPeopleEdit
Form to edit a sga member in the sga_people database 
  - auto-populates fields (first name, last name, house, department, status) with sga member information 
  - submits edits to database and redirects to sgapeople page 

# SgaPeopleSearch 
Searches for user in the database
  - form with first and last name
  - clicking search populates a table underneath the form with the resulting users and a select link in each row 
  - clicking select links to SgaPeopleAdd page

# SgaPeopleAdd 
Form to add a user into sga_people table 
  - form autopopulates first name and last name fields
  - house and department fields available to be filled out
  - submit adds to database and redirects to sgapeople page 