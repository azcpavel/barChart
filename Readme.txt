barChart
========

Comparison Bar Chart, Bar Chart, Simple Bar Chart


Simple Bar chart just include jQuery js and call function on load

<script src="//code.jquery.com/jquery-latest.min.js"></script>

$(function(){
	var data = [
	['Name', 'Target', 'Current'],
	['First' , 5, 4],
	['Sec' , 4, 3],
	['Third' , 3, 0]
	];
	var options = {
		/*
		'ruleHeight' : '80px',
		'ruleBorder' : '#000000',
		'ruleInnerBorder' : '#335566',
		'maxStep' : 5,
		'parentBar' : '#778878',
		'chieldBar' : '#456655'
		*/

	};

	renderBarChart('chart',data,options);	
});
