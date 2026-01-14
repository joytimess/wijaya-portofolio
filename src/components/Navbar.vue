<script setup lang="ts">
// @ts-ignore
import feather from 'feather-icons'
import {  ref, onMounted, onUnmounted  } from 'vue'
import 'animate.css';

const activeSection = ref<string>('hero')

let observer: IntersectionObserver | null = null

onMounted(() => {
    feather.replace()

    const sections = document.querySelectorAll<HTMLElement>(
        '#hero, #about-me, #portofolio, #education, #contact'
    )

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id
                }
            })
        },
        {
            root: null,
            threshold: 0.285
        }
    )

    sections.forEach(section => observer!.observe(section))
})

onUnmounted(() => {
    observer?.disconnect()
})
</script>

<template>
    <nav class="w-full fixed top-0 left-0 right-0 z-10 flex justify-center animate__animated animate__fadeInDown">
        <ul class="flex items-center gap-7.5 px-10 py-2.5 mt-5 rounded-full font-medium shadow-md bg-gray-100/50 backdrop-blur-lg max-sm:px-5 max-sm:gap-2.5 max-sm:text-xs text-black">
            <li><a href="#hero" :class="activeSection === 'hero' ? 'text-[#0259DD] font-semibold' : ''">Beranda</a></li>
            <li><a href="#about-me" :class="activeSection === 'about-me' ? 'text-[#0259DD] font-semibold' : ''">Tentang Saya</a></li>
            <li><a href="#portofolio" :class="activeSection === 'portofolio' ? 'text-[#0259DD] font-semibold' : ''">Portfolio</a></li>
            <li><a href="#education" :class="activeSection === 'education' ? 'text-[#0259DD] font-semibold' : ''">Pendidikan</a></li>
            <li><a href="#contact" :class="activeSection === 'contact' ? 'text-[#0259DD] font-semibold' : ''">Kontak</a></li>
        </ul>
    </nav>
</template>