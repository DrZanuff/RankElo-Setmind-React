class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = { currentPage : elements.Wolf }
    }

    clicked(value){
        this.setState( {currentPage : value} )
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
                    <ul id="bar" className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <button
                        type="button" name="button" className="btn btn-dark"
                        onClick={ () => { this.clicked(elements.Wolf) } }>
                        Lobo</button>
                    </li>

                    <li className="nav-item">
                        <button
                        type="button" name="button" className="btn btn-dark"
                        onClick={ () => { this.clicked(elements.Eagle) } }>
                        Águia</button>
                    </li>

                    <li className="nav-item">
                        <button
                        type="button" name="button" className="btn btn-dark"
                        onClick={ () => { this.clicked(elements.Bear) } }>
                        Urso</button>
                    </li>

                    <li className="nav-item">
                        <button
                        type="button" name="button" className="btn btn-dark"
                        onClick={ () => { this.clicked(elements.Lion) } }>
                        Leão</button>

                    </li>

                    <li className="nav-item">
                        <button
                        type="button" name="button" className="btn btn-dark"
                        onClick={ () => { this.clicked(elements.Dragon) } }>
                        Dragão</button>
                    </li>

                    </ul>
                </div>

            </nav>

            <div>
                <Page value={this.state.currentPage} />
            </div>

        </div>

        )
    }
}

var elements = {
    Wolf   : {bg:"img/bg/Wolf.png"   , badge:"img/badges/Wolf.png"   , title:"img/titles/Wolf.png"  },
    Eagle  : {bg:"img/bg/Eagle.png"  , badge:"img/badges/Eagle.png"  , title:"img/titles/Eagle.png" },
    Bear   : {bg:"img/bg/Bear.png"   , badge:"img/badges/Bear.png"   , title:"img/titles/Bear.png"  },
    Lion   : {bg:"img/bg/Lion.png"   , badge:"img/badges/Lion.png"   , title:"img/titles/Lion.png"  },
    Dragon : {bg:"img/bg/Dragon.png" , badge:"img/badges/Dragon.png" , title:"img/titles/Dragon.png"}
}

var sampleData  = {
   Wolf : [
    ["Guilherme de Almeida", 1508],
    ["Fernando Siqueira", 500],
    ["Atila Douglas", 350],
   ],
   Eagle : [
    ["Bruno Souza", 300],
    ["Paulo Couto", 250],
    ["Dominick Williams", 100]
   ]
}

function Page(props){

    const bg = (
                <div className="bg">
                    <div className="line">
                        <hr/>
                    </div>
                    <img className="bgImg" src={props.value.bg} />
                    <div className="badge" >
                        <img src={props.value.badge} />
                    </div> 
                    <div className="title">
                        <img src={props.value.title} />
                    </div>
                    <LineElement pos={"Up"}/>
                    <TitleElement />
                    <LineElement pos={"Bot"}/>
                    <DataBody />
                   
                    

                </div>
    )

    return(
        bg
    )
}

function LineElement(props){
    return(
    <div className={ props.pos == "Up" ? "titleLineUp" : "titleLineBot"}>
         <hr/>
     </div>
    )
}

function TitleElement(){
    return(
        <div className="title-bar font">
            <h1>#</h1>
            <h1>Nome</h1>
            <h1>Pontos</h1>
        </div>
    )
}

function DataBody(){
    return(
        <div className="dataBody">
           {generateTemplate()}
        </div>
    )
}

function Entry(props){
    return(
        <div className={"entry " + props.value}>
            <h1>#</h1>
            <h1>Nome</h1>
            <h1>Pontos</h1>
            <hr className="bgline" />
        </div>
    )
}

function generateTemplate(){
    let content = []
    for (let i = 0; i < 48 ; i++){
        if (i % 2 == 0){
            content.push(<Entry key={i} value="strong"/>)
        }
        else{
            content.push(<Entry key={i} value="light" />)
        }
    }

    return content
}

class App extends React.Component{

    componentDidMount(){
        let total = $(".dataBody").height()
        let size = $(".entry").length
        $(".entry").height((total/size)*58)
        const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
        let fontSize = clampNumber( (total/size) * 40 , 30 , 50)
        $(".entry>h1").css("font-size",fontSize)
        $(".bgline").css("top", (size/2) )
    }

    render(){
        return(
            <Header />
        )
    }
}

ReactDOM.render(
    <App /> , document.getElementById("root")
)