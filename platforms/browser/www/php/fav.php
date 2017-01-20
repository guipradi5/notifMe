
<?php 

$u = $_POST['user'];
$f = $_POST['fav'];

$con = mysqli_connect('localhost','guillermopdl','48196652zwj','guillermopdl');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"guillermopdl");
$sql="UPDATE  `fav` SET  `fav` =  '".$f."' WHERE  `fav`.`mail` =  '".$u."' ;";
$result = mysqli_query($con,$sql);

if($result) {

    $answer = "Storing succesful";
	
}else{
	$answer = "Seems like there was an error, try with another username";
}
print($answer);
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
