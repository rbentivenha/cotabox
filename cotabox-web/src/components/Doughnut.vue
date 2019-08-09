<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs8 pa-8>
        <Doughnut v-if="loaded" :chartdata="chartdata" :options="options" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Doughnut from "./Chart.js";

export default {
  name: "DoughnutContainer",
  components: { Doughnut },
  props: ["labels", "particip", "loaded"],
  data: function() {
    return {
      options: { labels: ["Red"], borderAlign: "center" },
      colors: []
    };
  },
  computed: {
    chartdata: function() {
      return {
        datasets: [
          {
            data: this.particip,
            backgroundColor: this.backgroundColor
          }
        ],
        labels: this.labels
      };
    },
    backgroundColor() {
      const len = this.labels.length;
      let colors = [];
      for (let i = 0; i < len; i++) {
        colors.push(this.randomColors());
      }
      return colors;
    }
  },
  methods: {
    randomColors() {
      const hex = "0123456789ABCDEF";
      let color = "#";
      // Pega um número aleatório no array acima
      for (var i = 0; i < 6; i++) {
        //E concatena à variável cor
        color += hex[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
};
</script>

