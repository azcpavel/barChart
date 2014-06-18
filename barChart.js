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

	var rand = Math.floor((Math.random() * 10000) + 1);

	/********Default Options*********/	
	options.ruleBorder 		= typeof options.ruleBorder 		!== 'undefined' ? options.ruleBorder 		: '#000000';
	options.ruleInnerBorder = typeof options.ruleInnerBorder 	!== 'undefined' ? options.ruleInnerBorder 	: '#335566';
	options.maxStep 		= typeof options.maxStep 			!== 'undefined' ? options.maxStep 			: 5;
	options.parentBar 		= typeof options.parentBar 			!== 'undefined' ? options.parentBar 		: '#778878';
	options.chieldBar 		= typeof options.chieldBar 			!== 'undefined' ? options.chieldBar 		: '#456655';
	options.labelColor 		= typeof options.labelColor 		!== 'undefined' ? options.labelColor 		: '#000000';
	options.captions 		= typeof options.captions 			!== 'undefined' ? options.captions 			: 'Figure: Comparison Bar Chart of '+data[0][2]+' with '+data[0][1];

   	
	$('#'+element_id).append('<div id="renderChart'+rand+'" style="width:100%;display:table;"></div>');
	$('#renderChart'+rand).append('<div style="width:100%;text-align:center;margin-bottom:20px;">'+
								'<span style="color:'+options.parentBar+';background:'+options.parentBar+';">....</span> ' +
								'<span style="color:#000;">'+data[0][1]+'</span> '+
								'<span style="margin-left:20px;color:'+options.chieldBar+';background:'+options.chieldBar+';height:5px;">....</span> '+
								'<span style="color:#000;">'+data[0][2]+'</span> '+
							'</div>')
	for (var i = 1; i < data.length; i++) {

		
			$('#renderChart'+rand).append(
					'<div style="display:table-row;">'+
						'<div style="width:20%;float:left;padding:5px 0;color:'+options.labelColor+';display:table-cell;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;-o-box-sizing: border-box;box-sizing: border-box;border-right:1px solid '+options.ruleInnerBorder+';">'+data[i][0]+'</div>'+ 
						'<div style="width:80%;float:left;padding:5px 0;display:table-cell">'+
							'<div style="width:'+(data[i][1] * (100 / (options.maxStep)))+'%;height:20px;background:'+options.parentBar+';"> <div style="width:'+(data[i][2] * 100 / data[i][1])+'%;height:20px;background:'+options.chieldBar+';"></div></div>'+
						'</div>'+
					'</div>');
		

	};

	$('#'+element_id).append(
		'<div id="renderChartRule'+rand+'" style="border-top:1px solid '+options.ruleBorder+';width:80%;float:right;'+options.ruleBorder+';">'+			
		'</div>'
		);	

	for (var i = 0; i < options.maxStep; i++) {
		if(i != options.maxStep-1)
			$('#renderChartRule'+rand).append(
				'<div style="height:15px;width:'+(100 / options.maxStep)+'%;float:left;">'+i+'</div>'
				);
		else
			$('#renderChartRule'+rand).append(
				'<div style="height:15px;width:'+(100 / options.maxStep)+'%;float:left;">'+i+'<div style="position:relative;float:right">'+(i + 1)+'</div></div>'
				);
	};

	$('#'+element_id).append('<div style="width:100%;text-align:center;margin-top:30px;">'+options.captions+'</div>');	

}
