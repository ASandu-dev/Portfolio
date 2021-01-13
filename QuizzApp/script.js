

const btn = document.getElementById("btn");


function getValue(){
    
    var licPlate = document.getElementById("licPlate").value;
    const url =`https://uk1.ukvehicledata.co.uk/api/datapackage/VehicleData?v=2&api_nullitems=1&auth_apikey=b5d7757f-da24-47e5-8cec-03caa133cf6c&user_tag=&key_VRM=${licPlate}`
    
    fetchCar();

   async function fetchCar(){
    const resp = await fetch(url);
    const respData = await resp.json();
    // const obj = JSON.parse("respData");

       



    console.log(respData);
}
}


