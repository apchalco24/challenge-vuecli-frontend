<template>
    <div>
        <b-card>
            <b-table striped hover :items="tickets"></b-table>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'ObtenerVuelos',
        data() {
            return{
                tickets: [],
            }
        },
        methods: {
            async getAllTickets(){
                let res = await axios.get(`http://localhost:8000/flights/getTickets`)
                console.log(res.data.oTicketsFlight);
                this.tickets = await res.data.oTicketsFlight;
            }
        },
        created(){
            this.getAllTickets();
        }
    }
</script>