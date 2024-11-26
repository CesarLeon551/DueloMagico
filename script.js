const botSpells = [
  "Expelliarmus",
  "Stupefy",
  "Petrificus Totalus",
  "Flipendo",
  "Sectumsempra",
  "Incendio",
  "Confringo",
  "Bombarda",
  "Reducto",
  "Expulso",
  "Relashio",
  "Diffindo",
  "Arania Exumai",
  "Oppugno",
  "Deprimo",
  "Rictusempra",
  "Obscuro",
  "Everte Statum",
  "Fulgari",
  "Glacius",
  "Tarantallegra",
  "Flipendo Maxima",
  "Duro",
  "Ventus"
];

const effectivenessMap = {
  "Expelliarmus": {
    veryEffective: { name: "Protego", img: "protego.png", desc: "Bloquea el desarme" },
    effective: { name: "Stupefy", img: "stupefy.png", desc: "Aturde al oponente" },
    notEffective: { name: "Flipendo", img: "flipendo.png", desc: "Impacto débil" }
  },
  "Stupefy": {
    veryEffective: { name: "Expelliarmus", img: "expelliarmus.png", desc: "Desarma al oponente" },
    effective: { name: "Protego", img: "protego.png", desc: "Bloquea el aturdimiento" },
    notEffective: { name: "Lumos", img: "lumos.png", desc: "Débil contra hechizos de aturdimiento" }
  },
  "Petrificus Totalus": {
    veryEffective: { name: "Expelliarmus", img: "expelliarmus.png", desc: "Desarma al oponente" },
    effective: { name: "Protego", img: "protego.png", desc: "Bloquea parcialmente la petrificación" },
    notEffective: { name: "Incendio", img: "incendio.png", desc: "No tiene efecto contra petrificación" }
  },
  "Flipendo": {
    veryEffective: { name: "Sectumsempra", img: "sectumsempra.png", desc: "Corta fuertemente al oponente" },
    effective: { name: "Incendio", img: "incendio.png", desc: "Causa un daño moderado" },
    notEffective: { name: "Lumos", img: "lumos.png", desc: "Impacto débil contra hechizos de empuje" }
  },
  "Sectumsempra": {
    veryEffective: { name: "Expelliarmus", img: "expelliarmus.png", desc: "Desarma al oponente para evitar cortes" },
    effective: { name: "Stupefy", img: "stupefy.png", desc: "Aturde al oponente" },
    notEffective: { name: "Lumos", img: "lumos.png", desc: "Débil contra hechizos de corte" }
  },
  "Incendio": {
    veryEffective: { name: "Aguamenti", img: "aguamenti.png", desc: "Apaga las llamas" },
    effective: { name: "Protego", img: "protego.png", desc: "Bloquea parcialmente el fuego" },
    notEffective: { name: "Flipendo", img: "flipendo.png", desc: "Impacto débil contra fuego" }
  },
  "Confringo": {
    veryEffective: { name: "Protego Maxima", img: "protego_maxima.png", desc: "Protección avanzada contra explosiones" },
    effective: { name: "Expelliarmus", img: "expelliarmus.png", desc: "Desarma al oponente" },
    notEffective: { name: "Lumos", img: "lumos.png", desc: "Débil contra hechizos explosivos" }
  },
  "Bombarda": {
    veryEffective: { name: "Protego Maxima", img: "protego_maxima.png", desc: "Escudo fuerte contra explosiones" },
    effective: { name: "Expelliarmus", img: "expelliarmus.png", desc: "Desarma al oponente" },
    notEffective: { name: "Lumos", img: "lumos.png", desc: "Débil contra explosiones mágicas" }
  },
  "Reducto": {
    veryEffective: { name: "Protego Maxima", img: "protego_maxima.png", desc: "Escudo impenetrable contra destructores" },
    effective: { name: "Stupefy", img: "stupefy.png", desc: "Aturde para reducir daño" },
    notEffective: { name: "Incendio", img: "incendio.png", desc: "Débil contra hechizos destructivos" }
  },
  "Expulso": {
    veryEffective: { name: "Protego Maxima", img: "protego_maxima.png", desc: "Protección avanzada contra explosiones" },
    effective: { name: "Stupefy", img: "stupefy.png", desc: "Aturde al oponente" },
    notEffective: { name: "Lumos", img: "lumos.png", desc: "Débil contra explosiones mágicas" }
  },
  "Relashio": {
    veryEffective: { name: "Aguamenti", img: "aguamenti.png", desc: "Apaga la energía" },
    effective: { name: "Expelliarmus", img: "expelliarmus.png", desc: "Desarma al oponente" },
    notEffective: { name: "Incendio", img: "incendio.png", desc: "Impacto débil contra energía liberada" }
  },
  "Diffindo": {
    veryEffective: { name: "Sectumsempra", img: "sectumsempra.png", desc: "Corta fuertemente al oponente" },
    effective: { name: "Incendio", img: "incendio.png", desc: "Causa daño moderado" },
    notEffective: { name: "Lumos", img: "lumos.png", desc: "Débil contra hechizos de corte" }
  },
  "Arania Exumai": {
    veryEffective: { name: "Sectumsempra", img: "sectumsempra.png", desc: "Corta fuertemente a las criaturas" },
    effective: { name: "Expelliarmus", img: "expelliarmus.png", desc: "Desarma al oponente para evitar criaturas" },
    notEffective: { name: "Lumos", img: "lumos.png", desc: "Débil contra criaturas mágicas" }
  },
  "Oppugno": {
    veryEffective: { name: "Expelliarmus", img: "expelliarmus.png", desc: "Desarma al oponente para evitar el ataque" },
    effective: { name: "Protego", img: "protego.png", desc: "Bloquea parcialmente el ataque" },
    notEffective: { name: "Lumos", img: "lumos.png", desc: "Débil contra hechizos de conjuro" }
  },
  "Deprimo": {
    veryEffective: { name: "Expelliarmus", img: "expelliarmus.png", desc: "Desarma para evitar daño" },
    effective: { name: "Protego", img: "protego.png", desc: "Bloquea parcialmente la presión" },
    notEffective: { name: "Lumos", img: "lumos.png", desc: "Débil contra presión mágica" }
  },
  "Rictusempra": {
    veryEffective: { name: "Protego", img: "protego.png", desc: "Bloquea las cosquillas" },
    effective: { name: "Expelliarmus", img: "expelliarmus.png", desc: "Desarma al oponente para evitar cosquillas" },
    notEffective: { name: "Lumos", img: "lumos.png", desc: "Débil contra cosquillas mágicas" }
  },
  "Obscuro": {
    veryEffective: { name: "Lumos", img: "lumos.png", desc: "Ilumina y disipa la oscuridad" },
    effective: { name: "Expelliarmus", img: "expelliarmus.png", desc: "Desarma para evitar la oscuridad" },
    notEffective: { name: "Incendio", img: "incendio.png", desc: "No tiene efecto contra la oscuridad" }
  },
  "Everte Statum": {
    veryEffective: { name: "Expelliarmus", img: "expelliarmus.png", desc: "Desarma para evitar el golpe" },
    effective: { name: "Protego", img: "protego.png", desc: "Bloquea el impacto" },
    notEffective: { name: "Lumos", img: "lumos.png", desc: "Débil contra el impacto físico" }
  },
  "Fulgari": {
    veryEffective: { name: "Protego Maxima", img: "protego_maxima.png", desc: "Escudo contra rayos mágicos" },
    effective: { name: "Expelliarmus", img: "expelliarmus.png", desc: "Desarma al oponente" },
    notEffective: { name: "Lumos", img: "lumos.png", desc: "Débil contra rayos mágicos" }
  },
  "Glacius": {
    veryEffective: { name: "Incendio", img: "incendio.png", desc: "Deshace el hielo" },
    effective: { name: "Protego", img: "protego.png", desc: "Bloquea parcialmente el hielo" },
    notEffective: { name: "Flipendo", img: "flipendo.png", desc: "No tiene efecto contra el hielo" }
  },
};

