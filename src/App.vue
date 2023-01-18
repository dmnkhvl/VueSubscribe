<template>
  <main class="flex items-center align-center bg-black min-h-screen text-white">
    <div class="max-w-screen-lg mx-auto">
      <h3 class="text-center mb-4 text-xl font-semibold">
        Subscribe to our Weekly Newsletter
      </h3>
      <form
        @submit.prevent="addSubscriber"
        class="border-2 rounded-full p-1 border-gray-600 flex justify-between"
      >
        <input
          v-model="inputValue"
          class="bg-transparent border-none focus:outline-none ml-4"
          type="email"
          placeholder="Email address"
        />
        <button
          class="bg-vue-green px-4 py-2 rounded-full text-vue-dark-green font-medium"
        >
          Subscribe
        </button>
      </form>
      <p class="mt-4">
        You can read the previous issues and listen to our podcast at
        <a
          href="https://tailwindcss.com/docs/guides/vite#vue"
          class="text-vue-green"
          >news.vuejs.org</a
        >
      </p>
      <h4 class="text-lg font-medium text-vue-green mt-10 text-center">
        Subscribed users:
      </h4>
      <ul class="mt-2 text-center">
        <li v-for="(user, index) in users" :key="index">{{ user }}</li>
      </ul>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      users: ["dev@dmnkhvl.eu"],
      inputValue: "",
    };
  },
  methods: {
    addSubscriber() {
      this.users.push(this.inputValue);
      this.inputValue = "";
    },
  },
};
</script>

<style scoped></style>
