let Container=document.querySelector(".Booking")
let Dashboard=document.querySelector(".Dashboard")
function dashboard(){
    Dashboard.classList.replace("d-none", "d-block");
    Container.classList.replace( "d-block","d-none" );
}

function Booking(){
    Container.classList.replace("d-none" ,"d-block");
    Dashboard.classList.replace( "d-block","d-none");
}
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1Pm', '2Pm', '3Pm', '4Pm', '5Pm', '6Pm','7Pm'],
      datasets: [{
        label: '',
        data: [15, 19, 10, 12, 8, 3,10],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  let ctX = document.getElementById('myChart1');

  new Chart(ctX, {
    type: 'line',
    data: {
      labels: ['7Pm', '9Pm', '11Pm', '1Pm', '3Pm', '65Pm','7Pm','9Pm'],
      datasets: [{
        label: '',
        data: [15, 19, 10, 12, 8, 3,10,8],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  