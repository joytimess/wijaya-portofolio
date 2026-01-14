<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
// @ts-ignore
import portofolioSuburbHub from '@/assets/images/portofolio-suburb-hub.jpg';
// @ts-ignore
import portofolioMax from '@/assets/images/portofolio-max-11.jpg';
// @ts-ignore
import portofolioGT from '@/assets/images/portofolio-gt-radial.png';
// @ts-ignore
import portofolioSubaru from '@/assets/images/portofolio-subaru.png';
// @ts-ignore
import portofolioSelf from '@/assets/images/portofolio-self.png';
// @ts-ignore
import portofolioSelfSmall from '@/assets/images/portofolio-self-small.png';
// @ts-ignore
import feather from 'feather-icons'

onMounted(async () => {    
    await nextTick()
    feather.replace()
})
</script>

<template>
    <section id="portofolio" class="px-80 py-20 bg-slate-200 max-sm:px-10 max-md:px-15 max-xl:px-20 max-2xl:px-40">
        <!-- TITLE PORTOFOLIO -->
        <div>
            <h2 class="text-center text-2xl text-[#0259DD] font-semibold uppercase max-sm:text-lg max-md:text-lg">Portofolio</h2>
            <h1 class="text-center text-4xl font-bold mt-5 max-sm:text-2xl max-sm:mt-2.5 max-md:mt-2.5">Project Terbaru</h1>
            <div class="flex justify-center">
                <p class="text-center mt-3 inline-block w-125 max-sm:text-sm max-md:text-base">Berikut adalah progress project-project yang pernah saya kembangkan sebagai pengembang website.</p>
            </div>
        </div>
        <!-- PORTOFOLIO LATEST -->
        <div class="flex items-center gap-10 mt-10 max-sm:grid max-sm:grid-cols-1 max-md:grid max-md:grid-cols-1">
            <a href="https://suburb-hub.vercel.app" target="_blank" class="relative group w-1/3 bg-[#FF6648] h-100 rounded-4xl overflow-hidden max-sm:w-full max-md:w-full">
                <div class="
                    absolute 
                    top-6 left-6
                    w-20
                    opacity-0 scale-75
                    transition-all duration-300 ease-out
                    group-hover:opacity-100
                    group-hover:scale-100
                    max-sm:opacity-100
                    max-md:opacity-100
                    max-lg:opacity-100">
                    <i data-feather="link" class="w-7 h-7 text-white max-sm:w-10 max-sm:h-10 max-md:w-10 max-md:h-10"></i>
                </div>
                <div class="py-5">
                    <p class="text-right px-5 text-2xl text-white font-semibold">Suburb Hub</p>
                </div>
                <img :src="portofolioSuburbHub" alt="portofolio-suburb-hub.jpg" 
                    class="
                        scale-250 translate-x-85 translate-y-35 rounded-xl
                        transition-all duration-300 ease-out
                        group-hover:translate-y-42.5
                        max-sm:scale-175
                        max-sm:translate-x-50
                        max-sm:translate-y-20
                        max-md:scale-125
                        max-md:translate-x-30
                        max-md:translate-y-10
                        max-lg:translate-x-65
                        max-lg:translate-y-25">
            </a>
            <a href="https://max-11.vercel.app" target="_blank" class="relative group w-2/3 bg-[#1EC338] h-100 rounded-4xl overflow-hidden max-sm:w-full max-md:w-full">
                <div class="
                    absolute 
                    top-6 left-6
                    w-20
                    opacity-0 scale-75
                    transition-all duration-300 ease-out
                    group-hover:opacity-100
                    group-hover:scale-100
                    max-sm:opacity-100
                    max-md:opacity-100
                    max-lg:opacity-100">
                    <i data-feather="award" class="w-7 h-7 text-white max-sm:w-10 max-sm:h-10 max-md:w-10 max-md:h-10"></i>
                </div>
                <div class="py-5">
                    <p class="text-right px-5 text-2xl text-white font-semibold">MAX-11</p>
                </div>
                <img :src="portofolioMax" alt="portofolio-max-11.jpg"
                    class="
                        translate-x-15 rounded-xl
                        transition-all duration-300 ease-out
                        group-hover:translate-y-5
                        max-sm:scale-175
                        max-sm:translate-x-50
                        max-sm:translate-y-20
                        max-md:scale-125
                        max-md:translate-x-30
                        max-md:translate-y-10
                        max-lg:scale-115
                        max-lg:translate-x-25
                        max-lg:translate-y-10">
            </a>
        </div>
        <!-- SUPPORT PORTOFOLIO -->
        <div class="flex items-center gap-10 mt-10 max-sm:grid max-sm:grid-cols-1 max-md:grid max-md:grid-cols-1">
            <a href="https://subaru-copied-with-vue.vercel.app" target="_blank" class="relative group w-2/3 bg-[#00A0DC] h-100 rounded-4xl overflow-hidden max-sm:w-full max-md:w-full">
                <div class="
                    absolute 
                    top-6 left-6
                    w-20
                    opacity-0 scale-75
                    transition-all duration-300 ease-out
                    group-hover:opacity-100
                    group-hover:scale-100
                    max-sm:opacity-100
                    max-md:opacity-100
                    max-lg:opacity-100">
                    <svg role="img" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <title>Subaru</title>
                        <path fill="#FFFFFF" d="M12 4.983c3.004 0 6.224.612 8.786 2.239C22.451 8.286 24 9.9 24 12.002c0 2.456-2.097 4.242-4.106 5.287-2.391 1.238-5.216 1.728-7.894 1.728-3.003 0-6.217-.605-8.78-2.238C1.556 15.714 0 14.101 0 12.003 0 9.536 2.092 7.757 4.106 6.71 6.504 5.474 9.323 4.983 12 4.983zm-.025.746c-2.793 0-5.802.523-8.225 1.983-1.524.912-3.03 2.347-3.03 4.253 0 2.239 2.04 3.806 3.864 4.706 2.258 1.102 4.897 1.53 7.391 1.53 2.798 0 5.809-.523 8.232-1.983 1.517-.918 3.029-2.346 3.029-4.253 0-2.243-2.035-3.813-3.864-4.705-2.258-1.104-4.898-1.53-7.397-1.53zm-10.54 4.686l4.597-.784 1.384-3.003L8.794 9.63l4.596.784-4.596.792-1.378 3.01-1.384-3.01zm10.106 2.289l2.028-.356.605-1.359.606 1.359 2.028.356-2.028.35-.606 1.36-.605-1.36zm4.196-3.621l2.028-.35.605-1.365.606 1.364 2.028.35-2.028.357-.606 1.36-.606-1.36zM13.57 15.51l2.02-.35.607-1.365.612 1.365 2.027.35-2.027.357-.612 1.36-.606-1.36zm-6.23.491l2.028-.35.612-1.366.605 1.366 2.028.35-2.028.357-.605 1.359-.612-1.359zm10.196-3.353l2.022-.357.605-1.359.612 1.359 2.028.357-2.028.35-.612 1.357-.606-1.357Z"/>
                    </svg>
                </div>
                <div class="py-5">
                    <p class="text-right px-5 text-2xl text-white font-semibold">Subaru Indonesia Copied</p>
                </div>
                <img :src="portofolioSubaru" alt="portofolio-subaru.png"
                    class="
                        translate-x-15 rounded-xl
                        transition-all duration-300 ease-out
                        group-hover:translate-y-5
                        max-sm:scale-175
                        max-sm:translate-x-50
                        max-sm:translate-y-20
                        max-md:scale-125
                        max-md:translate-x-30
                        max-md:translate-y-10
                        max-lg:scale-125
                        max-lg:translate-x-30
                        max-lg:translate-y-10">
            </a>
            <div class="relative group w-1/3 bg-[#ED3F27] h-100 rounded-4xl overflow-hidden max-sm:w-full max-md:w-full">
                <div class="
                    absolute 
                    top-6 left-6
                    w-20
                    opacity-0 scale-75
                    transition-all duration-300 ease-out
                    group-hover:opacity-100
                    group-hover:scale-100
                    max-sm:opacity-100
                    max-md:opacity-100
                    max-lg:opacity-100">
                    <svg fill="#ffffff" width="50px" height="50px" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier">
                        <title/>
                        <path d="M278.69,345.08A127.26,127.26,0,0,0,294,326.57c.13-.18.25-.36.37-.55a126,126,0,0,0,20.94-77.67,7.78,7.78,0,0,0-.11-1.73,125.85,125.85,0,0,0-12.11-45.37,8.75,8.75,0,0,0-.46-1,126.13,126.13,0,0,0-57.12-57.19,8.7,8.7,0,0,0-1.11-.53,125.94,125.94,0,0,0-45.22-12.1,7.66,7.66,0,0,0-1.78-.12,125.92,125.92,0,0,0-77.87,21l-.31.21a126,126,0,0,0-34.13,34.18l0,0a126,126,0,0,0-21.1,78,8.33,8.33,0,0,0,.11,1.79,126.16,126.16,0,0,0,12.11,45.26,7.66,7.66,0,0,0,.5,1A126.13,126.13,0,0,0,133.9,369a8,8,0,0,0,1,.49,126.13,126.13,0,0,0,45.42,12.09,9.2,9.2,0,0,0,1.26.11l.23,0c2.59.16,5.18.25,7.78.25a125.86,125.86,0,0,0,70.18-21.3l.23-.15A126.84,126.84,0,0,0,278.69,345.08ZM286,309,248.9,271.89l50.6-13.55A110,110,0,0,1,286,309Zm-2.28-109.9L233,212.66,246.62,162a110.27,110.27,0,0,1,37.09,37.13Zm-96.32-53L173.8,196.8l-37.18-37.18A110.09,110.09,0,0,1,187.39,146.1Zm-64.47,22.45,49.36,49.36a8,8,0,0,0,5.66,2.34A8.17,8.17,0,0,0,180,220a8,8,0,0,0,5.66-5.66L203.72,147A109.83,109.83,0,0,1,232,154.55L214,221.91A8,8,0,0,0,221.71,232a7.71,7.71,0,0,0,2.07-.28l67.32-18A110.17,110.17,0,0,1,298.64,242l-67.27,18a8,8,0,0,0-3.59,13.39l49.28,49.28a110.58,110.58,0,0,1-20.73,20.73l-49.28-49.28a8,8,0,0,0-13.39,3.59l-18,67.3a110.09,110.09,0,0,1-28.33-7.52l18-67.37a8,8,0,0,0-9.8-9.8L88.14,298.4a110.38,110.38,0,0,1-7.55-28.32L148,252a8,8,0,0,0,3.59-13.38l-49.37-49.36a110.24,110.24,0,0,1,20.74-20.73Zm119.71,183.8A110,110,0,0,1,192,365.9l13.56-50.65ZM93.25,203l37.19,37.19L79.71,253.75A110.12,110.12,0,0,1,93.25,203Zm2.29,110,50.77-13.61-13.59,50.74A110.17,110.17,0,0,1,95.54,313Zm94.07-26.37a30.65,30.65,0,1,0-21.68-9A30.53,30.53,0,0,0,189.61,286.62Zm-10.36-41a14.66,14.66,0,1,1,0,20.74A14.64,14.64,0,0,1,179.25,245.6Zm308.44-29.92V160.07a54.4,54.4,0,0,0-54.34-54.34H258.66A165.34,165.34,0,1,0,189.61,421.3a167.06,167.06,0,0,0,31.49-3H433.35A54.39,54.39,0,0,0,487.69,364V308.36a54.36,54.36,0,0,0-26-46.34A54.35,54.35,0,0,0,487.69,215.68Zm-16,92.68v19.8H445.74L469.27,295A38.29,38.29,0,0,1,471.69,308.36Zm-3.09,70.7-23.35-34.9h26.44V364A38.15,38.15,0,0,1,468.6,379.06Zm3.09-219v19.8H445.74l23.53-33.21A38.29,38.29,0,0,1,471.69,160.07Zm-45.55,19.8H396.31l41-57.93a38.2,38.2,0,0,1,22.46,10.41ZM346.38,328.16,385.3,270h32.58L376.7,328.16ZM388.06,254l-41.19-58.15H376.7L417.89,254ZM376.7,179.87H346.38l38.92-58.14h32.58Zm-44.52-7.54a163.65,163.65,0,0,0-14.76-21.16l19.7-29.44H366ZM368.46,254H354.81a166.28,166.28,0,0,0-1.66-21.6Zm-14.23,16H366l-15.38,23A166.07,166.07,0,0,0,354.23,270Zm-25.82,75.76,40,56.53H337.8L311.35,367.8A164.61,164.61,0,0,0,328.41,345.78Zm18.46-1.62H376.7l41.19,58.15H388.06Zm49.44,0H426l32.57,48.67a38.22,38.22,0,0,1-21.21,9.27Zm29.83-16H396.31l41-57.93a38.2,38.2,0,0,1,22.46,10.41ZM396.31,195.87H426l32.57,48.66a38.16,38.16,0,0,1-21.21,9.28Zm48.94,0h26.44v19.81a38.1,38.1,0,0,1-3.09,15.08ZM317.86,121.73,306.33,139a168.17,168.17,0,0,0-20.26-17.23ZM84,361.57c-58.22-58.21-58.22-152.93,0-211.14a149.46,149.46,0,0,1,211.14,0c58.21,58.21,58.21,152.93,0,211.14S142.25,419.78,84,361.57Zm215.84,17.57,17.76,23.17h-51A165,165,0,0,0,299.88,379.14Z"/>
                        </g>
                    </svg>
                </div>
                <div class="py-5">
                    <p class="text-right px-5 text-2xl text-white font-semibold max-lg:text-xl">GT-Radial Copied</p>
                </div>
                <img :src="portofolioGT" alt="portofolio-gt-radial.jpg" 
                    class="
                        scale-250 translate-x-90 translate-y-45 rounded-xl
                        transition-all duration-300 ease-out
                        group-hover:translate-y-50
                        max-sm:scale-175
                        max-sm:translate-x-50
                        max-sm:translate-y-30
                        max-md:scale-125
                        max-md:translate-x-30
                        max-md:translate-y-10
                        max-lg:translate-x-65
                        max-lg:translate-y-35">
            </div>
        </div>
        <!-- ADDITIONAL PORTOFOLIO -->
        <a
            href="https://wijaya-portofolio.vercel.app"
            target="_blank"
            class="relative group block w-full bg-[#0259DD] h-100 rounded-4xl overflow-hidden mt-10"
            >
            <div
            class="
                absolute z-20
                top-6 left-6
                w-20
                opacity-0 scale-75
                transition-all duration-300 ease-out
                group-hover:opacity-100
                group-hover:scale-100
                max-sm:opacity-100
                max-md:opacity-100
                max-lg:opacity-100
            "
            >
                <i data-feather="file-text" class="w-7 h-7 text-white max-sm:w-10 max-sm:h-10"></i>
            </div>
            <div class="relative py-5 z-20">
                <p class="text-right px-5 text-2xl text-white font-semibold">
                    Portofolio Pribadi
                </p>
            </div>
            <img
            :src="portofolioSelfSmall"
            alt="portofolio-pribadi-small.png"
            class="
                hidden
                relative z-10
                scale-65 -translate-y-30 rounded-xl
                transition-all duration-300 ease-out
                group-hover:-translate-y-25
                max-sm:block
                max-sm:scale-145
                max-sm:translate-x-35
                max-sm:translate-y-15
                max-md:scale-115
                max-md:translate-x-25
                max-md:translate-y-10
            "
            >
            <img
            :src="portofolioSelf"
            alt="portofolio-pribadi.png"
            class="
                relative z-10
                scale-65 -translate-y-30 rounded-xl
                transition-all duration-300 ease-out
                group-hover:-translate-y-25
                max-sm:hidden
                max-sm:scale-100
                max-sm:translate-x-25
                max-sm:translate-y-30
                max-md:scale-115
                max-md:translate-x-25
                max-md:translate-y-10
                max-lg:scale-115
                max-lg:translate-x-25
                max-lg:translate-y-10
            "
            >
        </a>

    </section>
</template>