const URL="https://covid19.mathdro.id/api";


let app=angular.module('MyApp',[]);
app.controller('MyCtrl',($scope,$http) => {

    $scope.title="STAY HOME STAY SAFE";

    console.log("App Loaded")

    //CALLING API 

$http.get(URL).then( 
(response)=>{  
    //Sucess
   
    console.log(response.data);

    $scope.all_data=response.data;


},


(error)=>{

//ERROR
console.log(error);

}
);

//Getcountry Data
$scope.get_c_data = () => {
     let country=$scope.c;
     if(country == "")

     {
         $scope.c_data=undefined;
         return ;
     }

     $http.get(`${URL}/countries/${country}`).then((response)=>{
         console.log(response.data)
         $scope.c_data=response.data;

     },
     
     (error)=>{
         console.log(error);



     })


};



     
});