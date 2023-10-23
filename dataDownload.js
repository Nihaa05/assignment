const btn = document.querySelector('.btn');
const myDataBtn = document.querySelector('.myDetailsButton');
const output = document.querySelector('.output');
const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';
const myData = {
    name :"Niharika Pendem",
    contact:"3616881729",
    Address:"Shores Apartments",
    Interests:"Reading, painting"
}
btn.onclick = ()=>{
    getData();
    
} 
myDataBtn.onclick = () => {
    getMyData()
}

function getMyData() {
    let html = ""
    for(const key in myData) {
        html += `<div>${key} : ${myData[key]}</div>`
    }
    document.querySelector(".myDetails").innerHTML = html
    const blob = new Blob([JSON.stringify(myData)], {type: "application/json"})
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob)
        link.download = 'myDetails.json'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
}
function getData(){
    fetch(url)
    .then(rep => rep.json())
    .then(data =>{
        outData(data);
        const blob = new Blob([JSON.stringify(data)], {type: "application/json"})
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob)
        link.download = 'data.json'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    })
    .catch(error => {
        console.error("there was a problem")
    })
}

function outData(val){
    console.log(val);
    let html ='';
    val.forEach((ele,ind) =>{
        console.log(ele);
        html += `<div>${ind+1}. ${ele.name} ${ele.language} (${ele.id})</div>`;
    })
    output.innerHTML = html;

}
