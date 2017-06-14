$(".search").focus();
jQuery.fn.removeClassExcept = function(val) {
    return this.each(function(index, el) {
        var keep = val.split(" "), // list we'd like to keep
            reAdd = [], // ones that should be re-added if found
            $el = $(el); // element we're working on
        // look for which we re-add (based on them already existing)
        for (var c = 0; c < keep.length; c++) {
            if ($el.hasClass(keep[c])) reAdd.push(keep[c]);
        }
        // drop all, and only add those confirmed as existing
        $el.removeClass() // remove existing classes
            .addClass(reAdd.join(' ')); // re-add the confirmed ones
    });
};
$(document).on('keyup', function(evt) {
    if (evt.keyCode == 27) {
        $(".secondul,.class-main,.class-2").removeClass("hover1 dropdown clicked");
    }
});
$(".class-main").click(function() {
    $(".secondul", this).toggleClass("dropdown");
    $(this).toggleClass("clicked");
});
$(".class-main").hover(function() {
    $(this).toggleClass("hover1");
    $(".secondul", this).toggleClass("tempdrop");
});
$(".class-2").hover(function() {
    $(this).toggleClass("hover2");
});
$(".mainul").mouseleave(function() {
    $(".class-main").removeClass("hover1 dropdown");
});
$(document).ready(function() {
    $.getJSON("https://api.coinmarketcap.com/v1/ticker/ethereum/", function(data) {
        $("#eth-usd").text(data[0].price_usd);
        $("#eth-btc").text(data[0].price_btc);
        var eth_diff = parseFloat(data[0].percent_change_24h);
        if (eth_diff > 0) {
            $("#eth_change").text(data[0].percent_change_24h + "%").css("color", "#36af42");
        } else {
            $("#eth_change").text(data[0].percent_change_24h + "%").css("color", "#ba551b");
        }
    });
});

$(".calculator").submit(function() {
    var v1 = parseFloat($("#v1").val());
    var v2 = parseFloat($("#v2").val());
    var difference = parseFloat(((v2 - v1) / (v1)) * 100).toFixed(3);
    if (difference > 0) {
        $("p.pdiff").fadeIn(200);
        $("#pstate").text('increased').css("color", "#36af42");
        $("#pdiff").text(difference);
    } else {
        $("p.pdiff").fadeIn(200);
        $("#pstate").text('decreased').css("color", "#ba551b");
        $("#pdiff").text(Math.abs(difference));
    }
});
$(".calculator").on("reset", function() {
    $("p.pdiff").fadeOut(200);
});