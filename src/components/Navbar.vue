<script setup lang="ts">
// @ts-ignore
import feather from 'feather-icons'
import { onMounted, nextTick } from 'vue'
import 'animate.css';

onMounted(async () => {    
    await nextTick()
    feather.replace()
})

</script>

<template>
    <nav class="w-full fixed top-0 left-0 right-0 z-10 flex justify-center animate__animated animate__fadeInDown">
        <ul class="flex items-center gap-7.5 px-10 py-2.5 mt-5 rounded-full font-medium shadow-md bg-gray-100/50 backdrop-blur-lg max-sm:px-5 max-sm:gap-2.5 max-sm:text-xs">
            <li><a href="#hero">Beranda</a></li>
            <li><a href="#about-me">Tentang Saya</a></li>
            <li><a href="#portofolio">Portfolio</a></li>
            <li><a href="#education">Pendidikan</a></li>
            <li><a href="#contact">Kontak</a></li>
        </ul>
    </nav>
</template>