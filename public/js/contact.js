//import '../node_modules/dotenv/config.js'
//import { MailerSend, EmailParams, Sender, Recipient } from "../node_modules/mailersend";

function sendMail(){

    //var input = document.getElementById('message_input')
    var input = $('#message_input')//document.getElementById('message_input')
    //Check if the input box is empty
    if(input.val() == ''){
        //If empty, change border of input box to red
        input.css('border-color', 'red');
        input.css('background-color', 'rgb(249, 241, 241)');
    }
    else{
        //If not empty, hide all of the input box elements, and send email
        
        //Log email
        console.log("Sending message '" + input.val() + "' to Pirate_Knight@gmail.com")

        //Create JSON message for API call
        var msgJSON = {
          "api_key": "api-79768915DF8C43CA9CB6FB6365FEB067",
          "to": ["djm831@gmail.com"],
          "sender": "jayankee@sherpa-technologies.org",
          "subject": "Message From Customer",
          "text_body": input.val(),
          "html_body": "<h1>" + input.val() + "</h1>",
      }
      //Call smtp2go API to send an email
      fetch('https://api.smtp2go.com/v3/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(msgJSON)
        })

        input.val('')
        
        //hide input elements
        //let input_elements = document.getElementsByClassName('text_input');
        $('.text_input').hide("slow",function() {
             //Append new element that says Message Sent!
        });

        $('textarea').hide("slow",function() {
            //Append new element that says Message Sent!
           var new_textNode = $('<p>').text("Message Sent!");
           $('body').append(new_textNode);
       });

       
    }
}


$("#send_mail_button").on("click",sendMail)