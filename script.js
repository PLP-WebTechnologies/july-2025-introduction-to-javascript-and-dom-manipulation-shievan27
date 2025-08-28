//  Part 1: Basics - Variables, Conditionals
function checkAge() {
  const age = document.getElementById("ageInput").value;
  let message;

  if (age >= 18) {
    message = " You are an adult!";
  } else if (age > 0) {
    message = " You are still a minor!";
  } else {
    message = " Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = message;
}

//  Part 2: Functions - Reusability
function calculateTotal(price, quantity) {
  const total = price * quantity;
  document.getElementById("totalResult").textContent = 
    `Total price: $${total}`;
}

function toggleMessage() {
  const msg = document.getElementById("toggleText");
  msg.style.display = (msg.style.display === "none") ? "block" : "none";
}

//  Part 3: Loops - Repetition
function showCountdown() {
  const list = document.getElementById("countdownList");
  list.innerHTML = "";
  for (let i = 5; i >= 1; i--) {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

function listFruits() {
  const fruits = [" Apple", " Banana", "Grapes", "Orange"];
  const list = document.getElementById("fruitList");
  list.innerHTML = "";

  fruits.forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

//  Part 4: DOM Manipulation
document.getElementById("changeColorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightyellow" ? "#f4f4f9" : "lightyellow";
});

document.getElementById("addItemBtn").addEventListener("click", () => {
  const list = document.getElementById("dynamicList");
  const li = document.createElement("li");
  li.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(li);
});
