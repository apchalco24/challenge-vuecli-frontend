<template>
    <div>
        <b-card>
            <b-table striped hover :items="vuelos"></b-table>
        </b-card>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'ObtenerVuelos',
        data() {
            return{
                vuelos: [],
            }
        },
        methods: {
            async getAllFlights(){
                let res = await axios.get(`http://localhost:8000/flights/getFlights`)
                console.log(res.data.oFlight);
                this.vuelos = await res.data.oFlight;
            }
        },
        created(){
            this.getAllFlights();
        }
    }
</script>