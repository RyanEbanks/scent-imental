const newFormHandler = async function(event) {
    event.preventDefault();
  
    const stars = document.querySelector('input[name="star-rating"]').value;
    const body = document.querySelector('textarea[name="review-body"]').value;
    const path = JSON.stringify(window.location.pathname);
    const product = path.substring(path.lastIndexOf('/') + 1);
    const prodId = product.split('"')[0];
    console.log(prodId);
  
    await fetch(`/api/review`, {
      method: 'POST',
      body: JSON.stringify({
        review_description: body,
        rating: stars,
        product_id: prodId,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.reload();
  };
  
  document
    .querySelector('#new-review-form')
    .addEventListener('submit', newFormHandler);