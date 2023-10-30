function autoFillRecipientName() {
  // Get the input field element
  var nameInput = document.getElementById("autoFillName");

  // Get the recipient's name from the input field
  var recipientName = nameInput.value;

  // Find the element with the ID "recipient-name" and update its content
  var recipientNameElement = document.getElementById("recipient-name");
  recipientNameElement.textContent = recipientName;

  nameInput.value = "";
}