// Almacenamiento de nombres y casas
const usedNames = new Set();

function createCard(spell) {
  return `
    <div class="card" data-spell="${spell.name}">
      <img src="${spell.img}" alt="${spell.name}">
      <div class="card-title">${spell.name}</div>
      <div class="card-description">${spell.desc}</div>
    </div>
  `;
}

function displayPlayerOptions(botSpell) {
  const { veryEffective, effective, notEffective } = effectivenessMap[botSpell];
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML =
    createCard(veryEffective) +
    createCard(effective) +
    createCard(notEffective);

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const playerSpell = card.dataset.spell;
      const resultText = document.getElementById('result-text');
      const resultSection = document.getElementById('result-section');
      
      if (playerSpell === veryEffective.name) {
        resultText.textContent = `¡Ganaste! ${playerSpell} es muy eficaz contra ${botSpell}. Ten 2000 puntos.`;
      } else if (playerSpell === effective.name) {
        resultText.textContent = `¡Empate! ${playerSpell} es eficaz contra ${botSpell}. Buen intento, ten 1500 puntos.`;
      } else {
        resultText.textContent = `Perdiste... ${playerSpell} es poco eficaz contra ${botSpell}. Recorcholiz casi, ten 1000 puntos por intentarlo.`;
      }
      resultSection.classList.remove('hidden');
    });
  });
}

function startDuel() {
  const nameInput = document.getElementById('player-name').value.trim();
  const houseInput = document.getElementById('player-house').value.trim();

  if (!nameInput || !houseInput) {
    alert('Por favor ingresa tu nombre y selecciona una casa.');
    return;
  }

  const formattedName = nameInput.toLowerCase(); // Normalizar el nombre para evitar variaciones
  const fullName = `${formattedName} (${houseInput.toLowerCase()})`;

  if (usedNames.has(formattedName)) {
    alert('Este nombre ya fue utilizado en otra casa. Por favor, elige otro.');
    return;
  }

  if (usedNames.has(fullName)) {
    alert('Este nombre ya fue utilizado en esta casa. Por favor, elige otro.');
    return;
  }

  // Agregar el nombre y la combinación a la lista de usados
  usedNames.add(formattedName);
  usedNames.add(fullName);

  const botSpell = botSpells[Math.floor(Math.random() * botSpells.length)];
  document.getElementById('bot-spell').textContent = `El bot lanzó: ${botSpell}`;
  displayPlayerOptions(botSpell);
}

document.getElementById('restart-button').addEventListener('click', () => {
  document.getElementById('result-section').classList.add('hidden');
  startDuel();
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start-button').addEventListener('click', startDuel);
});
