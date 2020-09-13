const errorH1=document.querySelector('main h1')
const errorp=document.querySelector('main p')
const table=document.querySelector('main table')

fetch('https://api.rootnet.in/covid19-in/notifications')
    .then(res=>res.json())
    .then(data=>{
        if(!data) {
            errorH1.textContent = 'Error'
            errorp.textContent = 'Error fetching the API'
            console.log(data)
        }
        else{
            data.data.notifications.forEach(notification=> {
                const tr = document.createElement('tr')
                const td1 = document.createElement('td')
                const td2 = document.createElement('td')
                const td3 = document.createElement('td')
                const link = document.createTextNode(notification.link)
                if (notification.title.includes('&nbsp;')) {
                    const title = document.createTextNode(notification.title)

                    td2.appendChild(title)
                    td3.appendChild(link)
                    tr.appendChild(td1)
                    tr.appendChild(td2)
                    tr.appendChild(td3)
                    table.appendChild(tr)
                } else {
                    const date = document.createTextNode(notification.title.slice(0, 10))
                    const title = document.createTextNode(notification.title.slice(10, notification.title.length))

                    td1.appendChild(date)
                    td2.appendChild(title)
                    td3.appendChild(link)
                    tr.appendChild(td1)
                    tr.appendChild(td2)
                    tr.appendChild(td3)
                    table.appendChild(tr)
                }
            })
        }
    })