function Search() {
    let textSearch = document.getElementById("text-to-search").value;
    let para = document.getElementById("paragraph");
   
    textSearch = textSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    let pattern = new RegExp(`${textSearch}`, "gi");

    para.innerHTML = para.textContent.replace(pattern, match => `<mark>${match}</mark>`);
}