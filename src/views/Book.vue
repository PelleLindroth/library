<template>
  <div class="container">
    <router-link to="/" tag="button" class="back-button"
      ><span>&larr;</span></router-link
    >
    <div class="book-container">
      <div
        class="book-cover"
        :style="
          `background: linear-gradient(-110deg,rgba(255, 255, 255,1),${book.color} 55%)`
        "
      >
        <div class="line"></div>
        <div class="content">
          <h1>{{ book.title }}</h1>
          <p>{{ book.author }}</p>
        </div>
      </div>
      <div class="title-container">
        <h1>{{ book.title }}</h1>
        <p>{{ book.author }}</p>
      </div>
      <div class="plot">
        <p>{{ book.plot }}</p>
      </div>
      <div class="facts">
        <div class="facts-content">
          <p>Audience: {{ book.audience }}</p>
          <p>First published: {{ book.year }}</p>
        </div>
        <div class="facts-content">
          <p>Pages: {{ book.pages }}</p>
          <p>Publisher: {{ book.publisher }}</p>
        </div>
      </div>
      <button>Oh, I want to read it!</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: this.$root.getBook(this.$route.params.id),
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #222;
  display: grid;
  height: 100vh;
  margin: auto;
  color: white;

  button {
    cursor: pointer;
  }

  .back-button {
    margin-left: 15.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    font-size: 2.5rem;
    height: 5rem;
    margin-top: 3rem;
    width: 5rem;

    span {
      margin-bottom: 8px;
    }
  }

  .book-container {
    max-height: 75vh;
    margin: auto;
    max-width: 65vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas: 'book-cover title' 'book-cover plot' 'book-cover facts' 'book-cover button';

    .book-cover {
      color: black;
      display: flex;
      grid-area: book-cover;
      padding-right: 2rem;

      .line {
        height: 100%;
        width: 2px;
        background: #444;
        margin-left: 2rem;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        margin-left: 1rem;
        margin-bottom: 1rem;
        text-align: left;
      }
    }

    .title-container {
      color: white;
      padding-left: 2rem;
      grid-area: title;
      text-align: left;
    }

    .plot {
      padding: 0 2rem;
      grid-area: plot;
      text-align: left;
    }

    .facts {
      background: #2e2e2e;
      grid-area: facts;
      margin: 2rem;
      padding: 1rem;

      .facts-content {
        display: flex;
        justify-content: space-around;
        text-align: left;

        p {
          width: 50%;
        }
      }
    }

    button {
      align-self: flex-end;
      border: none;
      outline: none;
      border-radius: 4px;
      grid-area: button;
      width: 10rem;
      height: 3rem;
      margin-left: 2rem;
    }
  }
}
</style>
