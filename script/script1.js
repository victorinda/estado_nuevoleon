const links= ["index.html", "comida.html", "gente.html", "vestimenta.html", "costumbres.html", "devs.html"];
const nav= document.querySelector("nav");
const botones= nav.querySelectorAll("button");
const btnNav= document.getElementById("btn-hidenav");
const div= document.getElementById("cont-nav");
const textoCont= document.querySelectorAll(".texto-cont");
const imagenCont= document.querySelectorAll("div.imagen-cont");

for(let i= 0; i < botones.length; i++){
	botones[i].addEventListener("click", ()=>{
		window.location.href= links[i];
	});
}

let activo= false;
btnNav.addEventListener("click", ()=>{
	if(activo){
		nav.style.display="flex";
		div.style.width="18%";
		btnNav.style.background="url(img/flecha-atras.png)"
		btnNav.style.backgroundSize="cover";
		activo= false;
	}else{
		nav.style.display="none";
		div.style.width="10px";
		btnNav.style.background="url(img/flecha-adelante.png)"
		btnNav.style.backgroundSize="cover";
		activo= true;
	}
});

textoCont.forEach((cont, i) => {
	if(i % 2 == 0){
		cont.style.gridColumn="1 / 3";
		cont.style.gridRow=(i+1)+"/"+(i+2);
	}else{
		cont.style.gridColumn="2 / 4";
		cont.style.gridRow=(i+1)+"/"+(i+2);
	}
});
imagenCont.forEach((cont, i) => {
	if(i % 2 == 0){
		cont.style.gridColumn="3 / 4";
		cont.style.gridRow=(i+1)+"/"+(i+2);
	}else{
		cont.style.gridColumn="1 / 2";
		cont.style.gridRow=(i+1)+"/"+(i+2);
	}
});
