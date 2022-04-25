function count(){

    var y1 = 0.00196;
    var labt1e1 = document.getElementById('t1e1').value;
    var labt2e1 = document.getElementById('t2e1');
    labt2e1.value = labt1e1/y1;

    var labt1e2 = document.getElementById('t1e2').value;
    var labt2e2 = document.getElementById('t2e2');
    labt2e2.value = labt1e2/y1;
    
    var labt1e3 = document.getElementById('t1e3').value;
    var labt2e3 = document.getElementById('t2e3');
    labt2e3.value = labt1e3/y1;

    var labt1e4 = document.getElementById('t1e4').value;
    var labt2e4 = document.getElementById('t2e4');
    labt2e4.value = labt1e4/y1;

    var labt1e5 = document.getElementById('t1e5').value;
    var labt2e5 = document.getElementById('t2e5');
    labt2e5.value = labt1e5/y1;

    var labt1e6 = document.getElementById('t1e6').value;
    var labt2e6 = document.getElementById('t2e6');
    labt2e6.value = labt1e6/y1;

    var labt1e7 = document.getElementById('t1e7').value;
    var labt2e7 = document.getElementById('t2e7');
    labt2e7.value = labt1e7/y1;

    var labt1e8 = document.getElementById('t1e8').value;
    var labt2e8 = document.getElementById('t2e8');
    labt2e8.value = labt1e8/y1;

    var labt1e9 = document.getElementById('t1e9').value;
    var labt2e9 = document.getElementById('t2e9');
    labt2e9.value = labt1e9/y1;

    var labt1e10 = document.getElementById('t1e10').value;
    var labt2e10 = document.getElementById('t2e10');
    labt2e10.value = labt1e10/y1;

}

function g(){
    var y2 = document.getElementById('t1e2').value;
    var y10 = document.getElementById('t1e10').value;

    var g1 = document.getElementById('g1');
    var g2 = document.getElementById('g2');

    //g = 2yn/n2T2
    var g1ans = (2*y2)/(4*(0.02)**2);
    var g2ans = (2*y10)/(100*(0.02)**2);
    g1.value = g1ans;
    g2.value = g2ans;
}
function e(){

}
function deltag(){
    
}