function addingEventListener() {
    const form = document.querySelector("form");
    form.addEventListener("submit", submitForm);
  }
  
  
  function submitForm(event) {
    event.preventDefault();  
    console.log(document.querySelector("#create_item").value);  // Log the input value to the console
  }
  
  
addingEventListener();
  