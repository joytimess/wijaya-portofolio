<script setup lang="ts">
// @ts-ignore
import facesHeightImg from '@/assets/images/faces-height.png';
import 'animate.css';

</script>
<template>
    <section id="hero" class="min-h-screen py-30 flex items-center justify-center text-gray-800 animate__animated animate__fadeInUp">
        <div class="w-full flex items-center px-80">
            <div class="w-3/4">
                <p class="font-lora text-2xl">
                    Halo Semua, saya
                </p>
                <p class="text-6xl font-semibold text-[#0259DD]">
                    Bambang Wijaya
                </p>
                <p class="mt-3 text-xl">Fullstack Developer • Laravel and VueJS Enthusiast</p>
                <p class="mt-5 mb-10 w-195 text-lg">
                    Website ini menampilkan progress proyek dan kontribusi saya sebagai pengembang di aspek teknologi.
                </p>
                <a href="" class="px-5 text-white py-2.5 mt-2.5 bg-[#0259DD] font-semibold rounded-full">Hubungi Saya</a>
            </div>
            <div class="relative w-1/4">
                <span 
                    class="absolute inset-0 animate-gradient bg-linear-to-bl
               from-[#84AFFB] via-white to-[#ffa28f] bg-size-[400%_400%] rounded-t-full z-0">
                </span>
                <img 
                    :src="facesHeightImg" 
                    alt="faces" 
                    class="relative z-10 rounded-b-lg">
            </div>
        </div>
    </section>
</template>

<style>
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.animate-gradient {
    animation: gradient 5s ease infinite;
}
</style>