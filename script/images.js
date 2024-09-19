const mainProductImage = document.querySelector(".js-product-picture");

// lightbox interactions

function openAndClose(){
  mainProductImage.addEventListener("click",() => {
    if (window.innerWidth > 450) {
      document.querySelector(".lightbox-container").style.display = "flex";
    }
  });

  document.querySelector(".close")
    .addEventListener("click",() => {
      document.querySelector(".lightbox-container").style.display = "none";
    });
}

// swtitching pictures 
function switchingPicHome(){
  const thumbnails = document.querySelectorAll(".js-product-thumbnail")
  thumbnails.forEach((thumbnail) => {
   thumbnail.addEventListener('click',() => {
      const newSrc = thumbnail.src.replace("-thumbnail","");
     mainProductImage.src = newSrc;
      document.querySelector(".product-picture-lightbox").src = newSrc;
    })
  });
}


// switchiing pictures in lightbox    and in mobile devices home page 

function prevNext() {
  const thumbnails = document.querySelectorAll(".js-product-thumbnail-lightbox");
  const mainProductImage = document.querySelector(".js-product-picture-lightbox");
  const mainProductMobileSize = document.querySelector(".js-product-picture");
  let currentIndex = 0; // Track the current index

  thumbnails.forEach((element, index) => {
    element.addEventListener("click", () => {
      const newSrc = element.src.replace("-thumbnail", "");
      mainProductImage.src = newSrc;
      mainProductMobileSize.src = newSrc;
      currentIndex = index; // Update the current index
      console.log(currentIndex); // For debugging
    });
  });

  // Next button functionality for lightbox (looping back to index 0)
  document.querySelector(".js-next-lightbox")
    .addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % thumbnails.length; // Loop back to 0 when reaching the end
      const element = thumbnails[currentIndex];
      const newSrc = element.src.replace("-thumbnail", "");
      mainProductImage.src = newSrc;
      console.log(currentIndex); // For debugging
    });

  // Previous button functionality for lightbox (looping to the last index)
  document.querySelector(".js-prev-lightbox")
    .addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length; // Loop back to last when at index 0
      const element = thumbnails[currentIndex];
      const newSrc = element.src.replace("-thumbnail", "");
      mainProductImage.src = newSrc;
      console.log(currentIndex); // For debugging
    });

  // Next button functionality for mobile (looping back to index 0)
  document.querySelector(".js-next-mobile")
    .addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % thumbnails.length; // Loop back to 0 when reaching the end
      const element = thumbnails[currentIndex];
      const newSrc = element.src.replace("-thumbnail", "");
      mainProductMobileSize.src = newSrc;
      console.log(currentIndex); // For debugging
    });

  // Previous button functionality for mobile (looping to the last index)
  document.querySelector(".js-prev-mobile")
    .addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length; // Loop back to last when at index 0
      const element = thumbnails[currentIndex];
      const newSrc = element.src.replace("-thumbnail", "");
      mainProductMobileSize.src = newSrc;
      console.log(currentIndex); // For debugging
    });
}




// make the cart icon interactive 
function openAndCloseCartInfo(){
  let cartInfo = false;
  document.querySelector(".cart-icon") 
    .addEventListener("click", () => {
      if(!cartInfo){
        document.querySelector(".cart-info").style.display = "block";
        cartInfo = true;
      }else{
        document.querySelector(".cart-info").style.display = "none";
        cartInfo = false;
      }
  });
}

switchingPicHome();
openAndClose();
prevNext();
openAndCloseCartInfo();




  

  