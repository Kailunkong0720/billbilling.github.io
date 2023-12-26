let income_mon_data, income_year_data, expense_mon_data, expense_year_data;
// const expense_mon_data=[120,70,300,4000,100,1000,50,32500];
window.onload = function () {
  // Fetch data from the API for income
  fetch('https://billapi-6373626296ec.herokuapp.com/income')
      .then(response => response.json())
      .then(incomeData => {
        income_mon_data = updateChartForCurrentYear(incomeData);
        income_year_data  = updateChartForCurrentMon(incomeData);
        const totalIncomeMon = calculateTotalForCurrentMonth(incomeData);
        const totalIncomeYear = calculateTotalForCurrentYear(incomeData);
        console.log("Data Type of dataPricesForCurrentMonth:", typeof expense_mon_data);

          // Fetch data from the API for charge_item
          fetch('https://billapi-6373626296ec.herokuapp.com/chargeitem')
              .then(response => response.json())
              .then(chargeItemData => {
                expense_mon_data = updateChartForCurrentYear(chargeItemData);
                expense_year_data = updateChartForCurrentMon(chargeItemData);
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
                renderChart();
              })
              .catch(error => {
                  console.error('Error fetching charge_item data from API:', error);
              });
      })
      .catch(error => {
          console.error('Error fetching income data from API:', error);
      });
      fetchGoal();
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

function updateChartForCurrentMon(data) {
  const currentMonth = new Date().getMonth();
  const dataForCurrentMonth = data.filter(item => new Date(item.date).getMonth() === currentMonth);
  const dataPricesForCurrentMonth = dataForCurrentMonth.map(item => parseFloat(item.price));
  return Object.values(dataPricesForCurrentMonth);
}

function updateChartForCurrentYear(data) {
  const currentYear = new Date().getFullYear();
  const dataForCurrentYear = data.filter(item => new Date(item.date).getFullYear() === currentYear);
  const dataPricesForCurrentYear = dataForCurrentYear.map(item => parseFloat(item.price));
  return Object.values(dataPricesForCurrentYear);
}
var profits = [0,0,0,0,0,0,0,0,0,0,0,0];
var rev=0
for(let i=0;i<12;i++){
  profits[i]=(income_year_data[i]-expense_year_data[i]);
}
var rev=0;
for(let i =0;i<profits.length;i++){
  if(!isNaN(profits[i])){
    rev+=profits[i];
  }

}
var userGoal=null;
async function fetchGoal(){
  try{
      let response = await axios.get('https://billapi-6373626296ec.herokuapp.com/member');
      for (let i = 0; i < response.data.length; i++) {
          if(response.data[i].member_id==1){
            userGoal=response.data[i].goal;
          }
      }
  }catch (error) {
                        // 錯誤處理
   console.error('錯誤:', error);
  }
   Load_pic();
  }
  function Load_pic(){
    console.log(userGoal)                   
    var percent=document.getElementById("tree");
    console.log(percent)
    var p=rev/parseInt(userGoal);
    console.log(rev)
    console.log(p)
    if(rev == 0||isNaN(userGoal)||p < 0.25){
      percent.src="images/樹苗.png";
    }
    else if(p>=0.25&&p<0.5){
      percent.src="images/小樹.png"
    }
    else if(p>=0.5&&p<0.75){
      percent.src="images/中樹.png"
    }
    else{
      percent.src="images/大樹.jpg"
    }
  }
