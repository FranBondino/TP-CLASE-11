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
  var modal = document.getElementById("success-modal");
  var span = document.getElementsByClassName("close")[0];
  var success = true;

//form reset
formVar.addEventListener('reset', e => {
  cleanReset();
})

function cleanReset (){
  var errorArray = [nameError,surNameError,edadError,emailError,genderError,temaError]
        i=0;
        for(i;i<(errorArray.length);i++){ 
            errorArray[i].classList.add('hiddenError');
        }
}



//submit validation
  formVar.addEventListener('submit', e => {
      e.preventDefault();
      success = true;
      validateName();
      validateSurName();
      validateAge();
      validateEmail();
      validateGender();
      validateTemas();
      openModal();
  });

  function openModal(){
    if(success) {
      modal.style.display="block";
    }
  }


  


  // Validation functions
  function validateName(e) {
    var x = nameVar.value;
    if(x.length < 3) {
        nameError.classList.remove('hiddenError');
        success = false;
      }
    }
  function validateSurName(e) {
    var x = surNameVar.value;
    if(x.length < 3) {
        surNameError.classList.remove('hiddenError');
        success = false;
      }
    }

  function validateEmail(e) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var x = emailVar.value;
    var esValido = expReg.test(x);
    if(esValido==false) {
        emailError.classList.remove('hiddenError');
        success = false;
      }
    }

    function validateAge(e){
        var expReg=/[0-9]+/;
        var x = edadVar.value;
        var esValido = expReg.test(x);
        if(x.value <= 0 || x.value >=100 || esValido==false){
            edadError.classList.remove('hiddenError');
            success = false;
        }
    }

    function validateGender(e) {
        if ((genderVar[0].checked == false) && (genderVar[1].checked == false) && (genderVar[2].checked == false)){
            genderError.classList.remove('hiddenError');
            success = false;
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
            success = false;
        }
    }

    //para cerrar el modal cuando click X
    span.onclick = function() {
      modal.style.display = "none";
      }
  
      //para cerrar modela click en pantalla
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }

   




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