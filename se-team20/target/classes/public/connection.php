<?php>
$echo "entered php";
$test = $_POST['test'];

$host = "ec2-23-20-168-40.compute-1.amazonaws.com";
$user = "fgltmkgurkvrcy";
$pswd = "db66c2b072423e5956ec608256cd4a64a56ac5d9c796065f5bcc08eaa90f38e4";
$dbnm = "d97j5rjcvk44a7";

$conn = @mysqli_connect($host,$user,$pswd,$dbnm) or die ("DB Connection Failed");
?>