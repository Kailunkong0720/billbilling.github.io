window.onload = function () {
    // Fetch data from the API for income
    fetch('https://billapi-6373626296ec.herokuapp.com/income')
        .then(response => response.json())
        .then(incomeData => {
            // Calculate total for the current month and year
            const totalIncomeMon = calculateTotalForCurrentMonth(incomeData);
            const totalIncomeYear = calculateTotalForCurrentYear(incomeData);

            // Fetch data from the API for charge_item
            fetch('https://billapi-6373626296ec.herokuapp.com/chargeitem')
                .then(response => response.json())
                .then(chargeItemData => {
                    // Calculate total for the current month and year
                    const totalChargeMon = calculateTotalForCurrentMonth(chargeItemData);
                    const totalChargeYear = calculateTotalForCurrentYear(chargeItemData);

                    // Update the HTML elements
                    var incomeMon = document.getElementById("total_mon_income");
                    incomeMon.innerHTML = "$" + totalIncomeMon;

                    var incomeYear = document.getElementById("total_year_income");
                    incomeYear.innerHTML = "$" + totalIncomeYear;

                    var chargeMon = document.getElementById("total_mon_expense");
                    chargeMon.innerHTML = "$" + totalChargeMon;

                    var chargeYear = document.getElementById("total_year_expense");
                    chargeYear.innerHTML = "$" + totalChargeYear;

                    // Update the charts
                    updateChart('myChartIncomeMon', 'Income Mon', [totalIncomeMon]);
                    updateChart('myChartIncomeYear', 'Income Year', [totalIncomeYear]);
                    updateChart('myChartExpenseMon', 'Expense Mon', [totalChargeMon]);
                    updateChart('myChartExpenseYear', 'Expense Year', [totalChargeYear]);
                })
                .catch(error => {
                    console.error('Error fetching charge_item data from API:', error);
                });
        })
        .catch(error => {
            console.error('Error fetching income data from API:', error);
        });
}

// Function to calculate total for the current month
function calculateTotalForCurrentMonth(data) {
    // Get the current month
    const currentMonth = new Date().getMonth();

    // Filter the data to include only entries for the current month
    const dataForCurrentMonth = data.filter(item => new Date(item.date).getMonth() === currentMonth);

    // Calculate the total for the current month
    const totalForCurrentMonth = dataForCurrentMonth.reduce((sum, item) => sum + parseFloat(item.price), 0);

    return totalForCurrentMonth;
}

// Function to calculate total for the current year
function calculateTotalForCurrentYear(data) {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Filter the data to include only entries for the current year
    const dataForCurrentYear = data.filter(item => new Date(item.date).getFullYear() === currentYear);

    // Calculate the total for the current year
    const totalForCurrentYear = dataForCurrentYear.reduce((sum, item) => sum + parseFloat(item.price), 0);

    return totalForCurrentYear;
}

// Function to update the chart
function updateChart(chartId, label, data) {
    var ctx = document.getElementById(chartId).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map((_, index) => index + 1),
            datasets: [{
                label: label,
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
