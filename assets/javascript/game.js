$(document).ready(function () {
    var random = Math.floor(Math.random() * 150) + 25;
    console.log("random: " + random);
    $(".randomNumber").html(random);

    var wins = 0;
    console.log("wins: " + wins);

    var losses = 0;
    console.log("losses: " + losses);

    var score = 0;
    console.log("score: " + score);

    var gemOne = Math.floor(Math.random() * 15) + 2;
    console.log("Gem 1: " + gemOne);
    $("#one").html("<img src=" + "assets/images/crystal1.png" + " value=" + gemOne + ">")

    var gemTwo = Math.floor(Math.random() * 15) + 2;
    console.log("Gem 1: " + gemTwo);
    $("#two").html("<img src=" + "assets/images/crystal2.png" + " value=" + gemTwo + ">")

    var gemThree = Math.floor(Math.random() * 15) + 2;
    console.log("Gem 1: " + gemThree);
    $("#three").html("<img src=" + "assets/images/crystal3.png" + " value=" + gemThree + ">")

    var gemFour = Math.floor(Math.random() * 15) + 2;
    console.log("Gem 1: " + gemFour);
    $("#four").html("<img src=" + "assets/images/crystal4.png" + " value=" + gemFour + ">")

    function reset() {
        random = Math.floor(Math.random() * 150) + 25;
        console.log("random" + random);
        $(".randomNumber").html(random)

        score = 0;
        $("finalScoreNumber").html(score);

        var gemOne = Math.floor(Math.random() * 15) + 2;
        console.log("Gem 1: " + gemOne);
        $("#one").html("<img src=" + "assets/images/crystal1.png" + " value=" + gemOne + ">")

        var gemTwo = Math.floor(Math.random() * 15) + 2;
        console.log("Gem 1: " + gemTwo);
        $("#two").html("<img src=" + "assets/images/crystal2.png" + " value=" + gemTwo + ">")

        var gemThree = Math.floor(Math.random() * 15) + 2;
        console.log("Gem 1: " + gemThree);
        $("#three").html("<img src=" + "assets/images/crystal3.png" + " value=" + gemThree + ">")

        var gemFour = Math.floor(Math.random() * 15) + 2;
        console.log("Gem 1: " + gemFour);
        $("#four").html("<img src=" + "assets/images/crystal4.png" + " value=" + gemFour + ">")

        $("img").on("click", function () {
            var resetScore = score += parseInt(
                $(this).attr("value")
            );

            console.log("New Score " + resetScore);
            $(".finalScoreNumberDisplay").html(resetScore);

            if (resetScore === random) {
                wins++
                $(".wins").html("Wins " + wins)
                console.log("Wins " + wins)

                reset();
            }

            else if (resetScore > random) {
                losses++;
                $(".losses").html("Losses " + losses)
                console.log("Losses " + losses)
                reset();

            }
        });
    }
$("img").on("click", function () {
    var resetScore = score += parseInt($(this).attr("value"))
    console.log("New Score " + resetScore);
    $(".finalScoreNumberDisplay").html(resetScore);

    if (resetScore === random) {
        wins ++;
        $(".wins").html("Wins " + wins);
        console.log("Wins " + wins);
        reset ()
    }

    else if (resetScore > random) {
        losses++
        $(".losses").html("Losses " + losses);
        reset ()
    }
}

)});

