window.onload=function(){
    const expense_mon_data=[120,70,300,4000,100,1000,50,32500];
    const expense_year_data=[12500,35000,20000,10000,8000,15000,6000,7950,34510,175200,21000,10025];
    const income_mon_data=[176,1760,10000,1584,3520];
    const income_year_data=[20000,33400,30000,13500,21000,20000,14400,23520,24400,11760,11584,100000];
    var expense_mon=document.getElementById("total_mon_expense");
    var expense_year=document.getElementById("total_year_expense");
    var income_mon=document.getElementById("total_mon_income");
    var income_year=document.getElementById("total_year_income");
    var total_expense_mon=0;
    var total_expense_year=0;
    var total_income_mon=0;
    var total_income_year=0;
    for(let i=0;i<expense_mon_data.length;i++){
        total_expense_mon+=expense_mon_data[i];
        //console.log(total_expense_mon);
    }
    for(let i=0;i<expense_year_data.length;i++){
        total_expense_year+=expense_year_data[i];
        //console.log(total_expense_year);
    }
    for(let i=0;i<income_mon_data.length;i++){
        total_income_mon+=income_mon_data[i];
       //console.log(total_income_mon);
    }
    for(let i=0;i<income_year_data.length;i++){
        total_income_year+=expense_year_data[i];
       //console.log(total_income_year);
    }
    expense_mon.innerHTML="$"+String(total_expense_mon);
    expense_year.innerHTML="$"+String(total_expense_year);
    income_mon.innerHTML="$"+String(total_income_mon);
    income_year.innerHTML="$"+String(total_income_year);
}