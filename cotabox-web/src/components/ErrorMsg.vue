<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn ma-0 pa-0 outline large color="white" v-on:click="sendPostRequest">Send</v-btn>
      </template>
      <v-card>
        <v-card-title class="red lighten-2" primary-title>All fields are required!</v-card-title>

        <v-card-text>You must provide a valid Name and participation!</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warn" flat @click="dialog = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import api from "../services/index";

export default {
  props: ["firstName", "lastName", "participation"],
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    isValid(fName, lName, part) {
      if (fName === "" || lName === "" || part === "") {
        this.dialog = true;
        return false;
      } else {
        return true;
      }
    },
    async sendPostRequest() {
      if (this.isValid(this.firstName, this.lastName, this.participation)) {
        let result;
        try {
          result = await api.post("/", {
            query: `mutation {
                createEmployee(firstName: "${this.firstName}", lastName: "${this.lastName}", particip: ${this.participation})
            }`
          });
          
        } catch (e) {
          alert(e);
        }
      }
    },
  }
};
</script>