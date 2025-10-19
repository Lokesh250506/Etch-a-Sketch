
for (let i = 0; i < 256; i++) {
    let a = document.createElement ("button");
    a.classList.add("gridbuttons");
    a.style.width = 752 / 16 + "px";
    a.style.height = 720 / 16 + "px";
    let b = document.querySelector (".container");
    b.appendChild(a);
}
function func1 (e) {
    let x = Math.random();
    if (x>=0 && x<= (1/7)) {
    e.target.style.backgroundColor = "violet";
    }
    else if (x>=1/7 && x<2/7) {
        e.target.style.backgroundColor = "indigo";
    }
    else if (x>=2/7 && x<3/7){
         e.target.style.backgroundColor = "blue";
    }
        else if (x>=3/7 && x<4/7){
         e.target.style.backgroundColor = "green";
    }
        else if (x>=4/7 && x<5/7){
         e.target.style.backgroundColor = "yellow";
    }
        else if (x>=5/7 && x<6/7){
         e.target.style.backgroundColor = "orange";
    }
        else if (x>=6/7 && x<=1){
         e.target.style.backgroundColor = "red";
    }
} 

function func2 (e) {
    let c = document.querySelector(".container");
    c.textContent = "";
    for (let i = 0; i < 256; i++) {
    let d = document.createElement ("button");
    d.classList.add("gridbuttons");
    d.style.width = 752 / 16 + "px";
    d.style.height = 720 / 16 + "px";
    let b = document.querySelector (".container");
    b.appendChild(d);

}
    let a = document.querySelectorAll (".gridbuttons");
    a.forEach ((button)=> {
    button.addEventListener("mouseover", func1);
});
}

function func3(e) {
    let q = document.querySelector (".container");
    q.textContent = "";
    let p = prompt ("Enter the number of grids :", "");
    for (let i = 0; i < p*p; i++) {
    let a = document.createElement ("button");
    a.classList.add("gridbuttons");
    a.style.width = 752/p+"px";
    a.style.height = 720/p+"px";
    let b = document.querySelector (".container");
    b.appendChild(a);
}
    let a = document.querySelectorAll (".gridbuttons");
    a.forEach ((button)=> {
    button.addEventListener("mouseover", func1);
});
    
}

function violet(e) {
    let a = document.querySelector (".container");
    a.textContent = "";
    let b = prompt ("Number of grids??",'');
for (let i = 0; i < b*b; i++) {
    let q = document.createElement ("button");
    q.classList.add("gridbuttons");
    q.style.width = 752/b+"px";
    q.style.height = 720/b+"px";
    let r = document.querySelector (".container");
    r.appendChild(q);
}
    let x = document.createElement("p");
    x.textContent = "Number of grids are "+b+" x "+b;
    let y = document.querySelector(".para");
    y.textContent = "";
    y.appendChild(x);
    let p = document.querySelectorAll (".gridbuttons");
    p.forEach ((button)=> {
    button.addEventListener("mouseover",violet2 );
    });

}
function violet2(e) {
    e.target.style.backgroundColor = "violet";
}

function blue(e) {
    let a = document.querySelector (".container");
    a.textContent = "";
    let b = prompt ("Number of grids??",'');
for (let i = 0; i < b*b; i++) {
    let q = document.createElement ("button");
    q.classList.add("gridbuttons");
    q.style.width = 752/b+"px";
    q.style.height = 720/b+"px";
    let r = document.querySelector (".container");
    r.appendChild(q);
}
    let x = document.createElement("p");
    x.textContent = "Number of grids are "+b+" x "+b;
    let y = document.querySelector(".para");
    y.textContent = "";
    y.appendChild(x);
    let p = document.querySelectorAll (".gridbuttons");
    p.forEach ((button)=> {
    button.addEventListener("mouseover",blue2 );
    });

}
function blue2(e) {
    e.target.style.backgroundColor = "blue";
}

function green(e) {
    let a = document.querySelector (".container");
    a.textContent = "";
    let b = prompt ("Number of grids??",'');
for (let i = 0; i < b*b; i++) {
    let q = document.createElement ("button");
    q.classList.add("gridbuttons");
    q.style.width = 752/b+"px";
    q.style.height = 720/b+"px";
    let r = document.querySelector (".container");
    r.appendChild(q);
}
    let x = document.createElement("p");
    x.textContent = "Number of grids are "+b+" x "+b;
    let y = document.querySelector(".para");
    y.textContent = "";
    y.appendChild(x);
    let p = document.querySelectorAll (".gridbuttons");
    p.forEach ((button)=> {
    button.addEventListener("mouseover",green2 );
    });

}
function green2(e) {
    e.target.style.backgroundColor = "green";
}

function yellow(e) {
    let a = document.querySelector (".container");
    a.textContent = "";
    let b = prompt ("Number of grids??",'');
for (let i = 0; i < b*b; i++) {
    let q = document.createElement ("button");
    q.classList.add("gridbuttons");
    q.style.width = 752/b+"px";
    q.style.height = 720/b+"px";
    let r = document.querySelector (".container");
    r.appendChild(q);
}
    let x = document.createElement("p");
    x.textContent = "Number of grids are "+b+" x "+b;
    let y = document.querySelector(".para");
    y.textContent = "";
    y.appendChild(x);
    let p = document.querySelectorAll (".gridbuttons");
    p.forEach ((button)=> {
    button.addEventListener("mouseover",yellow2 );
    });

}
function yellow2(e) {
    e.target.style.backgroundColor = "yellow";
}

