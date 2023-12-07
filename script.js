let element = document.querySelector('#level');

function getElementLevel(element) {
  let level = 0;
  
  while (element.parentElement) {
    level++;
    element = element.parentElement;
  }

  return level;
}

getElementLevel(element);