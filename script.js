let colors = [];

function craeteDiv(){
        let newDiv = document.createElement("div");
        newDiv.id = "box"
        console.log(colors);
        // let colors = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6"]
        const random = Math.floor(Math.random() * colors.length);
        newDiv.style.backgroundColor = colors[random];
        document.getElementById("container-fluid").appendChild(newDiv);
}
function click(id){
        let divid = id;
        console.log(colors);
        if (divid == 'danger') {
                colors.push("#dc3545")     
        }else if (divid =='secondary'){
                colors.push("#6c757d")
        }else if (divid =='warning'){
                colors.push("#f8d7da")
        }else if (divid =='success'){
                colors.push("#28a745")
        }else if (divid =='info'){
                colors.push("#17A2B8")
        }else if(divid == 'danger-subtle'){
                colors.push("#dc3545")
        }else{
                colors.push("#000000")
        }
        
}