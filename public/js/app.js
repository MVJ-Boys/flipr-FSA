const bm = bodymovin.loadAnimation({
    container: document.getElementById("hero-img"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../img/wash-your-hands.json",
});

const errorH1=document.querySelector('main h1')
const error=document.querySelector('main p')
const table=document.querySelector('main table')

fetch("https://api.rootnet.in/covid19-in/contacts")
    .then(res=>res.json())
    .then(data => {
        if(!data) {
            errorH1.textContent="Error fetching the API"
            error.textContent=data.error
        }
        else{
            data.data.contacts.regional.forEach(item=>{
                const tr=document.createElement('tr')
                const td1 = document.createElement('td')
                const td2 = document.createElement('td')

                const loc=document.createTextNode(item.loc)
                const ph=document.createTextNode(item.number)

                td1.appendChild(loc)
                td2.appendChild(ph)
                tr.appendChild(td1)
                tr.appendChild(td2)
                table.appendChild(tr)
            })
        }
    })