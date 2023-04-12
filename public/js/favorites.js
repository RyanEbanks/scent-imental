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

    const deleteButton = document.getElementById("delete-button");
    const delete_id = deleteButton.getAttribute("data-id");
    console.log(delete_id);


    const response = await fetch(`/api/favorite/${delete_id}`, {
    method: "DELETE",
    body: JSON.stringify({ product_id: Number(delete_id) }),
    });  
};
  
// document
//     .querySelector("#update-favorites")
//     .addEventListener("submit", addFavoritesHandler);
document
    .querySelector("#delete-favorites")
    .addEventListener("submit", deleteFavoritesHandler);