fetch('https://api.themoviedb.org/3/movie/popular?api_key=a335f2dc18b8a1745af3b20cad14a9e7',{
    method: 'GET'
})
.then(response => response.json())
.then(function (json) { 
    var diferenciais = document.querySelector('.box-diferenciais')
    var filme = json.results[0];

        diferenciais.innerHTML += `
 
        <div class="linha-imagens">
            <div class="imagem">
                <img src="https://image.tmdb.org/t/p/w200/gPbM0MK8CP8A174rmUwGsADNYKD.jpg" alt="${filme.title}" title="${667538}">
                <div class="tituloFilme">
                <br />
                   <h3>Transformers: Rise of the Beasts</h3>
                    <p>2023, USA, ACTION</p>
                    <img src="../images/RATE.svg" />
                </div>
            </div>
            <div class="imagem">
            <img src="https://image.tmdb.org/t/p/w200//rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg" alt="${filme.title}" title="${298618}">
            <div class="tituloFilme">
            <br />
                <h3>The Flash</h3>
                <p>2023, USA, ACTION</p>
                <img src="../images/RATE.svg" />
            </div>
        </div>
        <div class="imagem">
            <img src="https://image.tmdb.org/t/p/w200//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" alt="${filme.title}" title="${346698}">
            <div class="tituloFilme">
             <br />
                <h3>Barbie</h3>
                <p>2023, USA, COMEDY</p>
                <img src="../images/RATE.svg" />
            </div>
        </div>
        <div class="imagem">
            <img src="https://image.tmdb.org/t/p/w200/d07phJqCx6z5wILDYqkyraorDPi.jpg" alt="${filme.title}" title="${614479}">
            <div class="tituloFilme">
            <br />
                <h3>Insidious: The Red Door</h3>
                <p>2023, USA, HORROR</p>
                <img src="../images/RATE.svg" />
            </div>
        </div>
        <div class="imagem">
            <img src="https://image.tmdb.org/t/p/w200/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg" alt="${filme.title}" title="${615656}">
            <div class="tituloFilme">
             <br />
                <h3>Meg 2: The Trench</h3>
                <p>2023, USA , ACTION</p>
                <img src="../images/RATE.svg" />
            </div>
        </div>
        <div class="imagem">
            <img src="https://image.tmdb.org/t/p/w200/mvjqqklMpHwOxc40rn7dMhGT0Fc.jpg" alt="${filme.title}" title="${1006462}">
            <div class="tituloFilme">
            <br />
                <h3>The Flood</h3>
                <p>2023, USA, ACTION</p>
                <img src="../images/RATE.svg" />
            </div>
        </div>
            
        </div>
    

        `
 })
