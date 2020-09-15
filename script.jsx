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
                {console.log(this.state.currentPage)}
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
                   
                    

                </div>
    )

    return(
        bg
    )
}

function App(){
    return(
        <Header />
    )
}

ReactDOM.render(
    <App /> , document.getElementById("root")
)