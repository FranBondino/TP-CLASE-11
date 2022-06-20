window.onload = function() {
  
  var formVar = document.getElementById('form-susc');

  // Input variables
  var nameVar = document.getElementById('nombreInput');
  var nameError = document.getElementById('nameError');
  var surNameVar = document.getElementById('apellidoInput');
  var surNameError = document.getElementById('surNameError');
  var emailVar = document.getElementById('mailInput');
  var emailError = document.getElementById('emailError');
  var edadVar = document.getElementById('edadInput');
  var edadError = document.getElementById('ageError');
  var genderVar = document.getElementsByName('gender');
  var genderError = document.getElementById('radioError');
  var temaVar = document.getElementsByName('tema');
  var temaError = document.getElementById('checkError');


//submit validation
  formVar.addEventListener('submit', e => {
      e.preventDefault();
      validateName();
      validateSurName();
      validateAge();
      validateEmail();
      validateGender();
      validateTemas();
  });

  


  // Validation functions
  function validateName(e) {
    var x = nameVar.value;
    if(x.length < 3) {
        nameError.classList.remove('hiddenError');
      }
    }
  function validateSurName(e) {
    var x = surNameVar.value;
    if(x.length < 3) {
        surNameError.classList.remove('hiddenError');
      }
    }

  function validateEmail(e) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var x = emailVar.value;
    var esValido = expReg.test(x);
    if(esValido==false) {
        emailError.classList.remove('hiddenError');
      }
    }

    function validateAge(e){
        var expReg=/[0-9]+/;
        var x = edadVar.value;
        var esValido = expReg.test(x);
        if(x.value <= 0 || x.value >=100 || esValido==false){
            edadError.classList.remove('hiddenError');
        }
    }

    function validateGender(e) {
        if ((genderVar[0].checked == false) && (genderVar[1].checked == false) && (genderVar[2].checked == false)){
            genderError.classList.remove('hiddenError');
        }
    }

    function validateTemas(e){
        var x=0;
        var i=0;
        for(i;i<(temaVar.length);i++){
            if(temaVar[i].checked==false){
                x=x+1;
            }
        }
        if(x==(temaVar.length)){
            temaError.classList.remove('hiddenError')
        }
    }

    //error clearing
    nameVar.addEventListener('focus', clearNameError);

    surNameVar.addEventListener('focus', clearSurNameError);

    emailVar.addEventListener('focus', clearEmailError);

    edadVar.addEventListener('focus', clearAgeError);
    
    genderVar[0].addEventListener('focus', clearGenderError);
    genderVar[1].addEventListener('focus', clearGenderError);
    genderVar[2].addEventListener('focus', clearGenderError);

    temaVar[0].addEventListener('focus', clearTemaError);
    temaVar[1].addEventListener('focus', clearTemaError);
    temaVar[2].addEventListener('focus', clearTemaError);
    temaVar[3].addEventListener('focus', clearTemaError);
    temaVar[4].addEventListener('focus', clearTemaError);

    function clearNameError(e) {
    nameError.classList.add('hiddenError');
    }
    function clearSurNameError(e) {
    surNameError.classList.add('hiddenError');
    }
    function clearEmailError(e) {
    emailError.classList.add('hiddenError');
    }
    function clearAgeError(e) {
    edadError.classList.add('hiddenError');
    }
    function clearGenderError(e) {
    genderError.classList.add('hiddenError');
    }
    function clearTemaError(e) {
    temaError.classList.add('hiddenError');
    }

  }