function upDate(previewPic) {
    let imageDiv = document.getElementById("image");

    // Change background image
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;

    // Change text
    imageDiv.innerHTML = previewPic.alt;

    // Create a temporary image to get dimensions
    let tempImg = new Image();
    tempImg.src = previewPic.src;
    tempImg.onload = function() {
        let aspectRatio = tempImg.width / tempImg.height;
        imageDiv.style.height = `${imageDiv.clientWidth / aspectRatio}px`;
    };

    // Ensure background fits properly
    imageDiv.style.backgroundSize = "contain"; // Keep the entire image visible
    imageDiv.style.backgroundPosition = "center";
    imageDiv.style.backgroundRepeat = "no-repeat";

    console.log(`Updated to: ${previewPic.alt}`); // ✅ Debugging log
}

function unDo() {
    let imageDiv = document.getElementById("image");

    // Reset background image
    imageDiv.style.backgroundImage = "url('')";

    // Reset text
    imageDiv.innerHTML = "Hover over an image to display here.";

    // Reset height (optional: can adjust to default height)
    imageDiv.style.height = "650px"; // Default size from CSS

    console.log("Reset image display."); // ✅ Debugging log
}

// ✅ Function to add tab focus attributes on page load
function initializeGallery() {
    let images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
    console.log("Gallery initialized with tabindex.");
}
