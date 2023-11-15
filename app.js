let btn = document.querySelector('button');
let newName = document.querySelector('p');
let nameRandom = 0;
let dernier = 0;
let name = [
    "Lucas", "Gabriel", "Mateus", "Pedro", "Thiago", "Leonardo", "Matheus", "Henrique", "Rafael", "Gustavo",
    "João", "Vinícius", "Eduardo", "Felipe", "Bruno", "Davi", "Daniel", "André", "Caio", "Ricardo",
    "Alex", "Samuel", "Marcos", "Victor", "Guilherme", "Carlos", "Antonio", "Luiz", "Fernando", "Marcelo",
    "Igor", "Rodrigo", "Paulo", "Roberto", "Raul", "Diego", "Cauã", "Fabricio", "Renato", "Mário",
    "Nelson", "Otavio", "Junior", "Juan", "Vinícius", "Eric", "Murilo", "Lauro", "Feliciano", "Hélio",
    "Gilberto", "Ismael", "Jaime", "Kennedy", "Leandro", "Mauro", "Natan", "Orlando", "Pablo", "Quirino",
    "Renan", "Silvio", "Tadeu", "Ubirajara", "Vagner", "Wellington", "Xavier", "Yago", "Zacarias", 
    "Abelardo", "Breno", "Cícero", "Djalma", "Eliseu", "Flávio", "Genaro", "Hugo", "Ícaro", "Joel",
    "Kalil", "Levi", "Miguel", "Noé", "Oziel", "Pietro", "Quintino", "Ronaldo", "Sérgio", "Túlio",
    "Ulysses", "Vicente", "Waldir", "Xanxerê", "Yago", "Zeno", "Adilson", "Bartolomeu", "Casimiro",
    "Décio", "Ezequiel","Lucas", "Gabriel", "Mateus", "Pierre", "Théo", "Louis", "Jules", "Antoine", "Paul", "Léo",
    "Hugo", "Arthur", "Alexandre", "Nathan", "Raphaël", "Tom", "Enzo", "Mathis", "Ethan", "Noah",
    "Victor", "Gabin", "Maxime", "Léon", "Simon", "Isaac", "Adrien", "Eliott", "Axel", "Marius",
    "Baptiste", "Clément", "Luc", "Evan", "Mathéo", "Quentin", "Thibault", "Samuel", "Tristan",
    "David", "Charles", "Dylan", "Valentin", "Romain", "Matthieu", "Maxence", "Nicolas", "Julien",
    "Sacha", "Julius", "Paulin", "Gauthier", "Yann", "Rémi", "Bastien", "Alexis", "Robin", "Guillaume",
    "Emmanuel", "Sylvain", "Olivier", "Cédric", "Fabien", "Pascal", "Laurent", "Vincent", "Xavier",
    "Yves", "Denis", "Régis", "Patrick", "Stéphane", "Jonathan", "Nicolas", "Stéphane", "Martin", 
    "François", "Philippe", "Jacques", "Eric", "Christophe", "Pierre-Yves", "Jérôme", "Romain", 
    "Benoît", "Jean-Philippe", "Gilles", "Thierry", "Sébastien", "Antoine", "Pierre-Louis", "Edouard", 
    "Geoffrey", "Grégoire", "Hervé", "Joël", "Olivier", "Renaud", "Thibaut", "Vincent", "Wilfried","James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas",
    "Christopher", "Daniel", "Matthew", "Anthony", "Donald", "Mark", "Paul", "Steven", "Andrew", "Kenneth",
    "Joshua", "George", "Kevin", "Brian", "Edward", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan",
    "Gary", "Nicholas", "Eric", "Stephen", "Jacob", "Larry", "Frank", "Jonathan", "Scott", "Justin",
    "Brandon", "Raymond", "Gregory", "Samuel", "Benjamin", "Patrick", "Jack", "Dennis", "Jerry", "Alexander",
    "Tyler", "Henry", "Jose", "Douglas", "Peter", "Aaron", "Walter", "Adam", "Zachary", "Nathan",
    "Harold", "Kyle", "Carl", "Roy", "Gerald", "Roger", "Keith", "Jeremy", "Terry", "Lawrence",
    "Sean", "Christian", "Albert", "Joe", "Ethan", "Austin", "Jesse", "Willie", "Billy", "Bryan",
    "Bruce", "Noah", "Jordan", "Dylan", "Alan", "Ralph", "Gabriel", "Louis", "Russell", "Carlton",
    "Victor", "Randy", "Howard", "Eugene", "Vincent", "Alex", "Isaac", "Clifford", "Dwayne", "Todd",
    "Craig", "Phillip", "Bobby", "Marvin", "Jimmy"];

function genererName(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

btn.addEventListener('click', () => {
    
    nameRandom = genererName(name.length);
    newName.textContent = name[nameRandom];

});