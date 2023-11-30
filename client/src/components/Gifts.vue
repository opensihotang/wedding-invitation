<script>
import { mapActions } from 'pinia'
import { useInvitationStore } from '../stores/counter';
export default {
  methods : {
    ...mapActions(useInvitationStore, ['handlePayment']),
    submitPayment(){
      this.handlePayment()
      this.$router.push('/#gifts')
    }
  }
}

</script>

<template>
    <div id="gifts" class="gifts">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-10 text-center">
          <h2>Kirim Hadiah</h2>
          <span>Ungkapan tanda kasih</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ea facere excepturi aliquam alias tempora saepe dolores quaerat animi veritatis?</p>
        </div>
      </div>
      <div class="row justify-content-center text-center">
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item">
              <button class="btn btn-primary" @click.prevent="submitPayment">Klik untuk memberikan hadiah kepada mempelai</button>
              <!-- <a @click="submitPayment" class="fw-bold">BCA</a>
              0000099 - Sugiono -->
            </li>
            <li class="list-group-item">
              <div class="fw-bold">Atau Scan Disini</div>
              <img src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" alt="image" class="img-thumbnail w-50">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>