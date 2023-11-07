"use strict";

class Gallery {
  constructor() {
    this.images = document.querySelectorAll(".elements li img");
    this.bigImagesContainer = document.querySelector(".big_img ul");
    this.init();
  }

  init() {
    this.images.forEach((image) => {
      image.addEventListener("click", () => this.handleImageClick(image));
    });
  }

  handleImageClick(image) {
    const bigImage = document.createElement("img");
    bigImage.src = image.getAttribute("data-image");
    this.bigImagesContainer.innerHTML = "";
    this.bigImagesContainer.appendChild(bigImage);

    this.images.forEach((img) => img.classList.remove("active"));
    image.classList.add("active");
  }
}

const gallery = new Gallery();
