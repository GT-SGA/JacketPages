<?php
   //php7 tested 
   //replace db, user and password
   $link = mysqli_connect("localhost", "localuser", "password", "jacketpages_dev");
 
  // did we connected?
  if (!$link) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
   }
 
  // run some query
   $query = "SELECT * FROM jacketpages_dev";
   $result = mysql_query($query);
 
   while ($line = mysql_fetch_array($result))
   {
      foreach ($line as $value)
       {
         print "$value\n";
      }
   }
 
    mysqli_close($link);
?>
