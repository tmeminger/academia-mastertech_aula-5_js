let numero = [5, 7, 9, 0];
let pessoa = {
    nome: 'Jose',
    idade: 15
};


// for (let chave in pessoa){
//     console.log(chave + ' :' + pessoa[chave]);
// }

// pessoa.nome;
// pessoa ['nome'];

// for (let propriedade in pessoa){
//     console.log 
// }

let filmes = [
    {titulo : 'Ilha do Medo', classificação: 18, sessoes: ['13:00', '15:00']},
    {titulo : 'Glória Feita de Sangue', classificação: 18, sessoes: ['13:00', '15:00']},
    {titulo : 'Submarino', classificação: 16, sessoes: ['13:00', '15:00']},
    {titulo : 'Agora', classificação: 16, sessoes: ['13:00', '15:00']},
    {titulo : 'Laranja Mecânica', classificação: 18, sessoes: ['13:00', '15:00']},
    {titulo : 'Donnie Darko', classificação: 16, sessoes: ['13:00', '15:00']},
    {titulo : 'Homem Aranha no Aranhaverso', classificação: 12, sessoes: ['13:00', '15:00']},
    {titulo : 'Interstellar', classificação: 10, sessoes: ['13:00', '15:00']},
    {titulo : 'Kubo e As Cordas Mágicas', classificação: 12, sessoes: ['13:00', '15:00']},
];

let idade = Number (prompt('Digite sua idade (sem mentir):'));

for(let filme of filmes){
    if (idade >=filme.classificação){
        console.log(filme.titulo);
        console.log(filme.sessoes[0]);
    }
    
}
