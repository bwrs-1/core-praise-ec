<template>
    <v-app-bar density="compact" :elevation="0" class="text-center" color="transparent">
        <template v-slot:prepend>
            <v-btn>← back to</v-btn>
            <v-bottom-sheet inset>
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn v-bind="activatorProps" text="Info"></v-btn>
                </template>

                <v-card :elevation="0" class="pa-4">
                    <v-card-text>
                        <div class="text-h6 mb-2">CONTACT:</div>
                        <ul class="mb-4">
                            <p>QUALITY</p>
                            <p>AFFORDABILITY</p>
                            <p>FUNCTIONALITY</p>
                            <p>DESIGN</p>
                        </ul>
                        <div>
                            OUR AESTHETIC WILL ALWAYS BE LUXURY, BUT ENTIRE STUDIOS WILL BE ACCESSIBLE. ENTIRE STUDIOS RANGES WILL BE SIMPLY YET THOUGHTFULLY DESIGNED AND HIGH-QUALITY. WE WELCOME ANY PERSON TO WEAR ENTIRE STUDIOS AND WITHIN TIME, ENTIRE STUDIOS WILL CATER TO EVERY PERSON - IRRESPECTIVE OF AGE, GENDER OR BODY TYPE.
                        </div>
                        <div class="mt-4 text-right">- CORE PRAISE</div>
                    </v-card-text>
                </v-card>
            </v-bottom-sheet>
        </template>
        <v-app-bar-title scroll-behavior="hide" scroll-threshold="0"> C O R E  P R A I S E </v-app-bar-title>

        <template v-slot:append>
            <v-btn>collection</v-btn>
            <v-btn icon="mdi-magnify"></v-btn>
            <v-btn>bag</v-btn>
        </template>
    </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>

<style scoped>
</style>