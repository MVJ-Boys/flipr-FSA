const errorH1 = document.querySelector("main h1");
const errorp = document.querySelector("main p");
const table = document.querySelector("main table");

fetch("https://api.rootnet.in/covid19-in/notifications")
  .then((res) => res.json())
  .then((data) => {
    if (!data) {
      errorH1.textContent = "Error";
      errorp.textContent = "Error fetching the API";
      console.log(data);
    } else {
      data.data.notifications.forEach((notification) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const a = document.createElement("a");
        const link = document.createTextNode(notification.link);
        const linkText = notification.link.slice(0, 35);
        if (notification.title.includes("&nbsp;")) {
          const title = document.createTextNode(notification.title);

          td2.appendChild(title);
          td3.appendChild(a); //<td><a href = "the actual link">link </a></td>
          a.appendChild(document.createTextNode(linkText));
          a.setAttribute("href", link);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(a);
          table.appendChild(tr);
        } else {
          const date = document.createTextNode(notification.title.slice(0, 10));
          const title = document.createTextNode(
            notification.title.slice(10, notification.title.length)
          );

          td1.appendChild(date);
          td2.appendChild(title);
          td3.appendChild(a);
          a.appendChild(document.createTextNode(linkText + "...."));
          a.setAttribute("href", link.textContent);
          a.setAttribute("target", "_");
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(a);
          table.appendChild(tr);
        }
      });
    }
  });
