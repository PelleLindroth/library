<template>
  <div class="library">
    <h1>8 Classic Childrens books</h1>
    <ul>
      <router-link
        :style="
          `background: linear-gradient(-110deg,rgba(255, 255, 255,1),${book.color} 55%)`
        "
        class="library__book"
        tag="li"
        :to="`/book/${book.id}`"
        v-for="book in books"
        :key="book.id"
        ><h2>{{ book.title }}</h2>
        <p>{{ book.author }}</p></router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    books() {
      return this.$store.state.books
    },
  },
}
</script>

<style lang="scss" scoped>
.library {
  height: 100vh;
  display: grid;
  place-items: center;
  max-width: 1000px;
  margin: auto;

  h1 {
    justify-self: start;
  }
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 65rem;
    margin: auto;
  }

  &__book {
    align-items: flex-start;
    cursor: pointer;
    color: white;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    height: 18rem;
    width: 14rem;
    margin-bottom: 1rem;
    // margin-right: 0.5rem;
    padding: 1rem;

    h2 {
      font-size: 1rem;
    }
  }
}
</style>
