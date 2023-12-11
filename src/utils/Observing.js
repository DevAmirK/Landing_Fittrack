/*
  #######
  This function is responsible for adding animation to the appearance of the elements only if it appeared from below. 
  #######
*/ 

let previousPos = 0; // Previous position of the bottom of the visible window

function onEntry(entry) {
  let currentPos = window.scrollY + window.innerHeight; // The current position of the bottom of the visible window
  entry.forEach(change => {
    let elementPos = change.target.getBoundingClientRect(); // The position of the top of the element relative to the top of the visible part of the screen.

    // Checking the scroll down.
    if(currentPos > previousPos ){ 
      change.isIntersecting &&
        change.target.classList.add('element-show');
    } 

    // Checking whether the item is in or below the visible screen.
    if(elementPos.top >= 0){
      !change.isIntersecting &&
        change.target.classList.remove('element-show');
    } else {
      // Checking whether the elements have a class at the top of the visible screen
      !change.target.classList.contains('element-show') 
        && change.target.classList.add('element-show');
    }
  });
  previousPos = currentPos;
}

const Observing = () => {
  let options = {
    threshold: [0.3] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation'); // All the elements that need animation

  for (let elm of elements) {
    observer.observe(elm);
  }
}

export { Observing };