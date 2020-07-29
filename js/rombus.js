(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          location.href = "marketing.html";
        }
        form.classList.add('was-validated');
        location.href = "marketing.html";
      }, false);
    });
  }, false);
})();

$('.rombus-file-input').html('Sube un archivo o imagen (jpg, png. pdf, doc)');


$('#image').change(function () {
  var text = $('#image')[0].files[0].name;
  $('.rombus-file-input').html(text);
});

function stepThree() {
  location.href = "advertising.html";
}
