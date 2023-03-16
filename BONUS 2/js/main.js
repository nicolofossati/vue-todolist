/*Descrizione:
Bonus:
  2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente 
  (se done era uguale a false, impostare true e viceversa)
*/

const { createApp } = Vue

  createApp({
    data() {
      return {
        newText: "",
        check: false,
        tasks : [
            {
                text: "Task 1",
                done: true
            },
            {
                text: "Task 2",
                done: false
            },
            {
                text: "Task 3",
                done: false
            }
        ]
      }
    }, 
    methods : {
        removeTask(index){
            this.tasks.splice(index,1);
        },

        addTask(text){
          if(text.length > 0){
            this.tasks.push({});
            this.tasks[this.tasks.length-1].text= text;
            this.tasks[this.tasks.length-1].done= false;
            this.newText="";
            this.check = false;
          } else {
            this.check = true;
          }
            
        },
        
        invertDone(index){
          this.tasks[index].done = !this.tasks[index].done;
        },

    }
  }).mount('#app')