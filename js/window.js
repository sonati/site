$("#contacts").on("click", function() {
	$(".window").addClass("active");
    $(".one").addClass("no-hidden");
});

$("#back").on("click", function() {
	$(".window").removeClass("active");
    $(".one").removeClass("no-hidden");
});