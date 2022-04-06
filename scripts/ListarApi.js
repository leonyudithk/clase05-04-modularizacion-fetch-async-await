const ListarApi = async (arrayProductos, pintarHTML) => {
   
    console.log(pintarHTML[0])

   // const arrayP= await arrayProductos

   // console.log(arrayP)

   arrayProductos.forEach((producto) => {
    const { id, name, img } = producto;

    pintarHTML[0].innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src=${img} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <a id=${id} class="btnDetalle btn-primary">Detalle</a>
        </div>
        </div>
        `;
  });
};

export default ListarApi;
