import { getData } from "./getData.js"

const urlUser ='https://f10-api.herokuapp.com/users/'

const tbody = document.querySelector('tbody')
const formulario = document.querySelector('form')

const mostrarUsuario = async () => {
    let data= await getData(urlUser)
    console.log(data)

    data.forEach(element =>{
      tbody.innerHTML +=`
      <tr>
      <td><img src="${element.url}" width="50"></td>
      <td>${element.name}</td>
      <td>${element.email}</td>
      <td>${element.description}</td>
      <td>
      <a id=${element.id} class="btn btn-danger">Eliminar</a></td>
      </tr>
      `  
    })
}

document.addEventListener('DOMContentLoaded', mostrarUsuario)

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();
    const url = document.getElementById('inputUrl').value;
    const name = document.getElementById('inputNombre').value;
    const email = document.getElementById('inputCorreo').value;
    const description = document.getElementById('inputDescripcion').value;

    const valid = await validEmail(email)
    
    if(valid){
        alert(`Ya existe un usuario con el correo ${email}`)
    }else{
        const obj = {
            url,
            name,
            email,
            description
        }
    
        await fetch(urlUser,{
            method: 'POST',
            body: JSON.stringify(obj),
            headers:{
                "Content-Type": "application/json; charset=utf-8"
            }
        })
    }
})

const validEmail = async(email) => {
    
    
    const data = await getData(urlUser)
    const result = data.find(dat => dat.email=== email)
    if(result === undefined){
        return false
    }
    else{
        return true
    }
}


tbody.addEventListener('click', async(e) => {
    const btnDelete = e.target.classList.contains('btn-danger');
    const id = e.target.id;
    if(btnDelete){
       
       await fetch(urlUser+id,{
           method: 'DELETE'
       })


    }
})