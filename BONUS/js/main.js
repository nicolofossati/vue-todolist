/*Descrizione:
Bonus:
  1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
*/

const { createApp } = Vue

  createApp({
    data() {
      return {
        newText: "",
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
        remove_task(index){
            this.tasks.splice(index,1);
        },

        addTask(text){
            this.tasks.push({});
            this.tasks[this.tasks.length-1].text= text;
            this.tasks[this.tasks.length-1].done= false;
            this.newText="";
        }
        
    }
  }).mount('#app')