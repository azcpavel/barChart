/*
*	@Ahsan Zahid Chowdhury <azc.pavel@gmail.com>
*	@2014-06-16
*	@+880 1677 533818
*	@Comparison Bar Chart
*	@https://github.com/azcpavel/barChart
*	@1.0.1
*
*/
function renderBarChart(element_id,data,options) {

	/********Default Options*********/
	options.ruleHeight 		= typeof options.ruleHeight 		!== 'undefined' ? options.ruleHeight 		: '80px';
	options.ruleBorder 		= typeof options.ruleBorder 		!== 'undefined' ? options.ruleBorder 		: '#000000';
	options.ruleInnerBorder = typeof options.ruleInnerBorder 	!== 'undefined' ? options.ruleInnerBorder 	: '#335566';
	options.maxStep 		= typeof options.maxStep 			!== 'undefined' ? options.maxStep 			: 5;
	options.parentBar 		= typeof options.parentBar 			!== 'undefined' ? options.parentBar 		: '#778878';
	options.chieldBar 		= typeof options.chieldBar 			!== 'undefined' ? options.chieldBar 		: '#456655';

   	
	$('#'+element_id).append('<div id="renderChart" style="width:100%;display:table;"></div>');
	for (var i = 0; i < data.length; i++) {

		$('#renderChart').append(
				'<div style="display:table-row;">'+
					'<div style="width:20%;float:left;margin:5px 0;display:table-cell">'+data[i][0]+'</div>'+ 
					'<div style="width:80%;float:left;margin:5px 0;display:table-cell">'+
						'<div style="width:'+(data[i][1] * (100 / (options.maxStep)))+'%;height:20px;background:'+options.parentBar+';"> <div style="width:'+(data[i][2] * 100 / data[i][1])+'%;height:20px;background:'+options.chieldBar+';"></div></div>'+
					'</div>'+
				'</div>');
			
	};

	$('#'+element_id).append(
		'<div id="renderChartRule" style="margin:-22% 0 0 20%;height:'+options.ruleHeight+';border-left:1px solid '+options.ruleBorder+';border-bottom:1px solid '+options.ruleBorder+';">'+			
		'</div>'
		);

	for (var i = 1; i <= options.maxStep; i++) {
		$('#renderChartRule').append(
			'<div style="z-index:-1000;height:'+options.ruleHeight+';width:'+(100 / (options.maxStep))+'%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;-o-box-sizing: border-box;box-sizing: border-box;border-right:1px solid '+options.ruleInnerBorder+';float:left;"></div>'
			);
	};

	for (var i = 0; i < options.maxStep; i++) {
		if(i != options.maxStep-1)
			$('#renderChartRule').append(
				'<div style="height:15px;width:'+(100 / options.maxStep)+'%;float:left;">'+i+'</div>'
				);
		else
			$('#renderChartRule').append(
				'<div style="height:15px;width:'+(100 / options.maxStep)+'%;float:left;">'+i+'<div style="position:relative;float:right">'+(i + 1)+'</div></div>'
				);
	};	
	
}
