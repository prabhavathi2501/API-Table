const ApiUrl = "https://api.allorigins.win/raw?url=https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"


const table=document.createElement("table");
document.getElementById("main").append(table)
let maindata;




const populate=(data)=>{
    console.log(data)
let tablecontent=""
tablecontent += "<tr>"+Object.keys(maindata[0]).map(key=>`<th>${key.toUpperCase()}</th>`).join("")+'</tr>';
tablecontent +=data.map(val=>'<tr>'+Object.keys(data[0]).map(key=>`<td>${val[key]}</td>`).join("")+"</tr>").join("")
table.innerHTML=tablecontent
}


async function getdata(ApiUrl,callback){
    const res=await fetch(ApiUrl);
    const data=await res.json();
    maindata=data
    callback(data)

}
getdata(ApiUrl,populate)

document.getElementById("year").addEventListener("keyup",(event)=>{
    let year =event.target.value
    if(year>2000 && year<2024){
        const datarr=maindata.filter(val=>val.year==year)
        populate(datarr)
    }
})