
const ctx = document.getElementsByClassName("my_chart");
new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        backgroundColor: ["rgb(223,223,223)", "rgb(51,153,254)"],
        data: [15, 85],
        borderWidth: 1,
      },
    ],
  },
  options: {
    cutout: "78%",
    responsive: true,
  },
});

const ctx1 = document.getElementsByClassName("my_chart1");
new Chart(ctx1, {
  type: "doughnut",
  data: {
    datasets: [
      {
        backgroundColor: ["rgb(223,223,223)", "rgb(119,116,255)"],
        data: [30, 70],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  },
  options: {
    cutout: "78%",
  },
});

const ctx2 = document.getElementsByClassName("my_chart2");
new Chart(ctx2, {
  type: "doughnut",
  data: {
    datasets: [
      {
        backgroundColor: ["rgb(223,223,223)", "rgb(41,206,138)"],
        data: [37, 63],
        borderWidth: 1,
      },
    ],
  },
  options: {
    cutout: "78%",
  },
});

function openNav() {
  document.getElementById("side_menu").style.width = "60%";
  document.getElementById("close_btn").style.display = "block";
}

function closeNav() {
  document.getElementById("side_menu").style.width = "0";
}