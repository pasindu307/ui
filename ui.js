
document.addEventListener('DOMContentLoaded', () => {
    // Page navigation
    const links = document.querySelectorAll('.sidebar a');
    const pages = document.querySelectorAll('.page');

    links.forEach(link => {
        link.addEventListener('click', () => {
            pages.forEach(page => page.classList.add('hidden'));
            document.querySelector(link.getAttribute('href')).classList.remove('hidden');

            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Overview Chart
    const overviewCtx = document.getElementById('overviewChart').getContext('2d');
    new Chart(overviewCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Bookings',
                data: [120, 200, 150, 220, 300, 400],
                backgroundColor: '#3498DB'
            }]
        }
    });

    // Event Details Chart
    const detailsCtx = document.getElementById('detailsChart').getContext('2d');
    new Chart(detailsCtx, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4'],
            datasets: [{
                label: 'Ticket Sales',
                data: [50, 120, 180, 300],
                borderColor: '#2ECC71',
                fill: false
            }]
        }
    });

    // Insights Chart
    const insightsCtx = document.getElementById('insightsChart').getContext('2d');
    new Chart(insightsCtx, {
        type: 'pie',
        data: {
            labels: ['18-25', '26-35', '36-50', '50+'],
            datasets: [{
                label: 'Attendee Demographics',
                data: [40, 35, 15, 10],
                backgroundColor: ['#E74C3C', '#3498DB', '#2ECC71', '#F1C40F']
            }]
        }
    });
});
