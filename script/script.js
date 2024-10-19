function insert(num) {
    document.form.visor.value += num;
}

function calc() {
    var res = document.form.visor.value;
    if (res) {
        document.form.visor.value = eval(res);
    }
}

function limpar() {
    document.form.visor.value = '';
}

function voltar() {
    var res = document.form.visor.value;
     document.form.visor.value = res.substring(0, res.length-1);
}