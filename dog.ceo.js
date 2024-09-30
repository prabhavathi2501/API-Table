const ApiUrl="https://dog.ceo/api/breeds/list/all";
let data;
async function getdata(){

    const res=await fetch(ApiUrl);
     data=await res.json();
     data=data.message;
    populate("")

}
getdata()

const inputele=document.createElement("input");
inputele.type="text"
const body=document.getElementsByTagName("body")[0]
body.append(inputele)

inputele.addEventListener("keyup",(event)=>{
    populate(event.target.value)

})



const table=document.createElement("table");
body.appendChild(table);





const populate=(searchtext)=>{
    console.log(data)

    table.innerHTML="";
    let data1=Object.keys(data);
    if(searchtext)
        data1=data1.filter(val=>val.startsWith(searchtext.toLowerCase()))

    for(let i of data1){
        const tr=document.createElement("tr");
        const td=document.createElement("td");
        const td1=document.createElement("td1");
        td.innerHTML=i.toUpperCase();
        td1.innerHTML=data[i].join().toUpperCase();
        tr.append(td,td1);
        table.append(tr)
    }
    
    

}