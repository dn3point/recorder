$(document).ready(function() {
    $('select').material_select();
});

function calculate() {
    let arrTrade = [];
    $('select').each(function() {
        let temp = $(this).find(":selected").text();
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

function clear() {
    $('select').each(function() {
        $(this).val('0');
    });
    $('select').material_select();
    $("input[type='checkbox']").each(function() {
        $(this).prop('checked', false);
    });
}

$(document).keyup(function(e) {
    if (e.keyCode === 13) calculate(); // enter
    if (e.keyCode === 27) clear(); // esc
});