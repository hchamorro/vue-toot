const app = Vue.createApp({
  // data, functions
  //template: '<h2> I an the template </h2>',
  data() {
    return {
      showBooks: true,
      url: 'https://www.google.com/',
      books: [
        {
          title: 'the final empire',
          author: 'Brandon S',
          age: '35',
          img: 'assets/theFinalEmpirePic.jpg',
          isFav: true,
        },
        {
          title: 'What is the what',
          author: 'David eggars',
          age: '55',
          img: 'assets/WhatIsTheWhatPic.jpg',
          isFav: false,
        },
        {
          title: 'a christmas Carol',
          author: 'Charles Dickenson',
          age: '45',
          img: 'assets/aChristmasCarolPic.jpg',
          isFav: true,
        },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(titlePar) {
      //   this.title = 'Born a crime';
      this.title = titlePar;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    changeFavStat(book) {
      book.isFav = !book.isFav;
      console.log(this.books.isFav);
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount('#app');
