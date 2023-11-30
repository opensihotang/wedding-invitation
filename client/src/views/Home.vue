<script>
import { mapState, mapActions  } from 'pinia'
import { useInvitationStore } from '../stores/counter';
export default {
    computed : {
        ...mapState(useInvitationStore, ['coupleData','infoData'])
    },
    methods : {
        ...mapActions(useInvitationStore, ['fetchCouple'])
    },
    created() {
        this.fetchCouple()
    }
}
</script>

<template>
    <!-- <p>{{ coupleData }}</p> -->
    <section id="home" class="home">
        <div class="container">
            <div class="row justify-content-center">
                <div v-for="info in infoData" :key="info.id" class="col-md-8 text-center">
                    <!-- {{ couple.Galleries }} -->
                    <h2>Acara Pernikahan</h2>
                    <h3>Di selenggarakan pada {{info.jadwalAkad}} di {{info.alamat}}.</h3>
                    <p>Oleh karena itu, dengan segala hormat, kami bermaksud untuk mengundang Bapak/Ibu, Saudara/i, untuk
                        hadir
                        pada acara pernikahan kami</p>
                </div>
            </div>

            <!-- couple -->
            <div v-for="couple in coupleData" :key="couple.id" class="row couple">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-8 text-end">
                            <h3>{{ couple.namaPria }}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum alias sunt vel, unde quia
                                quibusdam dolor
                                aspernatur labore adipisci deleniti quaerat aperiam cumque accusantium quo, quisquam illum,
                                ab soluta
                                tempora.</p>
                            <p>{{ couple.infoPria }}</p>
                        </div>
                        <div class="col-4">
                            <img :src="couple.imageProfilPria"
                                alt="image" class="img-responsive rounded-circle">
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-4">
                            <img :src="couple.imageProfilWanita"
                                alt="image" class="img-responsive rounded-circle">
                        </div>
                        <div class="col-8">
                            <h3>{{couple.namaWanita}}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum alias sunt vel, unde quia
                                quibusdam dolor
                                aspernatur labore adipisci deleniti quaerat aperiam cumque accusantium quo, quisquam illum,
                                ab soluta
                                tempora.</p>
                            <p>{{couple.infoWanita}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
</template>