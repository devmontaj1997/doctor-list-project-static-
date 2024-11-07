// Get the button and the element to show/hide
const button = document.querySelector(".mybtn.btnRight");
const singleDoctorArea = document.querySelector("#collapseMember3971");

// Add click event listener to the button
button.addEventListener("click", () => {
  // Toggle the 'show' class
  singleDoctorArea.classList.toggle("show");
});
// Get the new button and the mobile element to show/hide
const mobileButton = document.querySelector(".mybtn.btnRight.mobilebtn");
const mobileSingleDoctorArea = document.querySelector("#collapseMember3972");

// Add click event listener to the new button
mobileButton.addEventListener("click", () => {
 

  mobileSingleDoctorArea.classList.toggle("show");
});
