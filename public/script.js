
const API_URL = "http://localhost:8080/";

// DOM element
const mainSection = document.getElementById("mainContent");

const fetchAllPets = async () => {
    try {
        const response = await fetch(`${API_URL}api/v1/pets`);
        const jsonResponse = await response.json();
        renderAllPets(jsonResponse);
    } catch (error) {
        console.log("Unable to fetch the pets", error)
    }
}

// render all players
const renderAllPets = (petsList) => {
  
    //check if the list has pets
    if (petsList.length < 1) {
      const message = document.createElement("h2");
      message.textContent = "No pets found";
      mainSection.appendChild(message);
      return;
    }
  
    //render each pet
    petsList.forEach((pet) => {
      const singleCard = document.createElement("section");
      singleCard.className = "card";
      singleCard.id = `${pet.id}`;
      singleCard.innerHTML = `
      <h2>Name: ${pet.name}</h2>
      <p>Id: ${pet.id}</p>
      <p>Breed: ${pet.breed}</p>
      <p>Age: ${pet.age}</p>
      <p>Owner: ${pet.owner}</p>
      <p>Telephone: ${pet.telephone}</p>
      `

      mainSection.appendChild(singleCard);
    });
  };

  const render = async () => {
    await fetchAllPets();
  };
  
  render();