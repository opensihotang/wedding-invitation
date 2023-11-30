<script>
import { useInvitationStore } from '../stores/counter';
import { mapActions, mapState } from 'pinia'
export default {
  data() {
    return {
      name: "",
      totalGuest: "",
      status: ""
    }
  },
  methods: {
    ...mapActions(useInvitationStore, ['postGuest']),

    async submitForm(){
      const payload = {name : this.name, totalGuest : this.totalGuest, status : this.status}
      this.postGuest(payload)
    }
  },
  created(){
  }
}
</script>

<template>
  <div id="presence" class="presence">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-10 text-center">
          <h2>Konfirmasi kehadiran</h2>
          <p>Isi form di bawah untuk konfirmasi kehadiran</p>
        </div>
      </div>
      <form @submit.prevent="submitForm" action="" class="row row-cols-md-auto g-3 align-items-center justify-content-center">
        <div class="col-12">
          <div class="mb-3">
            <label for="name" class="form-label">Nama</label>
            <input v-model="name" type="text" class="form-control" id="name" name="name">
          </div>
        </div>
        <div class="col-12">
          <div class="mb-3">
            <label for="totalPerson" class="form-label">Jumlah Kehadiran</label>
            <input v-model="totalGuest" type="number" class="form-control" id="totalPerson" name="totalPerson">
          </div>
        </div>
        <div class="col-12">
          <div class="mb-3">
            <label for="status" class="form-label">Konfirmasi</label>
            <select v-model="status"  name="status" id="status" class="form-select">
              <option value="" disabled selected hidden>Konfirmasi kehadiran anda</option>
              <option value="true">Hadir</option>
              <option value="false">Tidak Hadir</option>
            </select>
          </div>
        </div>
        <div class="col-12" style="margin-top: 30px">
          <button class="btn btn-primary" type="submit">Kirim</button>
        </div>
      </form>
    </div>
  </div>
</template>