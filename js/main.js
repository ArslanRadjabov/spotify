const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'genius.p.rapidapi.com',
		'X-RapidAPI-Key': '8409f6ed98mshd938d5590f2a1e9p10e83bjsnf3ba60781090'
	}
};

let elbox = document.getElementById('list');
function getItem() {   
    fetch('https://genius.p.rapidapi.com/artists/16775/songs', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            response.response.songs.forEach(el => {
                
                let li = document.createElement('li');
                li.className = 'demo__item col-4'
                li.innerHTML=`
                <div class="box">
                <img src="${el.header_image_url}" alt="">
                <div class="box">
                  <h4 class="title">${el.artist_names}</h4>

                </div>
              </div>
    
                `  
                elbox.appendChild(li)
            });
        })

}
getItem()