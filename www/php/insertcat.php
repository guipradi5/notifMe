
<?php 

$u = intval($POST['user']);
$p = intval($POST['pass']);

$con = mysqli_connect('localhost','guillermopdl','48196652zwj','guillermopdl');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"guillermopdl");
$sql="INSERT INTO `".$dbTabla."` (`mail`, `pass`) VALUES ('".$u."', '".$p."');";
$result = mysqli_query($con,$sql);

while($row = mysqli_fetch_array($result)) {
    echo $row['mail'];
}

mysqli_close($con);















/*
require_once("conexion_pdo.php");

// Creamos el objeto 
$db = new Conexion();

$dbTabla='COSTUMERS'; 

$name = $_POST["name"];
$age = $_POST["age"];

$consulta = "INSERT INTO `".$dbTabla."` (`NAME`, `AGE`) VALUES ('".$name."', '".$age."');"; 

$result = $db->prepare($consulta);
$result->execute(array(":x" => $name, ":y"=>$age));
if (!$result)
 { 
	$answer= "fail";
 	
 } else {
	$answer= "success";
}

print($answer);
//Tancar connexio
$db=NULL;
*/
?>
