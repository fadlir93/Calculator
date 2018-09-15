$("#btn_hasil").click(function(){
	//definisi variabel input user
	var angka1 = parseInt($("#angka1").val());
	var angka2 = parseInt($("#angka2").val());
	var operator = $("#operator").val();
	
	if (operator == "+"){
		var hasil = angka1 + angka2;
	}
	
	if (operator == "-"){
		var hasil = angka1 - angka2;
	}
	
	if(operator == "*"){
		var hasil = angka1 * angka2;
	}
	
	if(operator == "/"){
		var hasil = angka1 / angka2;
	}
	$("#hasil").val(hasil);       //jquery set hasil ke input box
});