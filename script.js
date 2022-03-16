const app = new Vue(
    {
        el: "#app",
        data: {
            newText:"",
            activeIndex: 0,
            chat: [
                {
                    name: "Michele",
                    foto: "img/avatar_1.jpg",
                    messages: [
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "15:30",
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "15:50",
                            sent: true
                        },
                        {
                            text: "Tutto fatto!",
                            ora: "16:15",
                            sent: false
                        }
                    ]
                },
                {
                    name: "Fabio",
                    foto: "img/avatar_2.jpg",
                    messages: [
                        {
                            text: "Esci stasera?",
                            ora: "15:30",
                            sent: true
                        },
                        {
                            text: "Seh usciamo...",
                            ora: "16:15",
                            sent: false
                        }
                    ]
                },
                {
                    name: "Samuele",
                    foto: "img/avatar_3.jpg",
                    messages: [
                        {
                            text: "Povero Gabbiano",
                            ora: "15:30",
                            sent: true
                        },
                        {
                            text: "Hai perduto la compagna",
                            ora: "15:50",
                            sent: false
                        },
                        {
                            text: "haahahhahahahahahhahahahhahahhaahha ahhahhahhhahahhhaahahhahahahahahhahahahhahahhaahhaahhahhahhhahahhhaahahhahahahahahhahahahhahahhaahhaahhahhahhhahahh",
                            ora: "16:15",
                            sent: false
                        }
                    ],
                },
                {
                    name: "Alessandro B.",
                    foto: "img/avatar_4.jpg",
                    messages: [
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "15:30",
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "15:50",
                            sent: true
                        },
                        {
                            text: "Tutto fatto!",
                            ora: "16:15",
                            sent: false
                        },
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "15:30",
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni Ricordati di stendere i panniRicordati di stendere i panniRicordati di stendere i panni",
                            ora: "15:50",
                            sent: true
                        },
                        {
                            text: "Tutto fatto!",
                            ora: "16:15",
                            sent: false
                        },
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "15:30",
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "15:50",
                            sent: true
                        },
                        {
                            text: "Tutto fatto!",
                            ora: "16:15",
                            sent: false
                        }
                    ]
                },
                {
                    name: "Alessandro L.",
                    foto: "img/avatar_5.jpg",
                    messages: [
                        {
                            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem nemo commodi nam doloremque, unde impedit! Ipsum consectetur, cum vel sint minus dolor inventore! Labore assumenda nobis et, repellendus ipsum aut!",
                            ora: "15:30",
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "15:50",
                            sent: true
                        },
                        {
                            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem nemo commodi nam doloremque, unde impedit! Ipsum consectetur, cum vel sint minus dolor inventore! Labore assumenda nobis et, repellendus ipsum aut!",
                            ora: "16:15",
                            sent: false
                        }
                    ]
                },
                {
                    name: "Claudia",
                    foto: "img/avatar_6.jpg",
                    messages: [
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "15:30",
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "15:50",
                            sent: true
                        },
                        {
                            text: "Tutto fatto!",
                            ora: "16:15",
                            sent: false
                        }
                    ]
                },
                {
                    name: "Federico",
                    foto: "img/avatar_7.jpg",
                    messages: [
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "15:30",
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "15:50",
                            sent: true
                        },
                        {
                            text: "Tutto fatto!",
                            ora: "16:15",
                            sent: false
                        }
                    ]
                },
                {
                    name: "Davide",
                    foto: "img/avatar_8.jpg",
                    messages: [
                        {
                            text: "Hai portato a spasso il cane?",
                            ora: "15:30",
                            sent: true
                        },
                        {
                            text: "Ricordati di stendere i panni",
                            ora: "15:50",
                            sent: true
                        },
                        {
                            text: "Don't kill my vibe",
                            ora: "16:15",
                            sent: false
                        }
                    ]
                }
            ]
        },
        methods: {
            sendText(){
                if (this.newText != "") {
                    const date= new Date()
                    const newElement={
                        text: this.newText,
                        ora: date.toLocaleTimeString('it-IT'),
                        sent: true
                    }
                    this.chat[this.activeIndex].messages.push(newElement)
                }
                this.newText="";
                setTimeout(this.answer,1000)
            },
            answer(){
                const date= new Date()
                const standardText={
                    text: "Don't kill my vibe",
                    ora: date.toLocaleTimeString('it-IT'),
                    sent: false
                }
                this.chat[this.activeIndex].messages.push(standardText);              
            }
        }
    }
)