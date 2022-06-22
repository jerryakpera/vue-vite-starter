<template>
  <header class="p-4 bg-primary-50">
    <nav>
      <div class="flex justify-end text-secondary-50 font-bold">
        <router-link to="/login" class="px-4 mr-4 bg-white">
          <button>Login</button>
        </router-link>
        <router-link
          to="/"
          class="px-4 mr-4 h-full min-h-full inline-block bg-white"
        >
          <button>Home</button>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
