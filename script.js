const app = new Vue(
    {
        el: "#app",
        data: {
            searchStr: "",
            activeIndex: 0,
            standardAnswers : [
                'Ok',
                "Don't Kill my vibe",
                'Non posso parlare',
                'Ti richiamo',
                'Non sei cortese'
            ],
            chat: [
                {
                    ultimoAccesso: "Ultimo accesso oggi alle 12:00",
                    newText: "",
                    name: "Michele",
                    foto: "img/avatar_1.jpg",
                    messages: [
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "15:30",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "15:50",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Tutto fatto!",
                            ora: "16:15",
                            clicked: false,
                            sent: false
                        }
                    ]
                },
                {
                    ultimoAccesso: "Ultimo accesso oggi alle 12:00",
                    newText: "",
                    name: "Fabio",
                    foto: "img/avatar_2.jpg",
                    messages: [
                        {
                            text: "Esci stasera?",
                            ora: "15:30",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Seh usciamo...",
                            ora: "16:15",
                            clicked: false,
                            sent: false
                        }
                    ]
                },
                {
                    ultimoAccesso: "Ultimo accesso oggi alle 12:00",
                    newText: "",
                    name: "Samuele",
                    foto: "img/avatar_3.jpg",
                    messages: [
                        {
                            text: "Povero Gabbiano",
                            ora: "15:30",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Hai perduto la compagna",
                            ora: "15:50",
                            clicked: false,
                            sent: false
                        },
                        {
                            text: "haahahhahahahahahhahahahhahahhaahha ahhahhahhhahahhhaahahhahahahahahhahahahhahahhaahhaahhahhahhhahahhhaahahhahahahahahhahahahhahahhaahhaahhahhahhhahahh",
                            ora: "16:15",
                            clicked: false,
                            sent: false
                        }
                    ],
                },
                {
                    ultimoAccesso: "Ultimo accesso oggi alle 12:00",
                    newText: "",
                    name: "Alessandro B.",
                    foto: "img/avatar_4.jpg",
                    messages: [
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "15:30",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "15:50",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Tutto fatto!",
                            ora: "16:15",
                            clicked: false,
                            sent: false
                        },
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "17:30",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni Ricordati di stendere i panniRicordati di stendere i panniRicordati di stendere i panni",
                            ora: "17:50",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Tutto fatto!",
                            ora: "18:15",
                            clicked: false,
                            sent: false
                        },
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "18:30",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "18:50",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Tutto fatto!",
                            ora: "19:15",
                            clicked: false,
                            sent: false
                        }
                    ]
                },
                {
                    ultimoAccesso: "Ultimo accesso oggi alle 12:00",
                    newText: "",
                    name: "Alessandro L.",
                    foto: "img/avatar_5.jpg",
                    messages: [
                        {
                            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem nemo commodi nam doloremque, unde impedit! Ipsum consectetur, cum vel sint minus dolor inventore! Labore assumenda nobis et, repellendus ipsum aut!",
                            ora: "15:30",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "15:50",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem nemo commodi nam doloremque, unde impedit! Ipsum consectetur, cum vel sint minus dolor inventore! Labore assumenda nobis et, repellendus ipsum aut!",
                            ora: "16:15",
                            clicked: false,
                            sent: false
                        }
                    ]
                },
                {
                    ultimoAccesso: "Ultimo accesso oggi alle 12:00",
                    newText: "",
                    name: "Claudia",
                    foto: "img/avatar_6.jpg",
                    messages: [
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "15:30",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "15:50",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Tutto fatto!",
                            ora: "16:15",
                            clicked: false,
                            sent: false
                        }
                    ]
                },
                {
                    ultimoAccesso: "Ultimo accesso oggi alle 12:00",
                    newText: "",
                    name: "Federico",
                    foto: "img/avatar_7.jpg",
                    messages: [
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "15:30",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "15:50",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Tutto fatto!",
                            ora: "16:15",
                            clicked: false,
                            sent: false
                        }
                    ]
                },
                {
                    ultimoAccesso: "Ultimo accesso oggi alle 12:00",
                    newText: "",
                    name: "Davide",
                    foto: "img/avatar_8.jpg",
                    messages: [
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "15:30",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "15:50",
                            clicked: false,
                            sent: true
                        },
                        {
                            text: "Don't kill my vibe",
                            ora: "16:15",
                            clicked: false,
                            sent: false
                        }
                    ]
                }
            ]
        },
        methods: {
            sendText() {
                if (this.chat[this.activeIndex].newText != "") {
                    const date = new Date()
                    const newElement = {
                        text: this.chat[this.activeIndex].newText,
                        ora: date.toLocaleTimeString('it-IT'),
                        sent: true,
                        clicked: false
                    }
                    this.chat[this.activeIndex].messages.push(newElement)
                    this.chat[this.activeIndex].newText = "";
                    this.chat[this.activeIndex].ultimoAccesso="Sta scrivendo..."
                    this.answer(this.activeIndex)
                }
            },
            answer(index) {
                setTimeout(() => {
                    const date = new Date()
                    const randomIndex = Math.floor(Math.random()*this.standardAnswers.length)
                    const standardText = {
                        text: this.standardAnswers[randomIndex],
                        ora: date.toLocaleTimeString('it-IT'),
                        sent: false,
                        clicked: false
                    }
                    this.chat[index].messages.push(standardText);
                    this.chat[index].ultimoAccesso="Online"
                }, 1000);
                setTimeout(() => {
                    const date = new Date();
                    this.chat[index].ultimoAccesso=`Ultimo accesso: ${date.toLocaleTimeString('it-IT')}`
                },2000);
            },
            getLastText(index) {
                const indexOfLastElement = this.chat[index].messages.length - 1
                const lastText = this.chat[index].messages[indexOfLastElement].text
                return lastText
            },
            getDateOfLastText(index) {
                const indexOfLastElement = this.chat[index].messages.length - 1
                const dateOflastText = this.chat[index].messages[indexOfLastElement].ora
                return dateOflastText
            },
            deleteText(index) {
                if (this.chat[this.activeIndex].messages.length > 1) {
                    this.chat[this.activeIndex].messages.splice(index, 1);
                } else {
                    this.chat.splice(this.activeIndex, 1)
                }
            }
        }
    }
)