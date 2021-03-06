$(document).ready(() => {
    const labels = [
        'Week 1',
        'Week 2',
        'Week 3',
        'Week 4'
    ];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Bench Press',
            data: [95, 105, 115, 120],
            backgroundColor: 'rgb(66, 135, 245)',
            borderColor: 'rgb(66, 135, 245)'
    
        }, {
            label: 'Deadlift',
            data: [135, 145, 150, 165],
            backgroundColor: 'rgb(75, 245, 66)',
            borderColor: 'rgb(75, 245, 66)'
    
        }, {
            label: 'Shoulder Press',
            data: [45, 45, 55, 65],
            backgroundColor: 'rgb(239, 245, 66)',
            borderColor: 'rgb(239, 245, 66)'
        }, {
            label: 'Squat',
            data: [135, 155, 155, 160],
            backgroundColor: 'rgb(247, 64, 64)',
            borderColor: 'rgb(247, 64, 64)'
        }]
    
    };

    const plugin = {
        id: 'custom_canvas_background_color',
        beforeDraw: (chart) => {
          const ctx = chart.canvas.getContext('2d');
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        }
      };
    
    const config = {
        type: 'line',
        data: data,
        plugins: [plugin],
        options: {}
    };
    
    const strengthChart = new Chart(
        document.getElementById('strengthChart'),
        config
    );
})