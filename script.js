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


        
                        var html = '<dt> <img class="bioImage" alt="" src="' + imageurl + '" /> </dt>';
                        html += '<dd> <span class="loadingPic" alt="Loading" />';
                        html += '<p class="name">' + sourceType + '</p>';
                        html += '<p> ' + description + '</p>' ;
                        html += '</dd>';
            
                        $('dl').append($(html));
                        
                    
                });
	
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
            text: 'Sources of Energy'
        },
        xAxis: {
            categories: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
            crosshair: true
        },
        yAxis: {
            title: {
                text: 'Energy in thousand megawatt hours'
            }
        },
        series: [{
            
	  name: 'Solar',
	  data: Solar
	    
	},{
	  name: 'Wind',
	  data: Wind
	
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