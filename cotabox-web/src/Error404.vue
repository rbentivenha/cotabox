<template>
  <v-container fluid>
    <v-layout column>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs8>
          <v-card>
            <v-img
              src="https://valvula.marketing/wp-content/uploads/2019/04/404-900x300.png"
              aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">404: Page not found</h3>
                <div>{{ card_text }}</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      card_text: "The Page you are looking does not exist!!"
    };
  }
};
</script>
