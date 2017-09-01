var count = 0;
var total = 0;
var game = 0;
var turn = 0;
var results = [0, 0];
var match = 0;
var matchString = "<tr><td>$MATCH$</td><td>$WINNER$</td></tr>";

function calculate() {
    if (count === 5) {
        alert("Cannot add more than 5 sets of cards!")
        return;
    } else {
        count++;
    }
    let tradeId = $('input[name=trade]:checked').attr('id');
    let multi = parseInt(tradeId.substring(tradeId.length - 1)) + 1;
    let cards = $("input[type='checkbox']:checked");
    let result = 0;
    $("input[type='checkbox']:checked").each(function() {
        let cardId = $(this).attr('id');
        let card = cardId.length === 6 ? parseInt(cardId.substring(cardId.length - 1)) : parseInt(cardId.substring(cardId.length - 2));
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
    if (turn === 0) {
        results[0] += total;
        $("#g_" + game).text(total);
    } else {
        results[1] += total;
        $("#n_" + game).text(total);
    }
    clear();
}

function clear() {
    $("#trade_0").prop("checked", true);
    $("input[type='checkbox']").each(function() {
        $(this).prop('checked', false);
    });
}

$("#new_btn").click(function() {
    clear();
    $('#result').text('');
    count = 0;
    total = 0;
    if (turn === 0) {
        turn = 1;
        $("#n_" + game).text(0);
    } else {
        turn = 0;
        if (game === 3) {
            game = 1;
            let winner = results[0] >= results[1] ? "Ge Ge" : "Niu Niu";
            $("#tb_all").append(matchString.replace("$MATCH$", match).replace("$WINNER$", winner));
            results = [0, 0];
            match++;
            for (let i = 1; i <= 3; i++) {
                $("#g_" + i).text('');
                $("#n_" + i).text('');
            }
            $("#g_" + game).text(0);
            updateGameMatchString();
            confirm("Winner is " + winner + "! Start a new match!");
        } else {
            game++;
            $("#g_" + game).text(0);
            updateGameMatchString();
        }
    }
});

function createGame() {
    $("#btn_game").hide();
    $("form").show();
    $("table").show();
    $("h6").show();
    match = 1;
    game = 1;
    updateGameMatchString();
}

function updateGameMatchString() {
    $("#game").text(game);
    $("#match").text(match);
    $("#g_" + game).text(0);
}