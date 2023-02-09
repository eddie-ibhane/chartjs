const ctx = document.getElementById('myChart');

const url = "data.json";

fetch(url)
.then((response) => response.json())
.then((result) => {  
  let date = result.financialreport[0].financials.map(data => data.date);
  let revenue = result.financialreport[0].financials.map(data => data.revenue);
  let expenses = result.financialreport[0].financials.map(data => data.expenses);
  let profits = result.financialreport[0].financials.map(data => data.profits);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: date,
      datasets: [{
        label: 'Revenue',
        data: revenue,
        borderColor: 'grey',
        borderWidth: 2
      },
      {
        label: 'Expenses',
        data: expenses,
        borderColor: 'red',
        borderWidth: 2
      },
      {
        label: 'Profits',
        data: profits,
        borderColor: 'green',
        borderWidth: 2
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
  
})
.catch(error => console.log('error', error));
