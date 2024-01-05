window.onload=function(){
    fetchUser();
}
var userName;
var userGoal;
var userPic;
var userPas;
async function fetchUser(){
    try{
        let response = await axios.get('https://billapi-6373626296ec.herokuapp.com/members');
        for (let i = 0; i < response.data.length; i++) {
            if(response.data[i].member_id==1){
                userName=response.data[i].acc_name;
                userPas=response.data[i].password;
                userGoal=response.data[i].goal;
                userPic=response.data[i].picture;
              break;
            }
        }
    }catch (error) {
                          // 錯誤處理
     console.error('錯誤:', error);
    }
   
    }
    let UserJson={
      'member_id':1,
      'acc_name':"test2222",
      'password':"test",
      'goal':userGoal,
      'picture':userPic
  };
  console.log(userName)
  console.log(userPas)
    async function Setting(){
      var name=document.getElementById("userName").value
      console.log(name)
      var password=document.getElementById("newPassword").value
      console.log(password)
      if(name!=""){
        UserJson.acc_name=name;
        console.log(UserJson.acc_name)
      } 
      if(password!=""){
        UserJson.password=password;
      } 
      Change();
    }
    async function Change(){
    // 在這裡使用更新後的 expenseJSON 進行 POST 請求
      axios.put('https://billapi-6373626296ec.herokuapp.com/members/1', UserJson)
      .then(function (response) {
      // 成功處理回應
      fetchGoal();
      console.log('成功:', response.data);
      })
      .catch(function (error) {
      // 錯誤處理
      console.error('錯誤:', error);
      });
    }