const ApiUrl="https://jsonplaceholder.typicode.com/users";

const table=document.createElement("table");
document.getElementById("main").append(table);

let maindata




const populate=(data)=>{
    console.log(data)
    let tablecontent="";
    tablecontent += "<tr>"+Object.keys(mainData[0]).map(key=>`<th>${key.toUpperCase()}</th>`).join("")+"</tr>"
    tablecontent +=data.map(val=>"<tr>"+Object.keys(data[0]).map(key=>`<td>${val[key]}</td>`).join("")+"</tr>").join("")
    table.innerHTML=tablecontent

}



async function getdata(ApiUrl,callback){
    const res= await fetch(ApiUrl)
    const data= await res.json();
    mainData=data
    callback(data)

}
getdata(ApiUrl,populate)

document.getElementById("searchname").addEventListener("keyup",(event)=>{

    const dataarr=mainData.filter((val)=>val.name.toLowerCase().startsWith(event.target.value))
   if(dataarr!=0) populate(dataarr)
    else populate(alert("Name is not match"))

})


