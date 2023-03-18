function vaiGanharOEmprego (qttDias){
    if(qttDias >= 14) {
        return false;
    } else {
        return true;
    }
}

const ganhou = vaiGanharOEmprego(14)
console.log(ganhou)