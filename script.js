function scrollToElement(elementSelector, instance = 0){
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the request
    if (elements.length > instance){
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");

link1.addEventListener('click', () =>{
    scrollToElement('.container-glass', 1);
});

/*Pixel Background*/
