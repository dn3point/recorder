var total = 0;

function calculate() {
    let tradeId = $('input[name=trade]:checked').attr('id');
    let multi = parseInt(tradeId.substring(tradeId.length - 1)) + 1;
    let cards = $("input[type='checkbox']:checked");
    let result = 0;
    $("input[type='checkbox']:checked").each(function() {
        let cardId = $(this).attr('id');
        let card = parseInt(cardId.substring(cardId.length - 1));
        result += card;
    });
    if (cards.length > 0 || multi > 1) {
        result -= 20;
        result *= multi;
        if (cards.length + multi > 8) {
            result += 20;
        }
    }
    total += result;
    $('#result').text(total);
    clear();
}

function clear() {
    // TODO
    $('input[name=trade][id=card_0]').prop('checked', false);
    $("input[type='checkbox']").each(function() {
        $(this).prop('checked', false);
    });
}

$(document).keyup(function(e) {
    if (e.keyCode === 13) calculate(); // enter
    if (e.keyCode === 27) clear(); // esc
});