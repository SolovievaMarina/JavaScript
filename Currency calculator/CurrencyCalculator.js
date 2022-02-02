<meta charset="utf-8">
<script type="text/javascript">

	var roubles = prompt ("Введите сумму в рублях");
	var euro = 84.85
	var dollar = 75.05

	var rubToEuro = roubles / euro
	var rubToDollar = roubles / dollar

	alert (
			roubles + " рублей = " + rubToEuro.toFixed(2) + " евро \n" +
			roubles + " рублей = " + rubToDollar.toFixed(2) + " долларов " 
		);

	</script>