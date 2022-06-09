function Time(){

    // Criar o objeto da classe Data
    var date = new Date()

    // Obter Hora
    var hora = date.getHours();
    // Obter Minuto
    var minuto = date.getMinutes();
    // Obter Segundo
    var segundo = date.getSeconds()

    hora = update(hora);
    minuto = update(minuto);
    segundo = update(segundo);

    // Adiciona o elemento na div
    document.getElementById("relogio-digital").innerHTML = hora + ":" + minuto + ":" + segundo;

    setTimeout(Time, 1000)

}

function update(t){
    if(t < 10){
        return "0" + t;
    } else {
        return t;
    }
}

Time();

