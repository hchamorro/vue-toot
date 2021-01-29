<template>
<div>
<h1> {{ title }} </h1>
<div v-if="showModal"> 
 <!-- prop drive :header="header" :text="text" -->
<Modal theme="sale" @close="toggleModal">
  <template v-slot:links>
    <a href="#"> sign up</a>

    <a href="#"> more info </a>
  </template>
  <h1>Slot!</h1>
  <p> slot content </p>
  
</Modal>>
</div>
  <teleport to=".modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Sign up to the Newsletter</h1>
      <p>For updates and promo codes!</p>
    </Modal>
  </teleport>

<br>
<button @click.alt="toggleModal"> show modal (alt) </button>
<button @click="toggleModalTwo">open modal 2</button>
</div>
</template>

<script>

import Modal from './components/Modal.vue'

export default {
  components: { Modal },
  name: 'App',
  data() {
    return {
      title: 'Vue App',
      header:"Woo header",
      text: "Prop driving the prop attribute",
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    toggleModal(){
    this.showModal = !this.showModal
  },
  toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  border-bottom: 1px solid #2c3e50;
  display: inline-block;
}
</style>
