var ctx = document.querySelector("#myChart").getContext("2d");

var myChart = new Chart(ctx, {
    type: 'line',
    data: {},
    options: {
        tooltips: {
            enabled: false,
        },
        legend: {
            display: false
          }
      }
});

function chartt(){
     //F  ⟂ X
    var Pr1d1 = document.getElementById('r1d1').value;
    var Pr1d2 = document.getElementById('r1d2').value;
    var Pr1d3 = document.getElementById('r1d3').value;
    var Pr1d4 = document.getElementById('r1d4').value;
    
     //F  тр Y
    var Pr2d1 = document.getElementById('r2d1').value;
    var Pr2d2 = document.getElementById('r2d2').value;
    var Pr2d3 = document.getElementById('r2d3').value;
    var Pr2d4 = document.getElementById('r2d4').value;

    // alert(Pr2d3) 
    var ctx = document.querySelector("#myChart").getContext("2d");

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [0, Pr1d1, Pr1d2 ,Pr1d3, Pr1d4 ],
            datasets: [{
                label: "",
                data: [0, Pr2d1, Pr2d2, Pr2d3, Pr2d4],
                fill: true,
                backgroundColor: [
                    'transparent'
                ],
                borderColor:'rgb(99, 27, 103)'
            }]
        },
        options: {
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false
              }
          }
    });
}
function mu(){
    var fx = document.getElementById("fx").value;
    var fy = document.getElementById("fy").value;
    var mu = fy/fx;
    var formForMu = document.getElementById("formForMu");
    formForMu.value = mu;
}
function muMin(){
    var fx = document.getElementById("fxmin").value;
    var fy = document.getElementById("fymin").value;
    var muMin = fy/fx
    var formForMuMin = document.getElementById("formForMuMin")
    formForMuMin.value = muMin;
}
function deltaMu(){
    var mu = document.getElementById("formForMu").value;
    var muMin = document.getElementById("formForMuMin").value;
    var deltaMu = mu - muMin;
    var formDeltaMu = document.getElementById("formForDeltaMu");
    formDeltaMu.value = deltaMu;
}
function answer(){
    var mu = document.getElementById("formForMu").value;
    var deltaMu = document.getElementById("formForDeltaMu").value;
    
    var mu1 = document.getElementById("mu1");
    var mu2 = document.getElementById("mu2");

    mu1.value = mu;
    mu2.value = deltaMu;
}
function mu6(){
    var h = document.getElementById("h").value;
    var l = document.getElementById("l").value;
    //mu = h/((l**2 - h**2)**0.5)
    var mu = document.getElementById("mu6");
    mu.value = h/(l**2 - h**2)**0.5;
}
function e(){
    //е = (deltaH/h) + ((l * deltaL + h * deltaH)/( l**2 - h**2))
    var e = document.getElementById("e");
    var deltaH = 1;
    var h = document.getElementById("h").value;
    var l = document.getElementById("l").value;
    var deltaL = 1;
    e.value = (deltaH/h) + ((l * deltaL + h * deltaH)/( l**2 - h**2));
}