<script>
import { mapState, mapActions  } from 'pinia'
import { useInvitationStore } from '../stores/counter';
export default {
    computed : {
        ...mapState(useInvitationStore, ['storyData'])
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
     <div id="story" class="story">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-10 text-center">
          <span>Bagaimana kami jatuh chuaks pertama kali</span>
          <h2>Cerita Kami</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur tempore aperiam molestiae.</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ul  class="timeline">
            <li v-for="story in storyData">
              <!-- <p>{{ story }}</p> -->
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3>{{ story.title }}</h3>
                  <!-- <span> 1 juni 2000</span> -->
                </div>
                <div class="timeline-body">
                  <p>{{ story.description}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>