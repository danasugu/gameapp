//collect values
let buget = 3000;
let vechi = 0;
let scor;

document.querySelector('.adauga').addEventListener('click', function() {
	vechi = document.querySelector('.oldFlipcoins').textContent = Number(document.querySelector('.old').value);
});

document.querySelector('.revendica').addEventListener('click', function() {
	document.querySelector('.revendicaDone').textContent = buget;
});

document.querySelector('.total').addEventListener('click', function() {
	document.querySelector('.totalFlipcoins').textContent = vechi + buget;
	scor = vechi + buget;
});

// ------------------------------------------------------------------------------------
//questions




const questions = [
	{
		question: '1.1 Mic dejun',
		answers: [
			{ text: 'selecteaza' },
			{ text: 'Micul dejun la restaurant - 30 min - 100 flipcoins', score: 100 },
			{ text: 'Micul dejun gătit de toată familia la pensiune - 60 min - 50 flipcoins', score: 50 },
			{ text: 'Clătite cumpărate de pe stradă - 15 min - 30 flipcoins', score: 30 }
		]
	},
	{
		question: '1.2 Prânz',
		answers: [
			{ text: 'selecteaza' },
			{ text: 'Prânzul la fast - food - 30 min - 150 flipcoins', score: 150 },
			{
				text: 'Prânzul la o terasă cu prețuri rezonabile, dar foarte aglomerata - 90 min - 130 flipcoins',
				score: 130
			},
			{ text: 'Prânzul la un restaurant elegant -60 min -  250 flipcoins', score: 250 }
		]
	},
	{
		question: '1.3 Cina',
		answers: [
			{ text: 'selecteaza' },
			{ text: 'Cina la un restaurant cu mâncare traditională - 50 min - 250 flipcoins', score: 250 },
			{
				text:
					'Cina cu Fructe de mare și caracatiță la un restaurant pescăresc pe malul mării - 90 min -500 flipcoins ',
				score: 500
			},
			{ text: 'Cina la un festival street food - 20 min - 200 flipcoins', score: 200 }
		]
	},
	{
		question: '2. Mergi cu familia la un muzeu// expoziție',
		answers: [
			{ text: 'selecteaza' },
			{ text: 'Muzeul figurilor de ceară - 60 flipcoins  - 30 min ', score: 60 },
			{
				text: 'Delfinariu - 50 flipcoins - 30 min', score: 50  },
			{ text: 'Muzeul de istorie - 40 flipcoins - 25 minute', score: 40 },
      { text: 'Expozitie de animale exotice - 70 flipcoins - 15 min ', score: 70},
      {text: 'Delfinariu + acces microrezervatie + Planetariu - 120 flipcoins - 1 oră ', score: 120}
		]
	},
  {
		question: '3. Plătește parcarea',
		answers: [
			{ text: 'selecteaza' },
			{ text: 'Parcare păzită non-stop ]n curtea pensiunii - 50 flipcoins/zi ', score: 50 },
			{
				text: 'Parcare fără pază în apropierea pensiunii - 30 flipcoins/zi', score: 30  },
			{ text: 'Parcare la 1200 m de pensiune - 20 flipcoins/ zi ', score: 20 }
		]
	},
  {
		question: '4. Alimentează autoturismul cu combustibil',
		answers: [
			// { text: 'selecteaza' },
			{ text: '100 flipcoins ', score: 100 }
		]
	},
  {
		question: '5. Petrece un moment de distracție// relaxare cu familia ',
		answers: [
			{ text: 'selecteaza' },
			{ text: 'Parc acvatic - 130 flipcoins', score: 130 },
			{ text: 'Plimbare cu hidrobicicleta - 80 flipcoins', score: 80  },
			{ text: 'Tenis de câmp - 110 flipcoins', score: 110 },
      { text: 'Spectacol de circ cu popcorn și vată pe băț - 90 flipcoins ', score: 90},
      {text: 'Parc de distracții - 120 flipcoins ', score: 120},
      {text: 'Echitație - 100 flipcoins', score: 100},
      {text: 'Plimbare pe malul mării și inghetata - 60 flipcoins', score: 60}
		]
	},
  {
		question: '6. Bani de buzunar pentru copii ',
		answers: [
			{ text: 'selecteaza' },
			{ text: '100 flipcoins (50 * 2)', score: 100 },
			{ text: '50 flipcoins (25 * 2)', score: 50  },
			{ text: '20 flipcoins (10 * 2 )', score: 20 }
		]
	},
	{
		question: '7. Compania de telefonie mobilă îți transmite că nu ai plătit abonamentul la telefon și că trebuie să plătești urgent',
		answers: [
			// { text: 'selecteaza' },
			{ text: '150 flipcoins', score: 150 }
		]
	},
	 {
		question: '8. După ce a mâncat o înghețată, Luca începe să se plângă de durere de măsea',
		answers: [
			{ text: 'selecteaza' },
			{ text: 'Du-l pe Luca la stomatolog și plătește consultația - 150 flipcoins', score: 150 },
			{ text: 'Cumpără de la farmacie un medicament împotriva durerii - 25 flipcoins', score: 25  },
			{ text: 'Pune o compresă. - 5 flipcoins', score: 5 }
		]
	},
	{
		question: '9. Cumpără suveniruri pentru familie și prieteni ',
		answers: [
			{ text: 'selecteaza' },
			{ text: 'Magneti cu imagini reprezentative din statiune - 100 flipcoins', score: 100 },
			{ text: 'Tricouri inscriptionate - 250 flipcoins', score: 250  },
			{ text: 'Produse handmade locale - 350 flipcoins', score: 350 }
		]
	},

];

let questionZone = document.getElementById('questionZone');
questionZone.innerHTML = '<span id="obligatoriu">✔️ Sarcini obligatorii </span> <div id="question-id">1. O familie sănătoasă respectă toate cele trei mese ale zilei. Decideti impreuna ce opțiune alegeți din cele prezentate și aveți grijă să mențineți starea de sănătate a tuturor membrilor familiei și să asigurați tuturor o stare de spirit cât mai bună. Dacă vreunul din membrii familiei va ajunge la un nivel critic în ceea ce privește starea de bine, atunci vor apărea cheltuieli neprevăzute.</div>';
questions.forEach((item) => {
	let div = document.createElement('div');
	div.className = 'question';
	div.id = item.question;
	div.innerHTML = item.question + ': ';
	questionZone.appendChild(div);
	let label = document.createElement('label');
	let select = document.createElement('select');
	label.className = 'option';
	label.appendChild(select);
	select.name = item.question;
	item.answers.forEach((answerItem) => {
		let option = document.createElement('option');
		option.text = answerItem.text;
		option.value = answerItem.score;
		select.appendChild(option);
	});
	div.appendChild(label);
});

function getTotalScore(vv) {
	let totalValue = 0;
	questions.forEach((item) => {
		totalValue += Number(vv[item.question].value);
	});
	let totalScoreGame = document.getElementById('totalScore');
	totalScore.innerHTML = 'Total Score:' + totalValue;
	return false;
}

let totalFinal = 0;
let final;

//   document.querySelector('.total-btn').addEventListener('click', function() {
// 	document.querySelector('.totalFinal').textContent = scor - totalValue.value;
//   final = Number(scor - totalValue);
// });
