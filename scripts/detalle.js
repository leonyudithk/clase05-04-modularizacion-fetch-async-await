const listar = document.getElementById('list-group')

const traerLocalStorage =()=>{
       const detalle= JSON.parse(localStorage.getItem('Detalle'))
       console.log(detalle)

       const {id, img, name, description, price} = detalle
       listar.innerHTML +=`
       <div class="card" style="width: 18rem;">
        <img src=${img} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p>${description}</p>
            <h5 >${price}</h5>
            <a  class="btnReturn btn-primary">Return</a>
        </div>
        </div>
       `
}

document.addEventListener('DOMContentLoaded', traerLocalStorage)

listar.addEventListener('click', (e)=>{
    console.log(e)
    if (e.target.classList.contains('btnReturn')){
        window.location.href="index.html"
    }
})