let predefinedcolors = [
        'green',
        'blue',
        'yellow',
        'crimson',
        'aqua',
        'black',
        'red',
        'violet',
        'grey',
        'chartreuse'];
let colors = ['green',
        'blue',
        'yellow',
        'crimson'];

function craeteDiv() {
        let newDiv = document.createElement("div");
        newDiv.id = "box"
        console.log(colors);
        const random = Math.floor(Math.random() * colors.length);
        newDiv.style.backgroundColor = colors[random];
        document.getElementById("container-fluid").appendChild(newDiv);
}
function addColor(id) {
        const index = colors.indexOf(id);

        if (index !== -1) {
                // If id is already in the array, remove it
                colors.splice(index, 1);
        } else {
                // If id is not in the array, add it
                colors.push(id);
                //     document.getElementById('addbtn').innerHTML = "Remove";
        }
        createPredefineBox()
}

function createPredefineBox() {

        const containter = document.getElementById('predifinedCOlorContainer');
        containter.innerHTML =''
        for (let i = 0; i < predefinedcolors.length; i++) {
                const node = document.createElement('div')
                if (colors.includes(predefinedcolors[i])) {
                        node.innerHTML = `
                        <div class="card d-flex justify-content-center align-items-center" style="width: 12rem; height: 10rem;background:${predefinedcolors[i]}">
                                <button type="button" class="btn btn-primary" id="addbtn" onclick="addColor('${predefinedcolors[i]}')">Remove</button>    
                            </div>
                        `
                } else {
                        node.innerHTML = `
                <div class="card d-flex justify-content-center align-items-center" style="width: 12rem; height: 10rem;background:${predefinedcolors[i]}">
                        <button type="button" class="btn btn-primary" id="addbtn" onclick="addColor('${predefinedcolors[i]}')">Add</button>    
                    </div>
                `
                }

                containter.appendChild(node)
        }

}

createPredefineBox()