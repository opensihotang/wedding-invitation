<script>
import { mapState, mapActions  } from 'pinia'
import { useInvitationStore } from '../stores/counter';
export default {
    computed : {
        ...mapState(useInvitationStore, ['galleryData'])
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
     <div id="gallery" class="gallery">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-10 text-center">
          <span>Memori perjalanan kami</span>
          <h2>Galeri Foto</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur tempore aperiam molestiae.</p>
        </div>
      </div>

      <div class="row row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
        <div v-for="gallery in galleryData" :key="gallery.id" class="col mt-3">
          <a href="">
            <img :src="gallery.imageUrl" alt="image"
              class="img-fluid w-100 rounded">
          </a>
        </div>
      </div>
    </div>

  </div>
</template>