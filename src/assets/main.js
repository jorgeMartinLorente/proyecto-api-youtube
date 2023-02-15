const API= 'https://youtube-v31.p.rapidapi.com/search?channelId=UCgwEMRaGdGmTBn5wgj2sFQQ&part=snippet%2Cid&order=date&maxResults=50';
const content =null||document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f193b3a493msh31c2b8dabc73a43p1135b8jsndc50673414b1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlapi){
    const response = await fetch(urlapi,options);
    const data = await response.json();
    return data;
}
//funcion anonima que se llama a si misma
(async()=>{
try{
    const videos = await fetchData(API);
    let view = ` ${videos.items.map(video=>`      
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
  </div>
</div>
    `).slice(0,4).join('')} 

`;
content.innerHTML=view;
}
catch(error){console.log(error);}
})();