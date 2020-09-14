const errorH1 = document.querySelector("main h1");
const errorp = document.querySelector("main p");
const table = document.querySelector("main table");

fetch("https://api.rootnet.in/covid19-in/hospitals/beds")
  .then((res) => res.json())
  .then((data) => {
    if (!data) {
      errorH1.textContent = "Error";
      errorp.textContent = "Error fetching the API";
      console.log(data);
    } else {
      data.data.regional.forEach((regionals) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const td7 = document.createElement("td");

        const stateName = document.createTextNode(regionals.state);
        const ruralHospitals = document.createTextNode(
          regionals.ruralHospitals
        );
        const ruralBeds = document.createTextNode(regionals.ruralBeds);
        const urbanHospitals = document.createTextNode(
          regionals.urbanHospitals
        );
        const urbanBeds = document.createTextNode(regionals.urbanBeds);
        const totalHospitals = document.createTextNode(
          regionals.totalHospitals
        );
        const totalBeds = document.createTextNode(regionals.totalBeds);

        td1.appendChild(stateName);
        td2.appendChild(ruralHospitals);
        td3.appendChild(ruralBeds);
        td4.appendChild(urbanHospitals);
        td5.appendChild(urbanBeds);
        td6.appendChild(totalHospitals);
        td7.appendChild(totalBeds);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        table.appendChild(tr);
      });
    }
  });
