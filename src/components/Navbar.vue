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
    <nav class="navbar-main animate__animated animate__fadeInDown">
        <ul class="style-navbar">
            <li class="style-navbar-active">
                <a href="#hero">
                    Beranda
                    <span class="style-navbar-accent">/</span>
                </a>
            </li>
            <li>
                <a href="#about-me">Tentang Saya</a>
            </li>
            <li>
                <a href="#portofolio">Portfolio</a>
            </li>
            <li>
                <a href="#education">Pendidikan</a>
            </li>
            <li>
                <a href="#contact">Kontak</a>
            </li>
        </ul>
    </nav>
</template>