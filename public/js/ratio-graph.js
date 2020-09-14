const arr = [];

fetch("/patients")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      arr.push(item);
    });
  });

const dataPoints = [];

arr.forEach((item) => {
  dataPoints.push({ x: item.reportedOn, y: parseInt(newAge) });
});

var chart = new CanvasJS.Chart("chart", {
  title: {
    text: "Some Title",
  },
  data: [
    {
      type: "line",
      dataPoints: setData(),
    },
  ],
});

const setData = () => {
  arr.forEach((item) => {
    dataPoints.push();
  });
};

// render.addEventListener("click", () => {
//   chart.render();
// });
