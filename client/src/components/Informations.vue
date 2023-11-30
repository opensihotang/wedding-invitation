<script>
import { mapState, mapActions  } from 'pinia'
import { useInvitationStore } from '../stores/counter';
export default {
    computed : {
        ...mapState(useInvitationStore, ['infoData'])
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
    <section v-for="info in infoData" :key="info.id" id="info" class="info">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-10 text-center">
          <h2>Informasi Acara</h2>
          <p class="alamat">{{ info.alamat }}</p>
          <a href="https://goo.gl/maps/2iFaNPxFFz75E1Qq6" target="_blank" class="btn btn-light btn-sm my-3">Buka
            alamat</a>
          <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione odit sequi eveniet
            veniam sint, modi provident consequatur reiciendis expedita, ex mollitia. Numquam quod quia quasi. Sed quo
            ea incidunt quod.</p>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-md-5 col-10">
          <div class="card text-center text-bg-light mb-5">
            <div class="card-header">
              Akad Nikah
            </div>
            <div class="card-body">
              <div class="row justify-content-center">
                <!-- <div class="col-md-6">
                  <i class="bi bi-clock d-block"></i>
                  <span>08.00 - 10.00</span>
                </div> -->
                <div class="col-md-6">
                  <i class="bi bi-calendar-heart d-block"></i>
                  <span>{{ info.jadwalAkad }}</span>
                </div>
              </div>
            </div>
            <div class="card-footer">
              Saat acara pemberkatan diharapkan untuk menjaga Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum sapiente alias assumenda facilis, ex voluptatibus dicta amet ducimus delectus non ratione
              necessitatibus accusamus eligendi accusantium quasi soluta incidunt minus debitis.
            </div>
          </div>
        </div>
        <div class="col-md-5 col-10">
          <div class="card text-center text-bg-light">
            <div class="card-header">
              Resepsi
            </div>
            <div class="card-body">
              <div class="row justify-content-center">
                <!-- <div class="col-md-6">
                  <i class="bi bi-clock d-block"></i>
                  <span>12.00 - selesai</span>
                </div> -->
                <div class="col-md-6">
                  <i class="bi bi-calendar-heart d-block"></i>
                  <span>{{ info.jadwalResepsi }}</span>
                </div>
              </div>
            </div>
            <div class="card-footer">
              Saat acara resepsi diharapkan untuk menjaga Lorem lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum sapiente alias assumenda facilis, ex voluptatibus dicta amet ducimus delectus non ratione
              necessitatibus accusamus eligendi accusantium quasi soluta incidunt minus debitis.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>