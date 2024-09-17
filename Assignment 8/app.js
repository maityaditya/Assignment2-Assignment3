// Click event
document.getElementById("click-me").addEventListener("click", function() {
    document.getElementById("output").textContent = "Button clicked!";
  });
  
  // Keydown event
  document.getElementById("text-input").addEventListener("keydown", function(event) {
    document.getElementById("output").textContent = "Key pressed: " + event.key;
  });
  
  // Keyup event
  document.getElementById("text-input").addEventListener("keyup", function(event) {
    document.getElementById("output").textContent = "Key released: " + event.key;
  });
  
  // Keypress event
  document.getElementById("text-input").addEventListener("keypress", function(event) {
    document.getElementById("output").textContent = "Key pressed and released: " + event.key;
  });
  
  // Submit event
  document.getElementById("submit-button").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    document.getElementById("output").textContent = "Form submitted!";
  });
  
  // Change event
  document.getElementById("text-input").addEventListener("change", function() {
    document.getElementById("output").textContent = "Input value changed: " + this.value;
  });
  
  // Focus event
  document.getElementById("text-input").addEventListener("focus", function() {
    document.getElementById("output").textContent = "Input gained focus";
  });
  
  // Blur event
  document.getElementById("text-input").addEventListener("blur", function() {
    document.getElementById("output").textContent = "Input lost focus";
  });
  
  // Mouseover event
  document.getElementById("click-me").addEventListener("mouseover", function() {
    document.getElementById("output").textContent = "Mouse entered element";
  });
  
  // Mouseout event
  document.getElementById("click-me").addEventListener("mouseout", function() {
    document.getElementById("output").textContent = "Mouse left element";
  });
  
  // Mousemove event
  document.addEventListener("mousemove", function(event) {
    document.getElementById("output").textContent = "Mouse moved to: " + event.clientX + ", " + event.clientY;
  });
  
  // Window resize event
  window.addEventListener("resize", function() {
    document.getElementById("output").textContent = "Window resized!";
  });
  
  // Window scroll event
  window.addEventListener("scroll", function() {
    document.getElementById("output").textContent = "Window scrolled";
  });
  
  // Error event
  window.addEventListener("error", function(event) {
    document.getElementById("output").textContent = "An error occurred: " + event.message;
  });
  
  // Timeout event
  setTimeout(function() {
    document.getElementById("output").textContent = "Timeout occurred";
  }, 2000);
  
  // Animationstart event (assuming you have an animation defined in CSS)
  document.getElementById("animated-element").addEventListener("animationstart", function() {
    document.getElementById("output").textContent = "Animation started";
  });
  
  // Animationend event (assuming you have an animation defined in CSS)
  document.getElementById("animated-element").addEventListener("animationend", function() {
    document.getElementById("output").textContent = "Animation ended";
  });