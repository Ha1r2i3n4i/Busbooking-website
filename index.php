<?php 
$n=$_POST['name']; 
$c=$_POST['phone']; 
$b=$_POST['email']; 

$con=mysqli_connect("localhost","root","","bus"); 
$sql="INSERT INTO customerdetails(customer_name,customer_phone,customer_email) values('$n','$c','$b')"; 
$r=mysqli_query($con,$sql);
 if($r) { 
echo " DETAILS ADDED SUCESSFULLY"; } 
else { echo "details not added"; } ?>