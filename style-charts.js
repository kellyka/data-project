Highcharts.theme = {
    colors: ['#3A3F31', '#4D5443', '#5F6854', '#828C7B', '#8E9B80', '#ADBCA2', 
             '#BACCAC', '#CBD8BA', '#DFE8CF'],
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 0, 0],
            stops: [
                [0, 'rgb(255, 255, 255)'],
                [1, 'rgb(240, 240, 255)']
            ]
        },
    },
    title: {
        style: {
            color: '#000',
            font: 'bold 20px "Myriad Pro Condensed", sans-serif',
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 12px "Myriad Pro", Verdana, sans-serif'
        }
    },

    legend: {
        itemStyle: {
            font: '9pt "Helvetica Neue", Verdana, sans-serif',
            color: 'black'
        },
        itemHoverStyle:{
            color: 'gray'
        }   
    }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);