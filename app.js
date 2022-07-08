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

function WelcomeFunc({name, children}){
    return  <div>
            <h1> Hey {name}</h1>  
             <p>
                {children}
             </p>
    </div> 
}

// ReactDOM.render(<Welcome name ="Yohane">Aller t'as capté t'es un bon !</Welcome>,document.querySelector('#appjs'));

/* - Welcome est une fonction React tu peux pas changer son nom et utliser ses propirétés le navigateur
ne reconnaitra pas comme ici reconnaissait pas ma fonction quand je l'appelait testCOMPOSANT 

Et pour que le name et le children soit pris en comptes tous deux il faut impérativement des "{}" autour des deux
*/

/*  
    - Y a une autre façon d'écrire les composants React c'est en créant des qui sont extends 
    de React.component et donc possède ses propriétés et fonctionnent comme les composants React

    - Super(props) permet d'appeler la méthode parent si tu l'oublies le "constructor" ne fonctionnera 
    pas

    - Pour que l'état d'un composant change on va avoir ce qu'on appelle le cycle de vie d'un composant
    ce qui permet d'actualiser nos éléments sans raffraîchir la page

    - Donc ce cycle de vie a trois phase et fonctionne donc avec le temps ou timer qui est null au départ
       -Pour le premier cycle quand le composant(component) n'est oas encore montées
        "this.timer = null";

       -la phase componentDidMount quand le component a été monté et c'est quand met l'intervak:
        "this.timer = window.setInterval(this.tick.bind(this), 1000)"

       -la phasecomponentWillUnmount quand le component est démontée il faut suppprimer l'intervalle 
       sauvegardé dans la variable timer:
       window.clearInterval(this.timer)

       -Et enfin pour changer l'état de cet composant on a besoin d'une méthode qui va renvoyer le 
       nouvel état du composant utilisant "setSate" et prenant en paramètre un objet représentant 
       le nouvel état :

       tick (){
            this.setState = {date: new Date()}
       }

    - Le bind parceque le contexte de this sera perdu étant donné qu'on a changé le contexte du this dans lequel
    notre méthode a été appelé. 


    - Mais ça ne nous permet d'avoir quelque chose de dynamique l'heure ne bouge pour avoir 
      quelque de dynamique qui bouge sans avoir à réactualiser notre page on va utiliser 
      ce qu'on appelle un état pour ça on aura besoin des constructeurs


*/

class Welcome extends React.Component{

    render() {
        return <div>
           <h1>Bonjour {this.props.name}</h1>
        <p>
            {this.props.children}
        </p>
        </div>
    }
}

class Horloge extends React.Component{

    constructor (props){
        super(props)
        this.state = {date: new Date()}
        this.timer = null;
    }

    componentDidMount (){
        this.timer = window.setInterval(this.tick.bind(this), 1000)

    }

    componentWillUnmount(){
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState ({date: new Date()})
    }



    render() {
        const date = new Date();

        return <div>
            <p>
                Nous sommes le {date.toLocaleDateString()} et il est exactement {date.toLocaleTimeString()}
            </p>
        </div>
    }
   
    
}


// Une composant qui incrémente un chiffre toute les seconcdes


class Incremente extends React.Component{

    constructor (props){
        super (props)
        this.state = {nombre: props.start } // on a notre qui prend comme valeur initial le props start
        this.timer = null;
    }

    componentDidMount (){
        this.timer = window.setInterval(this.increment.bind(this), 1000)

    }

    componentWillUnmount(){
        window.clearInterval(this.timer)
    }


    /* 
     
     Cette methode peut causer des problèmes parce que React est capable d'appeler les éléments 
     à la chaine
    Il est donc recommandé de faire d'écrire cela dans une méthode !!

    increment () {
        this.setState (
            function(state, props){
           return {nombre : state.nombre + 1}
        })
    }

   
     */

    increment () {
           this.setState ((state, props) => ({nombre : this.state.nombre + 1 + props.step }))
         }
        
    render (){
        return <div>
            <strong> Mon incrermentatioin {this.state.nombre}</strong>
        </div>
    }
}

/* 
   React nous permet de définir la valeur par defaut des props de nos composant ce qui fait 
   qu'on peut les rappeler ensuite
*/

Incremente.defaultProps = {
    start : 0,
    step : 1
}

class ButtonDincrement extends React.Component {
    constructor(props){
        super(props)
        this.state = {n: 1}
    }

    increment () {
        this.setState(
            function(state, props){
                return {nombre : state.nombre + 1}
            }
        )
    }

      render(){
        return <div>
            valeur : {this.state.n} <button onClick={this.increment.bind(this)}>Incrementer</button>
        </div>
      }
     
}



function Home (){
    return <div>
        <Welcome name = "Yohane" />
        <Welcome name = "@m-yohane"/>
        <ButtonDincrement/>
    </div>
}

ReactDOM.render(<Home/>, document.querySelector('#appjs'))





