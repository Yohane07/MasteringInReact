//- Exercice with Grafikart

// React without JSX
/*
let i = 0;

function render(){
    const title = React.createElement('h1', {}, 'Bonjour la famille ', 
                  React.createElement('span', {}, i)
    );
    ReactDOM.render(title, document.querySelector('#appjs'));
}

// Le 'i' dans le createElement ne prend pas de '' parce que c'est une variable JS et pas un élément HTML
window.setInterval(()=>{
    i++
    render();
}, 1000);


const prenom = <span>Yohane</span>

ReactDOM.render(prenom, document.querySelector('#appsJs')) 

// REACT 3: LA SYNTAXE JSX

let i = 0;

function afficher(){
    const info = [
        'Nom',
        'Prenom',
        'Metier'

    ]
    const infos = info.map(inf =><li>{inf}</li>)
    const title = <React.Fragment>
                    <h1>Bonjour la famille
                    <span> {i} </span>
                    </h1>
                    <ul>{infos}</ul>
                  </React.Fragment>  //React.Fragment pour qu'on veut pas spécifier la nature du container
    ReactDOM.render(title, document.querySelector('#appjs'));
}

afficher();

window.setInterval(()=>{
  //  i = 2 + i augmenter de 2 en 2

    afficher();
}, 1300);

*/

// REACT 4: PREMIER COMPOSANT 


//Un composant React est une fonction qui va prendre en paramètre un propriété qu'on pourra ré-utiliser


// function testComposant(props){
//     return <h1>Je m'appelle {props.name}</h1>
// }


//Maintenant si on veut éviter parce que c'est pas hyper clair le props on reprend le nom du props directement

// function testComposant(name){
//     return <h1>Hey {name}</h1>
// }

// Les propos dans les fonctions React ont droit à des enfants: children

function testComposant({name, children}){
    return  <div>
            <h1> Hey {name}</h1>  
             <p>
                {children}
             </p>
    </div> 
}

/*Okay donc Welcome est une fonction React tu peux pas changer son nom et utliser ses propirétés le navigateur
ne reconnaitra pas comme ici reconnaissait pas ma fonction quand je l'appelait testCOMPOSANT 

Et pour que le name et le children soit pris en comptes tous deux il faut impérativement des "{}" autour des deux
*/

ReactDOM.render(< testComposant name ="Yohane">Aller t'as capté t'es un bon !</testComposant>,document.querySelector('#appjs'));
