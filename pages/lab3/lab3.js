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

function chartt() {
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
            labels: [0, Pr1d1, Pr1d2, Pr1d3, Pr1d4],
            datasets: [{
                label: "",
                data: [0, Pr2d1, Pr2d2, Pr2d3, Pr2d4],
                fill: true,
                backgroundColor: [
                    'transparent'
                ],
                borderColor: 'rgb(99, 27, 103)'
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
function mu() {
    var fx = document.getElementById("fx").value;
    var fy = document.getElementById("fy").value;
    var mu = fy / fx;
    var formForMu = document.getElementById("formForMu");
    formForMu.value = mu;
}
function muMin() {
    var fx = document.getElementById("fxmin").value;
    var fy = document.getElementById("fymin").value;
    var muMin = fy / fx
    var formForMuMin = document.getElementById("formForMuMin")
    formForMuMin.value = muMin;
}
function deltaMu() {
    var mu = document.getElementById("formForMu").value;
    var muMin = document.getElementById("formForMuMin").value;
    var deltaMu = mu - muMin;
    var formDeltaMu = document.getElementById("formForDeltaMu");
    formDeltaMu.value = deltaMu;
}
function answer() {
    var mu = document.getElementById("formForMu").value;
    var deltaMu = document.getElementById("formForDeltaMu").value;

    var mu1 = document.getElementById("mu1");
    var mu2 = document.getElementById("mu2");

    mu1.value = mu;
    mu2.value = deltaMu;
}
function mu6() {
    var h = parseInt(document.getElementById("h").value);
    var l = parseInt(document.getElementById("l").value);
    //mu = h/((l**2 - h**2)**0.5)
    var mu = document.getElementById("mu6");
    mu.value = h / (l ** 2 - h ** 2) ** 0.5;
}
function e() {
    //е = (deltaH/h) + ((l * deltaL + h * deltaH)/( l**2 - h**2))
    var e = document.getElementById("e");
    var deltaH = 1;
    var h = parseInt(document.getElementById("h").value);
    var l = parseInt(document.getElementById("l").value);
    var deltaL = 1;
    e.value = (deltaH / h) + ((l * deltaL + h * deltaH) / (l ** 2 - h ** 2));
}
function deltaMu2() {
    //∆µ = µε
    var deltaMu = document.getElementById("deltaMu2");
    var mu = document.getElementById("mu6").value;
    var e = document.getElementById("e").value;
    deltaMu.value = mu * e;
}
function answer2() {
    //µ + ∆µ
    var ans = document.getElementById("answer2");
    var deltaMu = parseInt(document.getElementById("deltaMu2").value);
    var mu = parseInt(document.getElementById("mu6").value);
    ans.value = deltaMu + mu;
}
function compare() {
    var formForMu1 = document.getElementById("muForCompare1");
    var formForMu2 = document.getElementById("muForCompare2");

    var mu1 = document.getElementById("mu1").value + " ± " + document.getElementById("mu2").value;
    var mu2 = document.getElementById("answer2").value;
    formForMu1.value = mu1;
    formForMu2.value = mu2;
}