document.addEventListener('DOMContentLoaded', function () {
    function renderWorld() {
        document.querySelector(".wrapper").innerHTML = output;
    }
    
    let world = [
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ]
    
    let output = "";
    for (let i = 0; i < world.length; i++) {
        output += '\n<div class="row">\n';
        for (let j = 0; j < world[i].length; j++) {
            if (world[i][j] === 2) {
                output += '<div class="wall"></div>';
            } else if (world[i][j] === 1) {
                output += '<div class="coin"></div>';
            } else if (world[i][j] === 0) {
                output += '<div class="empty"></div>';
            }
        } 
        output += '\n</div>';
    }
    
    renderWorld();
})

