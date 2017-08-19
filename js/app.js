$(document).ready(function() {
    $('select').material_select();
});

function calculate() {
    let arrTrade = [];
    $('select').each(function() {
        let temp = $(this).find(":selected").text();
        if (temp.length > 1) {
            temp = 0;
        }
        arrTrade.push(temp);
    });
    let arrCard = [];
    $("input[type='checkbox']").each(function() {
        arrCard.push($(this).prop('checked'));
    });
    let result = 0;
    for (let i = 0; i < 5; i++) {
        let multi = parseInt(arrTrade[i]) + 1;
        let count = 0;
        let sum = -20;
        for (let j = 0; j < 9; j++) {
            let index = i * 9 + j;
            if (arrCard[index]) {
                count++;
                sum += (j + 2);
            }
        }
        sum *= multi;
        if (count + multi > 8 || (count == 0 && multi == 1)) {
            sum += 20;
        }
        result += sum;
    }
    alert(result);
}