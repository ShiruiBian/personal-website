<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 BIAN ShiRui. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>
