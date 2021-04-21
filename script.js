var app = new Vue (
    {
        el : '#root',
        data: {
            userNewValue : '',
            to_dos : [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ],
        } ,
        methods: {
             // Aggiunge un nuovo todo all'array todos
             addNewTodo() {
                // se l'utente non compila ma clicca aggiungi, non succede nulla (non pusha)
                if(this.userNewValue.length > 0 ){
                    this.to_dos.push(this.userNewValue);
                this.userNewValue = '';
                }
                
            },

            // Rimuove un elemento dall'array todos
            deleteTodo(index) {
                this.to_dos.splice(index,1);
            }
        }
    } 
    
    
);