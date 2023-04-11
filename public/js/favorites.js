const addFavoritesHandler = async (event) => {
    event.preventDefault();
  
    const path = JSON.stringify(window.location.pathname);
    const product = path.substring(path.lastIndexOf('/') + 1);
    const prodId = product.split('"')[0];
    console.log(prodId);
   
    const response = await fetch("/api/favorite/", {
        method: "POST",
        body: JSON.stringify({ product_id: prodId }),
        headers: { "Content-Type": "application/json" },
    });

};

const deleteFavoritesHandler = async (event) => {
    event.preventDefault();

    const delete_id = document.getElementById("data-id");
    // console.log(deleteIdPath);
    // const deleteProduct = deleteIdPath.substring(deleteIdPath.lastIndexOf('/') + 1);
    // console.log(deleteProduct);

    await fetch('/api/favorite', {
    method: "DELETE",
    body: JSON.stringify({ delete_id: delete_id }),
    });  
};
  
document
    .querySelector("#update-favorites")
    .addEventListener("submit", addFavoritesHandler);
document
    .querySelector("#delete-favorites")
    .addEventListener("submit", deleteFavoritesHandler);