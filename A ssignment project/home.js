document.addEventListener('DOMContentLoaded', function() {
    const data = document.querySelectorAll('.box');
  
    for (let i = 0; i < data.length; i++) {
      data[i].addEventListener('click', function() {
        this.classList.toggle('short');
        for (let j = 0; j < data.length; j++) {
          if (i !== j) {
            data[j].classList.remove('short');
          }
        }
      });
    }
  });
  