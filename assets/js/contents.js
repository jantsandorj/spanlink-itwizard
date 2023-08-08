
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
  document.getElementById("close_btn").style.display = "none";
}


var speed = 10;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
  elt = document.getElementById(id)
  endNbr = document.getElementById(id).innerHTML.split("",2).join("")
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = `${i}<p>%</p>`;
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}
incEltNbr("percent_1")
incEltNbr("percent_2")
incEltNbr("percent_3")

var set_speed = 1;
function cardEltNbr(id) {
  card_elt = document.getElementById(id)
  card_endNbr = document.getElementById(id).innerHTML.split("",5)
  delete_nan = card_endNbr.splice(1,1)
  nbrs = card_endNbr.join("").toLocaleString('en-US')
  card_incNbrRec(0, nbrs, card_elt);
  console.log(nbrs);
  // console.log(new_ar);
}

/*A recursive function to increase the number.*/
function card_incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    const result = i.toLocaleString('en-US');
    elt.innerHTML = `${result}<span>건</span>`;
    setTimeout(function() {//Delay a bit before calling the function again.
      card_incNbrRec(i + 10, endNbr, elt);
    }, 10);
  }
}
cardEltNbr("card_nbr_1")
cardEltNbr("card_nbr_2")
cardEltNbr("card_nbr_3")