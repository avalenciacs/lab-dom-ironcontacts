// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td><img src="${randomContact.pictureUrl}" /></td>
  <td>${randomContact.name}</td>
  <td>${randomContact.popularity.toFixed(2)}</td>
  <td><button class="btn-delete">Delete</button></td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(exampleRow);






// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach(contact => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><img src="${contact.pictureUrl}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  tableBody.appendChild(row);
});

  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  const deleteButtons = document.querySelectorAll(".btn-delete");
deleteButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    this.closest("tr").remove();  // Elimina la fila completa
  });
});


  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  const likeButtons = document.querySelectorAll(".btn-like");
likeButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle("liked");  // Añade/quita la clase 'liked'
  });
});

  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click", () => {
  if (contacts.length === 0) {
    buttonAddRandom.disabled = true;
    buttonAddRandom.textContent = "No hay más contactos";
    return;
  }

  const index = Math.floor(Math.random() * contacts.length);
  const [newContact] = contacts.splice(index, 1);  // Sacamos uno aleatorio

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td><img src="${newContact.pictureUrl}" /></td>
    <td>${newContact.name}</td>
    <td>${newContact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  tableBody.appendChild(newRow);

  // Activamos los nuevos botones (delete y like) de la fila recién añadida
  newRow.querySelector(".btn-delete").addEventListener("click", function () {
    this.closest("tr").remove();
  });

  newRow.querySelector(".btn-like").addEventListener("click", function () {
    this.classList.toggle("liked");
  });
});
