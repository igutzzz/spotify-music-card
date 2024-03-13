<script setup lang="ts">
   import songServices from '@/services/songServices';
    async function getSong() {
        await songServices.getToken()
        await songServices.getMusicInfo("39xOREhViooEYFpmnKTdrl")
    }
</script>

<template>
    <div class="flex items-center gap-2">
        <input type="text" placeholder="Paste the spotify link here" class="bg-inputBg text-white p-4 border-none active:border-none focus:border-none font-sans rounded-md w-[24rem] sm:w-[28rem] md:w-[32rem] placeholder:text-inputPlaceholder">
        <button @click="getSong" class="bg-green text-white font-medium p-4 rounded-md ">Generate</button>
    </div>
</template>


<style scoped>

</style>