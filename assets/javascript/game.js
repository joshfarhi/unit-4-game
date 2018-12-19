$(document).ready(function () 
{
    var random = Math.floor(Math.random() * 150 + 10);
    console.log("random: " + random); 
    $(".randomNumber").html(random); 

    var wins = 0; 
    console.log("wins: " + numWins); 
    
    var losses = 0; 
    console.log("losses: " + numLosses); 
    
    var score = 0; 
    console.log("score: " + finalScoreNumberDisplay); 

        var gemOne = Math.floor(Math.random() * 10) + 1; 
		console.log("Gem 1: " + gemOne); 
        $("#one").html("<img src=" + "assets/images/crystal1.png" + " value=" + gemOne + ">")

        var gemTwo = Math.floor(Math.random() * 10) + 1; 
		console.log("Gem 1: " + gemTwo); 
        $("#two").html("<img src=" + "assets/images/crystal2.png" + " value=" + gemTwo + ">")

        var gemThree = Math.floor(Math.random() * 10) + 1; 
		console.log("Gem 1: " + gemThree); 
        $("#three").html("<img src=" + "assets/images/crystal3.png" + " value=" + gemThree + ">")

        var gemFour = Math.floor(Math.random() * 10) + 1; 
		console.log("Gem 1: " + gemFour); 
        $("#four").html("<img src=" + "assets/images/crystal4.png" + " value=" + gemFour + ">")

        function reset () {
            random = Math.floor(Math.random() * 150) + 10;
            console.log("random" + random);
            $("")
        }

} 
