import "./HomeStyles.css";

function Home(props){
    return(
        <>
        <div className={props.cName}>
            {/* <img alt="HomeImg" src={"props.homeImg"}/> */}
        <div className="Home-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <h1></h1>
        </div>
        

        </div>
        </>
    )
    }

    export default Home;
