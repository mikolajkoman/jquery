
$(function(){
  var li = $('nav').find('li').last().css('color', 'blue');
  console.log(li);
});
$(function(){
  
  $("ul").append("<li>Nowy element</li>")
  
  var firstItem = $('nav').find('li').first();
 
  console.log(firstItem.text());
  
  firstItem.css("color", "red")
 
 
});

$(function(){
	var span = $("span");
	span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css("color", "red");
	};
});
	var paragraphs = $("p");
paragraphs.each(function(index, element) {
	var button = "<button class='btn' data-tmp=' + index + '>Click me</button>"
$(element).append(button) 
});
$("button").click(function(){
	alert($(this).attr("data-tmp"));
});
});