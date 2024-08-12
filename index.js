const baseUrl = "https://participantsrest20.azurewebsites.net/api/Participants"
Vue.createApp({
    data() {
        return {
            name: null,
            participants: [],
            enrro: null,
            getId: null,
            add: { },
           
            
           
        }
    },
    methods: {

        async getAll() {
            try {
                const res = await axios.get(baseUrl)
                this.participants = await res.data
            } catch (e) {
                this.error = e
            }
        },

        async getById(id) {
            const url = baseUrl + "/" + id
            try {
                const res = await axios.get(url)
                this.participants = [res.data]
            } catch (e) {
                this.error = e
            }
        },
        


        async addMethod() {
            
            try {
                console.log(this.add)
                response = await axios.post(baseUrl, this.add)
                this.getAll()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async deleteMethod(id) {
            const url = baseUrl + "/" + id
            try {
                response = await axios.delete(url)
                this.getAll()
            } catch (ex) {
                alert(ex.message)
            }
        },
       
        async sortById() {
            await this.getAll() 
            this.participants = this.participants.sort((a, b) => b.id - a.id)   
        },
        async filterByName(name) {
            await this.getAll() 
            this.participants = this.participants.filter(participant => participant.name.includes(name))
           
        }
    }



}).mount("#app")