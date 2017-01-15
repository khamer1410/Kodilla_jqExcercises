$(function() {
	var pokazTablice = $('body').find('div');
	console.log(pokazTablice);
	console.log(pokazTablice[2]);
});


//czy pakowac to w function?
$(function() {
	var span = $('span');
	span.each(function(index, element) {
		if (index % 2 === 0) {
			$(element).css('color', 'red');
		};
	});
});

//opcja 2
// $("span:odd").css('color','blue');

var paragraphs = $('p');
paragraphs.each(function(index, element) {

	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
	$(element).append(button);

});//czemu na przykłądzie w Kodilla są takie wolne linijki i brak wcięć w kodzie? '+ index +' co to za konstrukcja?

$('button').click(function(){
	alert($(this).attr("data-tmp"));
});