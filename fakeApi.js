const ApiUrl="https://fakestoreapi.com/products";
 //const ApiUrl4="https://jsonplaceholder.typicode.com/users"
// const ApiUrl2="https://thecocktaildb.com/api/json/v1/1/search.php?f=b"


// const ApiUrl="https://dog.ceo/api/breeds/list/all";
   
const table =document.createElement("table");
document.getElementById("main").append(table);

let mainData

const populate=(data)=>{
console.log(data)
let tablecontent="";
tablecontent += '<tr>'+Object.keys(mainData[0]).map(key=>`<th>${key.toUpperCase()}</th>`).join("")+'</tr>'
tablecontent += data.map(val=>'<tr>'+Object.keys(data[0]).map(key=>`<td>${val[key]}</td>`).join("")+'</tr>').join("")
table.innerHTML=tablecontent
 }


async function getdata(ApiUrl,callback){
const res=await fetch(ApiUrl);
const data=await res.json();
mainData=data
callback(data)

}
getdata(ApiUrl,populate)

document.getElementById("searchname").addEventListener("keyup",(event)=>{
    const dataarr=mainData.filter((val)=>val.title.toLowerCase().startsWith(event.target.value))
       if(dataarr!=0) populate(dataarr)
        else(populate(
    alert("here data is not match")))
    })

    document.getElementById("year").addEventListener("keyup",(event)=>{
        const price=event.target.value
        // const filterprice=mainData.filter((val)=>val.price==price)
        if(price>0 && price<1000){
            const filterprice=mainData.filter((val)=>val.price==price)
        
        populate(filterprice)
        }
    })