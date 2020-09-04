var quotes = [
	'" With the new day comes new strength and new thoughts"',
	'" Once you replace negative thougths with positive ones, you\'ll start having positive results "',
	'" At one point in your life,you either have the things you want ar the reasons why you don\'t "',
	'" The sky isn\'t always blue. Thw sun doesn\'t always shine.it\'s okay to fall apart sometimes.but always remember to get up again "',
	'" One way to remember is to remember who are your heroes "',
	'" The people who are crazy enough to think they can change the world are the ones who do "',
	'" All great thinkers are intially ridiculed- and eventually reversed "',
	'" Everything in your life is a reflection of a choice you have made. If you want a different result, make a different choices "',
	'" Success is going from failure to failure without losing enthusiam "',
	'" Success in life could be defined as the continued expansion of hapiness and the progressive realization of worthy goals "',
	'" Success is doing ordinary things extrordinary well "',
	'" Success is focusing the full power of all you are on what you have a burning desire to achieve "',
	'" Success is one percent inspiration, ninety-nine percent prespiration "',
	'" Act as though it is impossible to fail "',
	'" Seventy percent of success in life is showing up "',
	'" Do or do not.There is no try "',
	'" Always bear in mind that your own resolution to success is more important than any other one thing "',
	'" Success comes down to hard work plus passion,over time "'
]

function newQuote() 
{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
	document.getElementById('quoteDisplay').style.color = "white";
	document.getElementById('quoteDisplay').style.fontSize ="1cm";


}