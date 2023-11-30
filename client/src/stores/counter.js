  import axios from "axios";
  import { defineStore } from "pinia";
  import Swal from 'sweetalert2'
  const baseUrl = "http://localhost:3000";

  export const useInvitationStore = defineStore("counter", {
    state: () => {
      return {
        scrollEnable : true,
        coupleData : [],
        infoData : [],
        storyData : [],
        galleryData : [],
        // isLoggedIn : "" || localStorage.getItem("access_token") ? true : false,
      };
    },
    actions: {
      // async customerGoogleLogin(response) {
      //   try {
      //     const { data } = await axios({
      //       method: "POST",
      //       url: `${baseUrl}/google-login`,
      //       headers: {
      //         google_token: response.credential,
      //       },
      //     });
      //     localStorage.setItem("access_token", data.access_token);
      //     this.isLoggedIn = true;
      //   } catch (err) {
      //     console.log(err);
      //   }
      // },

      async fetchCouple(){
        try {
          const { data } = await axios({
            method : "GET",
            url : `${baseUrl}/couple/`
          })
          this.coupleData = data
          this.infoData = data[0].Infos
          this.galleryData = data[0].Galleries
          this.storyData = data[0].Stories
          // console.log(data);
        } catch (err) {
          console.log(err);
        }
      },

      async handlePayment(){
        try {

          const { data } = await axios({
            url : `${baseUrl}/generate-midtrans-token`,
            method : "POST",
            headers : {
              access_token : localStorage.getItem('access_token')
            }
          })
          // console.log(data);
          window.snap.pay(data.token, {
            onSuccess: function(result){
              alert("payment success!"); console.log(result);
            },
            onPending: function(result){
              alert("wating your payment!"); console.log(result);
            },
            onError: function(result){
              alert("payment failed!"); console.log(result);
            },
            onClose: function(){
              alert('you closed the popup without finishing the payment');
            }
          })
        } catch (err) {
          console.log(err);
        }
      },

      async postGuest(payload){
        try {
          console.log(payload);
          const {data} = await axios({
            method : "POST",
            url : `${baseUrl}/guest`,
            data : payload
          })
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Terima kasih untuk konfirmasinya',
            showConfirmButton: false,
            timer: 2000
          })
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      }
    }
  })