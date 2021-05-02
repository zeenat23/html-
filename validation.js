 function  alphabetValidation(e){

 const re = /^[a-zA-Z]+$/;
    if (!re.test(e.key)) {
        e.preventDefault();
    }
  }
  function emailValidation(e)
  {
    var pattern=/^[A-Za-z0-9'.@\s,]*$/;
     if (!pattern.test(e.key)) {
        e.preventDefault();
    }
  }
