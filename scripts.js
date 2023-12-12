var video = document.getElementById('background-video');

video.addEventListener('ended', function () {
    video.play();
});
video.play(); // Autoplay the video when the page is opened


window.onload = function() {
  emailjs.init("Sicheng"); // Initialize EmailJS with your user ID
};

function sendEmail() {
  var firstName = document.getElementById('fname').value;
  var lastName = document.getElementById('lname').value;
  var subject = document.getElementById('subject').value;

  // The template params should match 
  var templateParams = {
      from_name: firstName + " " + lastName,
      message_html: subject,
      reply_to: "ysc1998@bu.edu"
  };

  emailjs.send('service_apdd7k2')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         alert('Your mail is sent!');
      }, function(error) {
         console.log('FAILED...', error);
         alert('Failed to send the mail, please try again later.');
      });
}
