
 Vue.component('user-info', {
     props:{
         workers: {
             type: Array
         }
     },
     template:`
     <div class="slider-second__item">
         <img class="slider-second__image" v-bind:src="workers[0].image" alt="">
                         
         <div class="slider-second__bgrd">
             <img v-bind:src="background" alt="">
         </div>
         <div class="slider-second__wrap">
             <h3 class="slider-second__heading">{{workers[0].name}}</h3>
             <p class="slider-second__text">{{workers[0].position}}</p>
         </div>
                             
         <div class="slider-second__footer">
             <img v-for="social in workers[0].workerSocial" v-bind:src="social" alt="">
             
         </div>
     </div>
     `,
     data: function(){
         return {
             background: "img/Grid-Nama-Posisi.png",
            //  workers: [
            //     {
            //         workerId:1,
            //         image: 'img/boy.png',
            //         name: 'Miguel Obrien',
            //         position: 'CEO & Founder',
            //         workerSocial: ['img/linked-in.png', 'img/google+.png', 'img/facebook.png', 'img/twitter.png']
            //     },
            //     {
            //        workerId:2,
            //        image: 'img/red-girl.png',
            //        name: 'Jackie Carroll',
            //        position: 'Art Director',
            //        workerSocial: ['img/behance.png','img/linked-in.png', 'img/google+.png', 'img/facebook.png', 'img/twitter.png']
                            
            //     },
            // ]
             
         }
          
     }
 }
  
 );

 var vm = new Vue ({
     el:'#slider2',
     data: function() {
         return {
            workers: [
                {
                    workerId:1,
                    image: 'img/boy.png',
                    name: 'Miguel Obrien',
                    position: 'CEO & Founder',
                    workerSocial: ['img/linked-in.png', 'img/google+.png', 'img/facebook.png', 'img/twitter.png']
                },
                {
                   workerId:2,
                   image: 'img/red-girl.png',
                   name: 'Jackie Carroll',
                   position: 'Art Director',
                   workerSocial: ['img/behance.png','img/linked-in.png', 'img/google+.png', 'img/facebook.png', 'img/twitter.png']
                            
                },
            ]
         }
        

     }
 })