 function playGame(){
       let roll1 = getRandomNumber()   

       console.log("roll1:", roll1);


       let roll2 = getRandomNumber();

       console.log("roll2:", roll2);


        let rollsum = roll1 + roll1;

       console.log("rollsum:", rollsum);
 
         if (roll1 == roll2 && rollsum % 2 == 0){
               // update the message div with the good news that the round was a win
               document.getElementById("divmessage").textContent = "You win!";
         }
         else if (rollsum == 7 || rollsum == 11){
               // update the message div with the bad news that the round was a loss
               document.getElementById("divmessage").textContent = "You lose!";
   }

       else{
         // update the message div with the good news that the round was a tie
         document.getElementById("divmessage").textContent = "You tied (pushed)!";

         document.getElementById("divroll1").textContent = "roll1: " + roll1;
         document.getElementById("divroll2").textContent = "roll2: " + roll2;
         document.getElementById("divsum").textContent = "Sum: " + rollsum;   
       }
      }



   function getRandomNumber(){


   let number = Math.random() * 6;


   number = Math.floor(number) + 1;

   return number;
 }

  function validate(){

            let firstName = document.getElementById("txtfirstname").value;

            console.log("firstname: " + " " + firstName);


             let lastName = document.getElementById("txtlastname").value;

            console.log("lastname: " + lastName);
            
             let zip = document.getElementById("txtzip").value;

            console.log("zip=" + zip);

            let fullname = firstName + " " + lastName;

            console.log("fullname=" + fullname);

            let message = "";

            if(fullname.length == 1 || fullname.length > 20){
                message += "please enter a name that is less than 20 characters.";
            }

            else if(zip.length != 5){
                message = "please enter a 5 digit zip code.";
            }
            

            console.log("message=" + message);


            document.getElementById("divmessage").textContent = message;

        }
 