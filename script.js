const Users = [];

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  showUser() {
    return `nome: ${this.firstName}\ncognome: ${this.lastName}\netà: ${this.age}\nluogo: ${this.location}`;
  }

  pushUser() {
    Users.push(this);
  }

  compareAge(otherUser) {
    if (this.age < otherUser.age) {
      return `${this.firstName} è più piccolo/a di ${otherUser.firstName}`;
    } else if (this.age > otherUser.age) {
      return `${this.firstName} è più grande di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}

const Ludo = new User("Ludovica", "Bongiovanni", 22, "Roma");
Ludo.pushUser();

const Ali = new User("Alice", "Belli", 17, "Pavona");
Ali.pushUser();

const Matt = new User("Mattina", "Guarino", 20, "Napoli");
Matt.pushUser();

const Marcy = new User("Marcello", "Miranda", 20, "Napoli");
Marcy.pushUser();

console.log(Users);

console.log(Ludo.compareAge(Ali));
console.log(Ali.compareAge(Ludo));
console.log(Marcy.compareAge(Matt));

// Ess 2
const padrone = document.getElementById("padrone");
const specie = document.getElementById("specie");
const razza = document.getElementById("razza");
const nome = document.getElementById("nome");
const eta = document.getElementById("eta");
const animalettiSalvati = document.getElementById("animalettiSalvati");

class Pet {
  constructor(_padrone, _specie, _razza, _nome, _eta) {
    this.padrone = _padrone;
    this.specie = _specie;
    this.razza = _razza;
    this.nome = _nome;
    this.eta = _eta;
  }

  stessoPadrone(otherPet) {
    return this.padrone.toLowerCase() === otherPet.padrone.toLowerCase();
  }
}

const pets = [];
const petForm = document.getElementById("pet-form");

petForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form Inviato");

  const newPet = new Pet(
    padrone.value,
    specie.value,
    razza.value,
    nome.value,
    eta.value
  );

  pets.push(newPet);
  console.log("Animaletto Salvato <3", newPet);

  animalettiSalvati.innerHTML += `
    <div class="pet-info">
      <p><strong>Padrone:</strong> ${newPet.padrone}</p>
      <p><strong>Specie:</strong> ${newPet.specie}</p>
      <p><strong>Razza:</strong> ${newPet.razza}</p>
      <p><strong>Nome:</strong> ${newPet.nome}</p>
      <p><strong>Età:</strong> ${newPet.eta}</p>
    </div>
  `;
  petForm.reset();

  const lastPet = pets[pets.length - 1];
  const previousPet = pets[pets.length - 2];

  if (pets.length > 1) {
    const lastPet = pets[pets.length - 1];
    const previousPet = pets[pets.length - 2];

    if (lastPet.stessoPadrone(previousPet)) {
      console.log(
        `${lastPet.nome} e ${previousPet.nome} hanno lo stesso padrone.`
      );
    } else {
      console.log(
        `${lastPet.nome} e ${previousPet.nome} NON hanno lo stesso padrone.`
      );
    }
  }
});
