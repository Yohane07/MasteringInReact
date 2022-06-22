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

/*
const prenom = <span>Yohane</span>

ReactDOM.render(prenom, document.querySelector('#appsJs')) */