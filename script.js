const { createApp } = Vue

createApp({
    data() {

        return {

            newTask: {
                text: '',
                done: false
            },

            error: false,
            tasks: [
                {
                    text: 'learn HTML',
                    done: false
                },
                {
                    text: 'learn CSS',
                    done: false
                },
                {
                    text: 'learn JS',
                    done: true
                },
                {
                    text: 'learn VUE JS',
                    done: false
                },
                {
                    text: 'learn PHP',
                    done: true
                }
            ]
        }
    },

    methods: {
        addTask() {
            console.log('ho cliccato su add task');
            if (this.newTask.length < 5) {
                this.error = true
            } else {
                this.tasks.unshift(this.newTask)
                this.newTask = ''
                this.error = false
            }
        },

        done(index) {
            console.log('ho cliccato sul task con indice N° = ' + index)
            this.tasks.splice(index, 1)
        },

        changeStatusDone() {
            if (this.tasks.done === false) {
                this.tasks.done = true
            } else {
                this.tasks.done = false
            }
            console.log(this.tasks.done);
        }
    }

}).mount('#app');