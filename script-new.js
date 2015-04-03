$(document).ready(function(){
	$('#menu').slicknav();
});

$(document).ready(function(){
  
  
    $('#pie-chart-sources').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Sources of energy'
        },
	subtitle: {
            text: 'in 2013'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Sources of energy',
            data: [
                ['Petroleum (oil)',   36],
                ['Natural gas', 27],
		['Coal', 19],
                ['Nuclear',    8],
                ['Renewable energy',     10],
                
            ]
        }]
    });
    
     $('#pie-chart-uses').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Uses of energy'
        },
	subtitle: {
            text: 'in 2013'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: 'Uses of energy',
            data: [
                ['Transportation',   28],
                ['Industrial', 22],
		['Residential and commercial', 11],
                ['Electric power',    39],
                
                
            ]
        }]
    });
});

var Solar = [];
var Wind = [];
var Geothermal =[];
var Wood = [];
var OtherBiomass = [];


    $(document).ready(function(){
	
        
        $.ajax({
		type: "GET",
		url: "energy-sources-new.xml",
		dataType: "xml",
		success: parseXML
		});
	
	
	function parseXML(xml) { 
                            
        
                        $(xml).find('year').each(function(){ //starts loop to find all people, etc
                            //console.log("once for every person");
                            var $sources = $(this); 
                            var sourceType = $sources.attr("name");
                            var description = $sources.find('description').text();
                            var imageurl = $sources.attr('imageurl');
			    
                            Solar.push(parseInt($sources.find('Solar').text())); //parseInt is a function that says turn this text into an integer. Push adds the data to the back of each one so that order makes sense. Pop goes to the front.
			    Wind.push(parseInt($sources.find('Wind').text()));
			    Geothermal.push(parseInt($sources.find('Geothermal').text()));
			    Wood.push(parseInt($sources.find('Wood').text()));
			    OtherBiomass.push(parseInt($sources.find('OtherBiomass').text()));
                    
                });
	
                console.log(Wind);
		console.log(Solar);
		
                buildChart(); //finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
        }
	
	
	
  function buildChart(xml){
    
	var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart',
            type: 'line'
        },
        title: {
            text: 'Net generation of renewable sources of energy'
        },
        xAxis: {
            categories: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
            crosshair: true
        },
        yAxis: {
            title: {
                text: 'Energy in thousand megawatt hours',
		 
            }
        },
        series: [{
            
	  name: 'Wind',
	  data: Wind
	    
	},{
	  name: 'Solar',
	  data: Solar
	
	},{
	  name: 'Geothermal',
	  data: Geothermal
	
	},{
	  name: 'Wood',
	  data: Wood
	
	},{
	  name: 'OtherBiomass',
	  data: OtherBiomass

	          }]
                });
	
	

                }	
        });
      	

var coal = [];
var other_renewables = [];
var nuclear = [];
var natural_gas = [];



    $(document).ready(function(){
	
        
        $.ajax({
		type: "GET",
		url: "all-energy-sources.xml",
		dataType: "xml",
		success: parseXML
		});
	
	
	function parseXML(xml) { 
                            
        
                        $(xml).find('year').each(function(){ //starts loop to find all people, etc
                            //console.log("once for every person");
                            var $sources = $(this); 
                            var sourceType = $sources.attr("name");
                            var description = $sources.find('description').text();
                            var imageurl = $sources.attr('imageurl');
			    
                            coal.push(parseInt($sources.find('coal').text())); //parseInt is a function that says turn this text into an integer. Push adds the data to the back of each one so that order makes sense. Pop goes to the front.
			    other_renewables.push(parseInt($sources.find('other_renewables').text()));
			    nuclear.push(parseInt($sources.find('nuclear').text()));
			    natural_gas.push(parseInt($sources.find('natural_gas').text()));


                    
                });
	
                console.log(coal);
		console.log(other_renewables);
		
                buildChart(); //finally builds chart -- needs to be inside function but outside loop so it won't try to write the chart 100 times, etc.
        }
	
	
  function buildChart(xml){
    
	var chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart-2',
            type: 'line'
        },
        title: {
            text: 'Net generation for all sectors of energy'
        },
        xAxis: {
            categories: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
            crosshair: true
        },
        yAxis: {
            title: {
                text: 'Energy in thousand megawatt hours',
		 
            }
        },
        series: [{
            
	  name: 'coal',
	  data: coal
	    
	},{
	  name: 'other renewables',
	  data: other_renewables
	
	},{
	  name: 'nuclear',
	  data: nuclear
	},{
	  name: 'natural gas',
	  data: natural_gas
	

	          }]
                });
	
	

                }	
        });
      	


 /*$(function () {
    $('#pie-chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '2001: Net generation of energy for all sectors'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Percent of total energy',
            data: [
                ['coal',   50.83],
                ['petroleum liquid', 3.06],
                {
                    name: 'petroleum coke',
                    y: 0.27,
                    sliced: true,
                    selected: true
                },
                ['Natural gas',    17.06],
                ['Other gases',     0.24],
                ['Nuclear',  20.53],
		['Conventional hydroelectric', 5.79],
		['Other renewables', 1.89],
		['Other', 0.32]
            ]
        }]
    });
});

 
 $(function () {
    $('#pie-chart-2014').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '2014: Net generation of energy for all sectors'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Percent of total energy',
            data: [
                ['coal',   38.68],
                ['petroleum liquid', 0.46],
                {
                    name: 'petroleum coke',
                    y: 0.29,
                    sliced: true,
                    selected: true
                },
                ['Natural gas',    27.37],
                ['Other gases',     0.28],
                ['Nuclear',  19.44],
		['Conventional hydroelectric', 6.31],
		['Other renewables', 6.86],
		['Other', 0.31]
            ]
        }]
    });
});
  */
 
$(function () {
    $('#electricity').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Sources of U.S. electricity generation'
        },
        subtitle: {
            text: 'in 2013'
        },
        xAxis: {
            categories: [
                'Coal',
                'Natural gas',
                'Nuclear',
		'Petroleum',
                'Renewable'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Energy source',
            data: [39, 27, 19, 1, 13]

        }]
    });
});
 
$(document).ready(function() {
    $('#example').dataTable( {
	"ajax": 'chart.json',
	responsive: true,
	
    } );
} );