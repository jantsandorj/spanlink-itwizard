/* pie chart start */
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
/* pie chart end */

/* Side menu start */
function openNav() {
  document.getElementById("side_menu").style.width = "100%";
  document.getElementById("close_btn").style.display = "block";
}
function closeNav() {
  document.getElementById("side_menu").style.width = "0";
  document.getElementById("close_btn").style.display = "none";
}
/* Side menu end */

/* Pie chart number counter start */
var speed = 10;
function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = document.getElementById(id).innerHTML.split("", 2).join("");
  incNbrRec(0, endNbr, elt);
}
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = `${i}<p>%</p>`;
    setTimeout(function () {
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}
/* Pie chart number counter end */

/* Card number counter start */
function cardEltNbr(id) {
  card_elt = document.getElementById(id);
  card_endNbr = document.getElementById(id).innerHTML.split("", 5);
  delete_nan = card_endNbr.splice(1, 1);
  nbrs = card_endNbr.join("").toLocaleString("en-US");
  card_incNbrRec(0, nbrs, card_elt);
}
function card_incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    const result = i.toLocaleString("en-US");
    elt.innerHTML = `${result}<span>건</span>`;
    setTimeout(function () {
      card_incNbrRec(i + 10, endNbr, elt);
    }, 10);
  }
}

/* Card number counter end */

/* Counter on scrol down start */
const container = document.getElementById("dashboard");
let activated = false;
window.addEventListener("scroll", function () {
  if (
    this.scrollY > container.offsetTop - container.offsetHeight - 200 &&
    activated === false
  ) {
    console.log(container.offsetTop);
    console.log(this.scrollY);
    cardEltNbr("card_nbr_1");
    cardEltNbr("card_nbr_2");
    cardEltNbr("card_nbr_3");
    incEltNbr("percent_1");
    incEltNbr("percent_2");
    incEltNbr("percent_3");
    activated = true;
  } else if (
    this.scrollY < container.offsetTop - container.offsetHeight - 500 ||
    (this.scrollY === 0 && activated === true)
  ) {
    activated = false;
  }
});
/* Counter on scrol down start */
