const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box"); 
const searchResult = document.getElementById("search-result");
const seeMore = document.getElementById("show-more-btn");
const apikey = "gOckf_zp7gPXxfX14FzWz3RevAo5_Yrcx1BjCTBnrp4";

let keyword = "";
let page = 1;

async function searchImage() {
   keyword = searchBox.value;
  //const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${apikey}`;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apikey}&per_page=9`;

  const response = await fetch(url);
  const data = await response.json();
if(page===1){
    searchResult.innerHTML="";
}

  const results = data.results;
  //console.log(data);
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
  seeMore.style.display="block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

seeMore.addEventListener(("click"),()=>{
    page++;
    searchImage();
})
