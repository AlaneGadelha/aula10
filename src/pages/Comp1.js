

function Comp1(){
    let nome = "Plinio"
    return(
        <>
            <div style = {{background:"white",width:"500px",height:"500px",margin:"50px"}}></div>
            {nome}
            <Comp2 nome={nome}/>
        </>

    )
}
function Comp2({nome}){
    return(
        <div style = {{background:"green",width:"400px",height:"400px",margin:"50px"}}>
            <p>Componente2</p>
            <Comp3 nome={nome}/>


        </div>
    )
}
function Comp3({nome}){
    return(
        <div style = {{background:"red",width:"300px",height:"300px",margin:"50px"}}>
             <Comp4 nome={nome}/>
        </div>
       
    )
}
function Comp4({nome}){
    return(
        <div style = {{background:"yellow",width:"200px",height:"200px",margin:"50px"}}>
            {nome}
        </div>
    )
}

export default Comp1