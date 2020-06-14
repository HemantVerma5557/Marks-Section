/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.querySelector("#mySidenav").style.width = "250px";
  var a=document.querySelectorAll("#main");
  a.forEach(function(element){
    element.style.marginLeft = "250px";
  });
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.querySelector("#mySidenav").style.width = "0";
  var b=document.querySelectorAll("#main");
  b.forEach(function(element){
    element.style.marginLeft = "0px";
  });
}



	$("#custom-select").on("click", function() {
		$("#custom-select-option-box").toggle();
	});
	function toggleFillColor(obj) {
		$("#custom-select-option-box").show();
		if ($(obj).prop('checked') == true) {
			$(obj).parent().css("background", '#c6e7ed');
		} else {
			$(obj).parent().css("background", '#FFF');
		}
	}
	$(".custom-select-option").on("click", function(e) {
		var checkboxObj = $(this).children("input");
		if ($(e.target).attr("class") != "custom-select-option-checkbox") {
			if ($(checkboxObj).prop('checked') == true) {
				$(checkboxObj).prop('checked', false)
			} else {
				$(checkboxObj).prop("checked", true);
			}
		}
		toggleFillColor(checkboxObj);
	});

	$("body")
			.on(
					"click",
					function(e) {
						if (e.target.id != "custom-select"
								&& $(e.target).attr("class") != "custom-select-option") {
							$("#custom-select-option-box").hide();
						}
					});
