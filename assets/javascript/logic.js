$(document).ready(function(){
    // I've tried different ways to do this. 
    // For setting a value to the variables, it would only choose the first option, so i tested
    // to see if it would give a different result if i set the answers as 'a'. Since no matter what
    // the variable will equal 'a', the value of correct will always be 4. 
    var correct = 0;
    var timer = 15;
    var intervalID;
    var question1 = $("#answer1").attr('value', 'q1a')
    var question2 = $("#answer2").attr('value', 'q2a')
    var question3 = $("#answer3").attr('value', 'q3a')
    var question4 = $("#answer4").attr('value', 'q4a')

    
  
        if (question1 == "q1a"){
            correct++;
            
        }
        if (question2 == "q2a"){
            correct++;
        }
        if (question3 == "q3a"){
            correct++;
        }
        if (question4 == "q4a"){
            correct++;
        }

        console.log(correct)
        console.log(question1)

        
    function run() {
        intervalId = setInterval(decrement, 1000);
      }
  
      function decrement() {
  
        timer--;
  
        $("#timeremain").html("<h2>Time remaining: " + timer + "</h2>");
  
        if (timer === 0) {
  
          stop();
  
          $("#timesup").html("<h2>Times Up!</h2> <h3> You got " + correct + " correct <div>" + messages[score] + "</div");
        }
      }
  
      function stop() {
  
        clearInterval(intervalId);
      }
  
      run();

      var messages = ["Wow, youre a true Raptors Fan! You probably just redid the quiz though", "Not bad! You know your Raptors!", "Better watch some more games!"]

      if (correct == 0) {
          score = 2;
      }

      if (correct > 0 && correct < 4) {
          score = 1;
      }

      if (correct == 4){
          score = 0;
      }

     
    
   
})


