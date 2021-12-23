
var contadora = 0;

const contenedor = document.querySelector('.contenedor');

for(let i=0;i<17;i++){
    contadora++;
    const p= document.createElement("p")
     p.textContent=  'A'.repeat(contadora);
   
    contenedor.appendChild(p);

    if(i%2==0){
        p.classList="rojo";
        
      }else{
          p.classList="verde";
       
      }

      
    var tiempo= setInterval(hola,1000)


    function hola(){
      if(i%2==0){
        if(classList="rojo"){
          p.classList.toggle('verde')
        }
         
      } else{
        if(classList="verde"){
          p.classList.toggle('azul')
        }
      }

      
     
      
  }
      
}












