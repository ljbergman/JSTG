<?php

if (isset($_POST['fileContent'])) {

	$file = '../../questions.js';

	// Open the file to get existing content
	//$current = file_get_contents($file);

	$qcontent = $_POST['fileContent'];

	$qtest = "Test";

	// Write the contents back to the file
	//file_put_contents($file, $qtest);

	if(file_put_contents($file, $qcontent)) {
		header("Location: ../../index.html");
		die();
	} else { echo "Error!"; }


}

?>
