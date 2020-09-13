const errorH1 = document.querySelector("main h1");
const errorp = document.querySelector("main p");
const table = document.querySelector("main table");

fetch("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")
  .then((res) => res.json())
  .then((data) => {
    if (!data) {
      errorH1.textContent = "Error";
      errorp.textContent = "Error fetching the API";
      console.log(data);
    } else {
      data.data.medicalColleges.forEach((medicalCollege) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
          const state = document.createTextNode(medicalCollege.state);
          const name = document.createTextNode(medicalCollege.name);
          const city = document.createTextNode(medicalCollege.city);
          const ownership = document.createTextNode(medicalCollege.ownership);
          const admissionCapacity = document.createTextNode(medicalCollege.admissionCapacity);
          const hospitalBeds = document.createTextNode(medicalCollege.hospitalBeds);

          td1.appendChild(state);
          td2.appendChild(name);
          td3.appendChild(city);
          td4.appendChild(ownership);
          td5.appendChild(admissionCapacity);
          td6.appendChild(hospitalBeds);
          
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          tr.appendChild(td5);
          tr.appendChild(td6);
          table.appendChild(tr);
        
      });
    }
  });
