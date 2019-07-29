
 Vue.component('user-info', {
     props:{
         worker: {
             type: Object
         },
         classes: {
             type: Object
         }
     },
     template:`
     <div class="slider-second__item">
         <div class="wrap-for-image">
          <img class="slider-second__image" v-bind:src="worker.image" v-bind:class="worker.newPic" alt="">
         </div>
           
         <div class="slider-second__wrap">
             <h3 class="slider-second__heading">{{worker.name}}</h3>
             <p class="slider-second__text">{{worker.position}}</p>
         </div>
                             
         <div class="slider-second__footer">
             <img v-for="social in worker.workerSocial" v-bind:src="social" alt="">
             
         </div>
     </div>
     `,
     data: function(){
         return {
             background: "img/Grid-Nama-Posisi.png",
                                  
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
                    workerSocial: ['img/linked-in.png', 'img/google+.png', 'img/facebook.png', 'img/twitter.png'],
                    additional: false
                },
                {
                   workerId:2,
                   image: 'img/red-girl.png',
                   name: 'Jackie Carroll',
                   position: 'Art Director',
                   workerSocial: ['img/behance.png','img/linked-in.png', 'img/google+.png', 'img/facebook.png', 'img/twitter.png'],
                   additional: false         
                },
                {
                   workerId:3,
                   image: 'img/girl.png',
                   name: 'Ida Morrison',
                   position: 'Designer',
                   workerSocial: ['img/behance.png','img/linked-in.png', 'img/google+.png', 'img/facebook.png', 'img/twitter.png'],
                   additional: false
                },
                {
                   workerId:4,
                   image: 'img/woman.png',
                   name: 'Melinda Brown',
                   position: 'HR Specialist',
                   workerSocial: ['img/behance.png','img/linked-in.png', 'img/facebook.png', 'img/twitter.png'],
                   newPic: 'slider-second__image--change'
                },
                {
                    workerId: 5,
                    image: 'img/man.png',
                    name: 'Chris More',
                    position: 'Web Developer',
                    workerSocial: ['img/google+.png','img/linked-in.png', 'img/facebook.png'],
                    newPic: 'slider-second__image--change'
                }
            ]
            
         }
         
        

     }
    
 });
 Vue.component('form-for-user', {
    
     template: `
     <div class="form" @submit="onSubmit">
         <p class="error" v-if="errors.length">
         Please, correct the error(s):
         <ul>
         <li v-for="error in errors">{{error}}</li>
         </ul>
         </p>
         <div class="form__input">
             <input type="text" name="name" placeholder="Your name" class="form__item" v-model="name">
             <input type="email" name="email" placeholder="Your email" class="form__item" v-model="email">
         </div>
         <textarea name="message" placeholder="Your message" cols="30" rows="10" class="form__textarea" v-model="message"></textarea>
         <p class="info__text"><button type="submit" class="button button--blue">Send message</button></p>
     </div> 
     `,
     data: function(){
         return {
             name: null,
             email: null,
             message: null,
             errors: []

         }
     },
     methods: {
         onSubmit: function(){
             if (this.name && this.email && this.message) {
                let filling = {
                name: this.name,
                email: this.email,
                message: this.message
             }
             console.log(filling);
             this.$emit('message-sent', filling);
             this.name = null,
             this.email = null,
             this.message = null 
             } else {
                 if(!this.name) this.errors.push('Name required');
                 if(!this.email) this.errors.push('Email required');
                 if(!this.message) this.errors.push('Message required');
             }
             
         }
     }

 });
 var form = new Vue ({
     el: '#form',
     data: {

     },
     methods: {
         addMessage: function(filling) {
             this.errors.push(filling)
             console.log(errors)

         }
     }
 });

 