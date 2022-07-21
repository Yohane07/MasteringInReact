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

/*
function WelcomeFunc({name, children}){
    return  <div>
            <h1> Hey {name}</h1>  
             <p>
                {children}
             </p>
    </div> 
}

*/

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

/*
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

*/

// Une composant qui incrémente un chiffre toute les seconcdes

/*
class Incremente extends React.Component{

    constructor (props){
        super (props)
        this.state = {nombre: props.start, timer: null} // on a notre qui prend comme valeur initial le props start
        
    }

    componentDidMount (){
        this.play()

    }

    componentWillUnmount(){
        window.clearInterval(this.state.timer)
    }

*/

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

    /*
    increment () {
           this.setState ((state, props) => ({nombre :state.nombre + props.step }))
         }

    stop(){
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    } 
    
    play(){
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
        })
    }

    toggle(){
        return this.state.timer ? this.pause() : this.play()
    }

    label (){
        return this.state.timer ? 'Pause' : 'Lecture'
    }

    renitialize (){
        this.setState((state, props) => ({nombre :props.start }))
    }
        
    render (){
        return <div>
            <strong> Mon incrermentatioin {this.state.nombre} </strong>
          {/*
          CECI EST DU TERNAIRE Conditionnel: si this.state.timer tu fais un stop dans le cas contraire
          tu fais un play
          {this.state.timer ?
            <button onClick = {this.stop.bind(this)}>Pause</button> :
            <button onClick = {this.play.bind(this)}>Lire</button> }  

            <button onClick = {this.toggle.bind(this)}> {this.label()} </button>
            <button onClick = {this.renitialize.bind(this)}>Renitialize</button>
        </div>

    }
}

*/

/* 
   React nous permet de définir la valeur par defaut des props de nos composant ce qui fait 
   qu'on peut les rappeler ensuite
*/

/*
Incremente.defaultProps = {
    start : 0,
    step : 1
}

// class ButtonDincrement extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {n: 0}
//     }


//     incrementer () {
//         this.setState ((state, props) => ({n : this.state.n + 1 }))
//       }
      

//       render(){
//         return <div>
//             valeur : {this.state.n} <button onClick={this.incrementer.bind(this)}>Incrementer</button>
//         </div>
//       }
     
// }

/*
    - WARNING: Attention à comment tu appelles tes méthodes avoir plusieurs méthodes du même nom
        même s'ils ne sont pas créées dans les même contexte peut poser problème plutart et de même
        pour tout autre type de variable.

    - WARNING: Il est très sensible à la casse si y a un caractère qui traine 
        ça peut faire planter tout le reste du programme
    
    - ASTUCE: Toujours checker au niveau de la console pour voir si y a des éventuels bugs
*/

/*

function Home (){
    return <div>
        <Welcome name = "Yohane" />
        <Welcome name = "@m-yohane"/>
        <Incremente/>
    </div>
}



class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            nom:['Yohane', 'Math'],
            checked: true
        }

        this.handleChange= this.handleChange.bind(this)
        this.handleChangeRadio= this.handleChangeRadio.bind(this)

    }

    handleChangeRadio(e){
        this.setState({
            checked:e.target.checked
        })
    }
    handleChange(e){
        this.setState({
          nom : Array.from(e.target.selectedOptions).map(o=>o.value)
        })
    }

    render (){
        return <div>
            <label htmlFor="nom">Nom</label>
            <input type= "text" id= "nom" name="nom" value = {this.state.nom} onChange = {this.handleChange}/>
            <br></br>
            {JSON.stringify(this.state.nom)}
            <select value = {this.state.nom} onChange = {this.handleChange} multiple>
                <option>Math</option>
                <option>SVT</option>
                <option>Sciences Physiques</option>
            </select>
            <label htmlFor="checked">Prêt</label>
            <input type= "checkbox" id = "checked" name = "checked" value = {this.state.checked} onChange = {this.handleChangeRadio}/>
            {this.state.checked ? <div>T'es un bon viens avec nous</div>: null}
        </div>
        
    }
}

*/

// Le problème qu'on a ici c'est qu'on doit créer pour chaque champ une méthode HandleChange pour gérer les changements pas très efficace pour le coup

/* 
    On va donc utiliser l'attribut name de la balise input qui est commun à tous ces champs pour non pas suivre l'évolution d'état d'un champs 
    mais de l'état de l'attribut name dans tous les champs
*/

/* 
class Field extends React.Component{
    render (){
        const {name, value, onChange, children} = this.props
        return <div className= "form-group">
            <label htmlFor={name}>{children}</label>
            <input type="text" value ={value} onChange={onChange} id={name} name={name} className= "form-control"/>
        </div>
    }
}

On peut écrire ça dans une fonction
 */

function Field ({name, value, onChange, children}){
        return <div className= "form-group">
            <label htmlFor={name}>{children}</label>
            <input type="text" value ={value} onChange={onChange} id={name} name={name} className= "form-control"/>
        </div>
}

function Checkbox ({name, value, onChange, children}){
    return <div className= "form-check">
        <input type="checkbox"  checked={value} onChange={onChange} id={name} name={name} className= "form-check-input"/>
        <label htmlFor={name} className ="form-check-label">{children}</label>
    </div>
}

class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            nom:'',
            prenom:'',
            newsletter: false
        }

        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }


    handleChange(e){
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked :  e.target.value
        this.setState({
            [name]:value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const data = JSON.stringify(this.state);
        console.log(data);
        this.setState({
            nom:'',
            prenom:'',
            newsletter: false //Pour réinitialiser les résultats
        })
    }

    /*
    render (){
        return <div>
            <div>
                <label htmlFor="nom">Nom</label>
                <input type= "text" id= "nom" name="nom" value = {this.state.nom} onChange = {this.handleChange}/>
            </div>
            <div> 
                <label htmlFor="prenom">Prénom</label>
                <input type= "text" id= "prenom" name="prenom" value = {this.state.prenom} onChange = {this.handleChange}/>
            </div>
            <div>
                <label htmlFor="newsletter">S'abonner à notre newsletter</label>
                <input type= "checkbox" id = "newsletter" name = "newsletter" checked = {this.state.newsletter} onChange = {this.handleChange}/>
            </div>
            {this.state.newsletter ? <div>T'es un bon viens avec nous</div>: null}
            {JSON.stringify(this.state)}
        </div>
        
    }

    // - Y a une autre façon de créer des formulaires c'est de faire des classes contenant une structure de base qu'on pourra reprendre 

    */

    render (){
        console.log('render')
        return <form className = "container" onSubmit={this.handleSubmit}>
                <Field name="nom" value={this.state.nom} onChange = {this.handleChange}> Nom </Field>
                <Field name="prenom" value={this.state.prenom} onChange = {this.handleChange}> Prénom</Field>
                <Checkbox name="newsletter" value={this.state.newsletter} onChange = {this.handleChange}>S'abonner à la newsletter</Checkbox>
                <div className = "form-group">
                    <button className="btn btn-primary">Envoyer</button>
                </div>
            {this.state.newsletter ? <div>T'es un bon viens avec nous</div>: null}
            {JSON.stringify(this.state)}
        </form>
        
    }




}

ReactDOM.render(<Home/>, document.querySelector('#appjs'))