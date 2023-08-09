  /* Payment status background color change start */
  function bg_color () {
    let payment_status = document.querySelectorAll(".payment_status>span")
    console.log(payment_status);
    for (let i = 0; i < payment_status.length; i++) {
        if (payment_status[i].innerHTML === "접수") {
          payment_status[i].style.backgroundColor = "#ffd6d6"
        }else if (payment_status[i].innerHTML == "견적") {
          payment_status[i].style.backgroundColor = "#d5ebff"
        }else if (payment_status[i].innerHTML == "계약") {
          payment_status[i].style.backgroundColor = "#feeac6"
        }else if (payment_status[i].innerHTML == "진행중") {
          payment_status[i].style.backgroundColor = "#d5f8da"
        }else if (payment_status[i].innerHTML == "종료") {
          payment_status[i].style.backgroundColor = "#e7e7e7"
        }
    }
    }
    bg_color()
      /* Payment status background color change end */