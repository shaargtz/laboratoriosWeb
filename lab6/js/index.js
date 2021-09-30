$(".agregar").on("click", function(e) {
    e.preventDefault();

    var itemText = $("#newText")

    var item = $("<p>");
    item.attr("class", "itemShop")
    item.text(itemText.val())

    var check = $("<button>")
    check.attr("class", "checar")
    check.text("check")

    var del = $("<button>")
    del.attr("class", "del")
    del.text("delete")

    var div = $("<div>")
    div.attr("class", "lis")
    div.append(item)
    div.append(check)
    div.append(del)

    var list = $(".Lista")
    list.append(div)

    itemText.val("")
});

$(".Lista").on("click", ".checar", function(e) {
    var parent = $(this).parent();
    parent.toggleClass("chec");
})

$(".Lista").on("click", ".del", function(e) {
    var parent = $(this).parent();
    parent.remove();
})