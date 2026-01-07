<script setup lang="ts">
// @ts-ignore
import Navbar from '@/components/Navbar.vue'
// @ts-ignore
import Footer from '@/components/Footer.vue'
// @ts-ignore
import HomeHero from '@/components/HomeComponents/Hero.vue'
// @ts-ignore
import HomeAbout from '@/components/HomeComponents/About.vue'
// @ts-ignore
import HomePortofolio from '@/components/HomeComponents/Portofolio.vue'
</script>

<template>
    <main>
        <Navbar/>
        <HomeHero/>
        <HomeAbout/>
        <HomePortofolio/>
        <Footer/>
    </main>
</template>