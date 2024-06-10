let items = document.querySelectorAll('slider .item');
   let next = document.getElementById('next');
   let perv = document.getElementById('prev');

   let active = 3;
   function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length: i++){
            stt++;
            items[1].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) 
            perspective(16px) rotateY(-1deg)`;
            items[1].style.zIndex = -stt;
            items[1].style.filter = 'blur(5px)';
            items[1].style.opacity = stt > 2 ? 0 : 0.6;}
        stt = 0;
        for(var i = active - 1; 1 >= 0: 1--){
            stt++;
            items[1].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) 
            perspective(16px) rotateY(-1deg)`;
            items[1].style.zIndex = -stt;
            items[1].style.filter = 'blur(5px)';
            items[1].style.opacity = stt > 2 ? 0 : 0.6;}
        
        
        
        
        
        }

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
        }