function loadImgs(){

}

class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = { 
            currentPage : elements.Wolf,
            error : null,
            isLoaded : false,
            data : {},
            bgLoaded: false,
            progress: 0,
            bg: null,
            badge : null,
            title : null
        }
        this.bgRef = React.createRef();
        this.badgeRef = React.createRef();
        this.titleRef = React.createRef();
    }

    componentDidMount(){
        fetch("https://script.google.com/macros/s/AKfycbxzZmE--TzcbE6VnHaFGjbjwwXXeVQ6U4jiSbNcDIZGq83NBSUN/exec")
        .then( response => response.json() )
        .then( result =>{ this.setState( {isLoaded : true, data : result } ) }
        )

        this.loadImgs()
    }

    loadImgs(){
        this.setState( { progress : 0 } )

        //LOAD BG
        const imgBg = new Image()
        imgBg.src = this.state.currentPage.bg
        imgBg.onload = () => {
            this.setState( {progress : this.state.progress+1 , bg : imgBg} )
            this.bgRef.current = imgBg
            this.checkProgress()
        }
        //LOAD BADGE
        const imgBadge = new Image()
        imgBadge.src = this.state.currentPage.badge
        imgBadge.onload = () => {
            this.setState( {progress : this.state.progress+1 , badge : imgBadge} )
            this.badgeRef.current = imgBadge
            this.checkProgress()
        }

        //LOAD TITLE
        const imgTitle = new Image()
        imgTitle.src = this.state.currentPage.title
        imgTitle.onload = () => {
            this.setState( {progress : this.state.progress+1 , title : imgTitle} )
            this.titleRef.current = imgTitle
            this.checkProgress()
        }
    }

    checkProgress(){
        console.log(this.state.progress)
        if(this.state.progress == 3){
            this.setState( { bgLoaded : true } )
        }
    }

    clicked(value){
        this.setState( {currentPage : value , bgLoaded : false } )
        this.loadImgs()
    }

    // bgHasLoaded(){
    //     console.log("Entrei aqui! bgHasLoaded")
    //     this.setState( {bgLoaded : true} )
    // }

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
                {
                this.state.isLoaded
                ?
                <div>
                    {this.state.bgLoaded == true && <Page 
                                                    value={this.state.currentPage}
                                                    data={this.state.data}
                                                    fileBg={this.state.bg}
                                                    fileBadge={this.state.badge}
                                                    fileTitle={this.state.title}
                                                    /*fileBg={this.bgRef}
                                                    fileBadge={this.badgeRef}
                                                    fileTitle={this.titleRef} */
                                                    />}
                    {
                    this.state.bgLoaded == false &&
                    <div className="d-flex justify-content-center">
                        {console.log("Spin Aqui!")}
                        <div id="spinLoad" className="spinner-grow text-light" role="status" />
                    </div>
                    }
                </div>
                :
                <div id="spin">
                    <div className="spinner-border text-light" role="status" />
                </div>
                
                }
                
            </div>

            </div>

        )
    }
}

var elements = {
    Wolf   : {bg:"img/bg/Wolf.png"   , badge:"img/badges/Wolf.png"   , title:"img/titles/Wolf.png"  , name:"Wolf"  },
    Eagle  : {bg:"img/bg/Eagle.png"  , badge:"img/badges/Eagle.png"  , title:"img/titles/Eagle.png" , name:"Eagle" },
    Bear   : {bg:"img/bg/Bear.png"   , badge:"img/badges/Bear.png"   , title:"img/titles/Bear.png"  , name:"Bear"  },
    Lion   : {bg:"img/bg/Lion.png"   , badge:"img/badges/Lion.png"   , title:"img/titles/Lion.png"  , name:"Lion"  },
    Dragon : {bg:"img/bg/Dragon.png" , badge:"img/badges/Dragon.png" , title:"img/titles/Dragon.png", name:"Dragon"}
}

class Page extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
                <div className="bg">
                    <div className="line">
                        <hr/>
                    </div>
                    {/*props.fileBg*/}
                    <img className="bgImg" src={props.value.bg} />
                    {/* <ImageRef vanillaChildren={props.fileBg} /> */}
                    <div className="badge" >
                        {/*props.fileBadge*/}
                        <img src={props.value.badge} />
                        {/* <ImageRef vanillaChildren={props.fileBadge} /> */}
                    </div> 
                    <div className="title">
                        <img src={props.value.title} />
                        {/* <ImageRef vanillaChildren={props.fileTitle} />*/}
                    </div>
                    <LineElement pos={"Up"}/>
                    <TitleElement />
                    <LineElement pos={"Bot"}/>
                    <DataBody data={props.data[props.value.name]} size={ formatEntrySize(props.data[props.value.name].length )}/>
                   
                    

                </div>
            )
    }   
    
}

class ImageRef extends React.Component{
    
    render(){
        return(  <img ref={  ref => ref.appendChild(this.props.vanillaChildren)  } />  )
    }

}

// function showSpin(visible){
//     if (visible){
//         $("#spinLoad").css("display","unset")
//         $(".bg").children().hide()
//     }
//     else{
//         $("#spinLoad").css("display","none")
//         $(".bg").children().show()
//     }
// }

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

class DataBody extends React.Component{
    constructor(props){
        super(props);
    }
    

    render(props){
        return(
            <div className="dataBody">
                {generateTemplate(this.props.data , this.props.size)}
            </div>
        )
    }
}

function Entry(props){
    return(
        <div style={ {height:props.h} } className={"entry " + props.value}>
            <h1 style={ {fontSize:props.fontsize} } >{props.pos}</h1>
            <h1 style={ {fontSize:props.fontsize} }  >{props.name}</h1>
            <h1 style={ {fontSize:props.fontsize} } >{props.points}</h1>
            <img className="bgImgLine" src="img/bgline.png" />
        </div>
    )
}

function generateTemplate(data , size){
    let content = []
    for (let i = 0; i < data.length ; i++){
        if (i % 2 == 0){
            content.push(
                <Entry
                key={i}
                pos={i+1}
                name={data[i][0]}
                points={data[i][1]}
                value="strong"
                h={ size.height }
                fontsize={size.fontSize} />
            )
        }
        else{
            content.push(
            <Entry
            key={i}
            pos={i+1}
            name={data[i][0]}
            points={data[i][1]}
            value="light"
            h={ size.height }
            fontsize={size.fontSize} />
            )
        }
    }

    return content
}


function formatEntrySize(len){
    let total = 1300
    let size = len
    const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

    let styles = {height:(total/size) , fontSize : clampNumber( (total/size) * 40 , 30 , 50)  }
    return styles 
}

class App extends React.Component{

    render(){
        return(
            <Header />
        )
    }
    
}

ReactDOM.render(
    <App /> , document.getElementById("root")
)