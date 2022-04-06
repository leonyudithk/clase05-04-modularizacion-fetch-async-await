import { getData } from "./getData.js"
import ListarApi from "./ListarApi.js"

const api= "https://f10-api.herokuapp.com/products/"

const listarProductos = document.querySelectorAll('.list-group')

document.addEventListener('DOMContentLoaded', async()=> {
    //1- leer la api fetch
   const arrayProductos= await getData(api)
   
    //2- listar lo que traje de la api
    ListarApi(arrayProductos, listarProductos)
})

listarProductos[0].addEventListener('click', async (e)=>{
     const idBoton= e.target.id

    if(idBoton){
        const data = await getData(api)
        const DetalleProducto = data.find(array =>array.id === Number(idBoton))
        console.log(DetalleProducto)
        localStorage.setItem('Detalle', JSON.stringify(DetalleProducto))
        window.location.href= 'detail.html'
    }
})

