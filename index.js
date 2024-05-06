let balance = 1000;

function checkBalance() {
  alert(`Your current balance is $${balance}`);
}

function withdrawMoney() {
  document.getElementById("withdrawal").classList.toggle("hidden");
}

function withdraw() {
  let amount = parseFloat(document.getElementById("withdrawAmount").value);
  if (amount <= balance) {
    balance -= amount;
    document.getElementById("balance").textContent = `$${balance}`;
    alert(`You have withdrawn $${amount}. Your current balance is $${balance}`);
  } else {
    alert("Insufficient funds");
  }
  document.getElementById("withdrawAmount").value = "";
  document.getElementById("withdrawal").classList.add("hidden");
}

function depositMoney() {
  document.getElementById("deposit").classList.toggle("hidden");
}

function deposit() {
  let amount = parseFloat(document.getElementById("depositAmount").value);
  balance += amount;
  document.getElementById("balance").textContent = `$${balance}`;
  alert(`You have deposited $${amount}. Your current balance is $${balance}`);
  document.getElementById("depositAmount").value = "";
  document.getElementById("deposit").classList.add("hidden");
}