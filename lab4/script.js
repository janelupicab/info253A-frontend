const form = document.getElementById("contactForm");
addEventListener("submit", (event) => {
  const sub = form.sub;
  sub.classList.add("loader")
  const name = form.name.value;
  const email = form.email1.value;
  const phone =  form.phone1.value;
  event.preventDefault();

setTimeout(function() {
  window.alert(`You provided the following email & phone number: \n \n Email: ${email} \n Phone: ${phone}`);
  sub.classList.remove("loader");
  }, 3000);
  
});