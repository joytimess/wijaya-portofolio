<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import HomeHero from '@/components/HomeComponents/Hero.vue'
import HomeAbout from '@/components/HomeComponents/About.vue'
</script>

<template>
    <main>
        <Navbar/>
        <HomeHero/>
        <HomeAbout/>
        <Footer/>
    </main>
</template>