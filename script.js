
const getMovie =  async () =>{

    const fatch = await fetch("./catalago.json");
    let response = await fatch.json();
 
    const div = document.querySelector(".container")


    response.forEach(e => {
        console.log(insertMovie(e));

        const item = document.createElement("div");          

        item.innerHTML = `
        <div class="movie"> 
                
        <img src="${e.img}" />
        
        <h2> ${e.moviename}<h2/>

        <div/>
        
        `

        div.appendChild(item)
        
    });
   
}


const insertMovie = (index) =>{
    
    const movie = []


    movie.id = index.id
    movie.name = index.moviename
    movie.img = index.img
   
   return movie;
}




getMovie()