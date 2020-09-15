class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = { currentPage : "Wolf" }
    }

    clicked(value){
        this.setState( {currentPage : value} )
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="">
                    <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <button
                        type="button" name="button" className="btn btn-dark"
                        onClick={ () => { this.clicked("Wolf") } }>
                        Lobo</button>
                    </li>

                    <li className="nav-item">
                        <button
                        type="button" name="button" className="btn btn-dark"
                        onClick={ () => { this.clicked("Eagle") } }>
                        Águia</button>
                    </li>

                    <li className="nav-item">
                        <button
                        type="button" name="button" className="btn btn-dark">
                        Urso</button>
                    </li>

                    <li className="nav-item">
                        <button
                        type="button" name="button" className="btn btn-dark">
                        Leão</button>

                    </li>

                    <li className="nav-item">
                        <button
                        type="button" name="button" className="btn btn-dark">
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

function Page(props){

    const bg = ( function(){
        switch (props.value){
            case "Wolf":
                return(
                    <h1>LOBO</h1>
                )
            case "Eagle":
                return(
                    <h1>Aguia</h1>
                )
        }
    }
    )()

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