function orange(e) {
    let a = document.querySelector (".container");
    a.textContent = "";
    let b = prompt ("Number of grids??",'');
for (let i = 0; i < b*b; i++) {
    let q = document.createElement ("button");
    q.classList.add("gridbuttons");
    q.style.width = 752/b+"px";
    q.style.height = 720/b+"px";
    let r = document.querySelector (".container");
    r.appendChild(q);
}
    let x = document.createElement("p");
    x.textContent = "Number of grids are "+b+" x "+b;
    let y = document.querySelector(".para");
    y.textContent = "";
    y.appendChild(x);
    let p = document.querySelectorAll (".gridbuttons");
    p.forEach ((button)=> {
    button.addEventListener("mouseover",orange2 );
    });

}
function orange2(e) {
    e.target.style.backgroundColor = "orange";
}

function indigo(e) {
    let a = document.querySelector (".container");
    a.textContent = "";
    let b = prompt ("Number of grids??",'');
for (let i = 0; i < b*b; i++) {
    let q = document.createElement ("button");
    q.classList.add("gridbuttons");
    q.style.width = 752/b+"px";
    q.style.height = 720/b+"px";
    let r = document.querySelector (".container");
    r.appendChild(q);
}
    let x = document.createElement("p");
    x.textContent = "Number of grids are "+b+" x "+b;
    let y = document.querySelector(".para");
    y.textContent = "";
    y.appendChild(x);
    let p = document.querySelectorAll (".gridbuttons");
    p.forEach ((button)=> {
    button.addEventListener("mouseover",indigo2 );
    });

}
function indigo2(e) {
    e.target.style.backgroundColor = "indigo";
}

function red(e) {
    let a = document.querySelector (".container");
    a.textContent = "";
    let b = prompt ("Number of grids??",'');
for (let i = 0; i < b*b; i++) {
    let q = document.createElement ("button");
    q.classList.add("gridbuttons");
    q.style.width = 752/b+"px";
    q.style.height = 720/b+"px";
    let r = document.querySelector (".container");
    r.appendChild(q);
}
    let x = document.createElement("p");
    x.textContent = "Number of grids are "+b+" x "+b;
    let y = document.querySelector(".para");
    y.textContent = "";
    y.appendChild(x);
    let p = document.querySelectorAll (".gridbuttons");
    p.forEach ((button)=> {
    button.addEventListener("mouseover",red2 );
    });

}
function red2(e) {
    e.target.style.backgroundColor = "red";
}

function black(e) {
    let a = document.querySelector (".container");
    a.textContent = "";
    let b = prompt ("Number of grids??",'');
for (let i = 0; i < b*b; i++) {
    let q = document.createElement ("button");
    q.classList.add("gridbuttons");
    q.style.width = 752/b+"px";
    q.style.height = 720/b+"px";
    let r = document.querySelector (".container");
    r.appendChild(q);
}
    let x = document.createElement("p");
    x.textContent = "Number of grids are "+b+" x "+b;
    let y = document.querySelector(".para");
    y.textContent = "";
    y.appendChild(x);
    let p = document.querySelectorAll (".gridbuttons");
    p.forEach ((button)=> {
    button.addEventListener("mouseover",black2 );
    });

}
function black2(e) {
    e.target.style.backgroundColor = "black";
}

function rgb(e) {
    let a = document.querySelector (".container");
    a.textContent = "";
    let b = prompt ("Number of grids??",'');
for (let i = 0; i < b*b; i++) {
    let q = document.createElement ("button");
    q.classList.add("gridbuttons");
    q.style.width = 752/b+"px";
    q.style.height = 720/b+"px";
    let r = document.querySelector (".container");
    r.appendChild(q);
}
    let x = document.createElement("p");
    x.textContent = "Number of grids are "+b+" x "+b;
    let y = document.querySelector(".para");
    y.textContent = "";
    y.appendChild(x);
    let p = document.querySelectorAll (".gridbuttons");
    p.forEach ((button)=> {
    button.addEventListener("mouseover",func1 );
    });

}

let a = document.querySelectorAll (".gridbuttons");
a.forEach ((button)=> {
    button.addEventListener("mouseover", black);
});

let b = document.querySelector (".clear");
b.addEventListener("click",black);


let d = document.querySelector (".violet");
d.addEventListener("click", violet);


let e = document.querySelectorAll (".indigo");
e.forEach ((button)=> {
    button.addEventListener("click", indigo);
});

let f = document.querySelectorAll (".blue");
f.forEach ((button)=> {
    button.addEventListener("click", blue);
});

let g = document.querySelectorAll (".green");
g.forEach ((button)=> {
    button.addEventListener("click", green);
});

let h = document.querySelectorAll (".yellow");
h.forEach ((button)=> {
    button.addEventListener("click", yellow);
});

let i = document.querySelectorAll (".orange");
i.forEach ((button)=> {
    button.addEventListener("click", orange);
});

let j = document.querySelectorAll (".red");
j.forEach ((button)=> {
    button.addEventListener("click", red);
});

let k = document.querySelectorAll (".black");
k.forEach ((button)=> {
    button.addEventListener("click", black);
});

let l = document.querySelectorAll (".rgb");
l.forEach ((button)=> {
    button.addEventListener("click", rgb);
});





