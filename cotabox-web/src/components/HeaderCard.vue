<template>
  <v-layout pa-0 ma-0 justify-center>
      <v-card flat>
        <v-card-title primary-title>
          <div>
            <h3 class="text-xs-center ma-2 body-2">DATA</h3>
            <p class="text-xs-center body-1">{{ card_text }}</p>
          </div>
        </v-card-title>
      </v-card>
  </v-layout>
</template>


<script>
  export default {
    props: {
        message: String,
    },
    computed: {
      card_text() {
        return this.message || 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea.';
      }
    }
  }
</script>