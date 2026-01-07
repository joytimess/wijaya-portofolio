<script setup lang="ts">
// @ts-ignore
import educationSmkn from '@/assets/images/education-smkn.png';
// @ts-ignore
import educationCollege from '@/assets/images/education-college.png';
// @ts-ignore
import educationDicoding from '@/assets/images/education-dicoding.png';
</script>

<template>
    <section id="education" class="h-[65vh] bg-zinc-800 px-80 flex justify-center items-center max-sm:px-10 max-md:px-15">
        <div>
            <!-- TITLE EDUCATION -->
            <div>
                <h2 class="text-center text-2xl text-[#0259DD] font-semibold uppercase max-sm:text-xl max-md:text-xl">Pendidikan dan Bootcamp</h2>
                <h1 class="text-center text-4xl text-white font-bold mt-5 max-sm:text-2xl max-md:text-2xl">Riwayat Pendidikan dan Bootcamp</h1>
                <div class="flex justify-center">
                    <p class="text-center mt-3 text-white max-sm:text-sm max-md:text-sm">Pernah atau sedang belajar pada kuliah atau program berikut.</p>
                </div>
            </div>
            <!-- LIST EDUCATION -->
            <div class="flex justify-center items-center gap-10 mt-10 max-sm:flex-wrap max-md:flex-wrap">
                <a href="https://www.smkn62jkt.sch.id" target="_blank">
                    <div class="grayscale transition-all duration-300 ease-out hover:grayscale-0 max-sm:grayscale-0 max-md:grayscale-0">
                        <img :src="educationSmkn" class="h-25"/>
                    </div>
                </a>
                <a href="https://polimedia.ac.id" target="_blank">
                    <div class="grayscale transition-all duration-300 ease-out hover:grayscale-0 max-sm:grayscale-0 max-md:grayscale-0">
                        <img :src="educationCollege" class="h-25"/>
                    </div>
                </a>
                <a href="https://www.dicoding.com" target="_blank">
                    <div class="grayscale transition-all duration-300 ease-out hover:grayscale-0 max-sm:grayscale-0 max-md:grayscale-0">
                        <img :src="educationDicoding" class="h-25"/>
                    </div>

                </a>
            </div>
        </div>
    </section>
</template>