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

/*Okay donc Welcome est une fonction React tu peux pas changer son nom et utliser ses propirétés le navigateur
ne reconnaitra pas comme ici reconnaissait pas ma fonction quand je l'appelait testCOMPOSANT 

Et pour que le name et le children soit pris en comptes tous deux il faut impérativement des "{}" autour des deux
*/

/* Y a une autre façon d'écrire les composants React c'est en créant des qui sont extends 
de React.component et donc possède ses propriétés et fonctionnent comme les composants React
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
        this.state = {nombre: new nombre() }
        this.timer = null;
    }

    componentDidMount (){
        this.timer = window.setInterval(this.tick.bind(this), 1000)

    }

    componentWillUnmount(){
        window.clearInterval(this.timer)
    }


    tick () {
        this.setState ({nombre : new nombre() })
    }
    
    render (){
        const nombre = 0;
        return <div>
            <strong> Mon incrermentatioin {nombre}</strong>
        </div>
    }
}

/* 
    mais ça ne nous permet d'avoir quelque chose de dynamique l'heure ne bouge pour avoir quelque de dynamique qui bouge 
    sans avoir à réactualiser notre page on va utiliser ce qu'on appelle un état pour ça on aura besoin des constructeurs
*/

function Home (){
    return <div>
        <Welcome name = "Yohane" />
        <Welcome name = "@m-yohane"/>
        <Horloge />
        <Incremente />
    </div>
}

ReactDOM.render(<Home/>, document.querySelector('#appjs'))





