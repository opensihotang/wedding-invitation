<script>
import { useInvitationStore } from '../stores/counter';
import { mapWritableState, mapActions } from 'pinia'
export default {
    data(){
        return {
            // scrollEnable: false
        }
    },
    computed: {
        ...mapWritableState(useInvitationStore, [ 'coupleData'])
    },
    methods: {
        ...mapActions(useInvitationStore, ['fetchCouple']),
        //  async handleGoogleLogin(response) {
            // await this.customerGoogleLogin(response)
            // this.$router.push('/#home')
        // },
    },
    created(){
        this.fetchCouple()
        // this.customerGoogleLogin()
        // this.$router.push('/')
    }
}

</script>

<template>
    <section id="hero"
        class="hero w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white">
        <main v-for="couple in coupleData" :key="couple.id">
            <!-- <h4>Kepada Bapak/Ibu/Saudara/i yang terhormat</h4> -->
            <h1>{{ couple.namaPria }} & {{ couple.namaWanita }}</h1>
            <p>Akan melangsungkan akad dan resepsi pernikahan</p>
            <h4>Silahkan klik tombol di bawah untuk membuka undangan</h4>
            <!-- <div class="simply-countdown">
            </div> -->
            <!-- <a @click="handleScroll" class="btn btn-lg mt-4">Lihat Undangan</a>  -->
            <!-- <div id="buttonDiv" class="google-sign"> -->
            <!-- <GoogleLogin :callback="handleGoogleLogin" /> -->
        <!-- </div> -->
        </main>
    </section>
</template>