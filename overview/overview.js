const data = {
    labels: ['交通', '飲食', '娛樂'],
    datasets: [{
        data: [30, 40, 20], // 数据值
        backgroundColor: ['red', 'blue', 'green'] ,// 数据对应的颜色
        width:10
    }]
};

// 获取canvas元素
const ctx = document.getElementById('myPieChart').getContext('2d');

// 创建圆饼图
const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    const dataset = data.datasets[0];
                    const total = dataset.data.reduce((accumulator, currentValue) => accumulator + currentValue);
                    const currentValue = dataset.data[tooltipItem.index];
                    const percentage = Math.round((currentValue / total) * 100);
                    return `${data.labels[tooltipItem.index]}: ${percentage}%`;
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20 // 修改字体大小
                    }
                }
            }
        }
    }
});
var newDiv=document.getElementById("contain")
function add(){
    //newDiv = document.createElement("div");
    
    newDiv.innerHTML="早餐100";
    newDiv.style.border="solid 1px";
    newDiv.style.width="200px";
    newDiv.style.textAlign="center"
    //document.getElementById("detail").appendChild(newDiv);
}
function add2(){
    //newDiv = document.createElement("div");
    newDiv.innerHTML="晚餐100";
    newDiv.style.border="solid 1px";
    newDiv.style.width="200px";
    newDiv.style.textAlign="center"
    //document.getElementById("detail").appendChild(newDiv);
}
//add()
function chooseY(){
    document.getElementById("choose2").style.border="none"
    document.getElementById("choose1").style.border="solid 1px blue"
    //newDiv=document.getElementById("contain")
    //newDiv.innerHTML=""
    add()
}
function chooseM(){
    document.getElementById("choose1").style.border="none"
    document.getElementById("choose2").style.border="solid 1px blue"
    //newDiv=document.getElementById("contain")
    //newDiv.innerHTML=""
    
    add2()
}
