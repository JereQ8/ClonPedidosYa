const abrirMenu= (e)=>{
    document.querySelector(".menu").classList.add("active")
    document.querySelector(".interfaz").classList.add("opacityActive")
        e.stopPropagation() 
}

const cerrarMenu= (e)=>{
    e.stopPropagation()
    if(document.querySelector(".menu").classList.contains("active")){
        document.querySelector(".menu").classList.remove("active")
        document.querySelector(".interfaz").classList.remove("opacityActive")
    }
    
}

const functions= {cerrarMenu, abrirMenu}

export default functions