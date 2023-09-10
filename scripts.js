const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO <= 30 && DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
    let mantenimiento = Math.round(flujo / 24);
    FLU.innerHTML = "Volumen diario: " + flujo + " cc/hr";
    MAN.innerHTML =
      "mantenimiento: " +
      mantenimiento +
      " cc/hr<br>" +
      "m+m/2: " +
      parseInt(mantenimiento * 1.5) +
      "cc/hr";
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else if(DATO > 30){
        ERROR.style.display='none'
        let SC = ( (DATO * 4) + 7) / (DATO + 90);
        SC_1500 = Math.round(SC * 1500); 
        SC_2000 = Math.round(SC * 2000);
        FLU.style.display = 'none';
        MAN.innerHTML = 
        "Calculo SC 1500: " + SC_1500 
        + "<br>Calculo SC 2000: " + SC_2000;
        MAN.style.display = 'block';
    }
    else{
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})
function calcFlujo(kg){
    let volDia, res1, res2, res3;
  if (kg <= 30) {
    if (kg <= 10) volDia = kg * 100;
    else if (kg > 10 && kg <= 20) {
      res1 = 10 * 100;
      res2 = (kg - 10) * 50;
      volDia = res1 + res2;
    } else {
      res1 = 10 * 100;
      res2 = 10 * 50;
      res3 = (kg - 20) * 20;
      volDia = res1 + res2 + res3;
    }
    return volDia;
  }
}

