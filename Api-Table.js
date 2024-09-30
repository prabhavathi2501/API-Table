//console.log("god")
// const ApiUrl1="https://cors-anywhere.herokuapp.com/gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json";
// const ApiUrl="https://cors-anywhere.herokuapp.com/https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"
const ApiUrl = "https://api.allorigins.win/raw?url=https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"

const table = document.createElement("table");
document.getElementById("main").append(table);
let mainData ={}




const populated = (data) => {
    console.log(data);
    let tablecontent = "";
    tablecontent += '<tr>' + Object.keys(mainData[0]).map(key => `<th>${key.toUpperCase()}</th>`).join("") + '</tr>'
    tablecontent += data.map(val => '<tr>' + Object.keys(data[0]).map(key => `<td>${val[key]}</td>`).join("") + "</tr>").join("")

    table.innerHTML = tablecontent

}


async function getdata(ApiUrl, callback) {

    const res = await fetch(ApiUrl)
    const data = await res.json();
    mainData = data
    callback(data)

}
getdata(ApiUrl, populated)


document.getElementById("year").addEventListener("keyup", (e) => {
    const year = e.target.value
    if (year > 2000 && year < 2024) {
        const filterdata = mainData.filter(val => val.year == year)
        populated(
            filterdata
        )

    }

})

document.getElementById("searchname").addEventListener("keyup",(event)=>{
    const dataarr=mainData.filter((val)=>val.title.toLowerCase().startsWith(event.target.value))
    populated(dataarr)

})

