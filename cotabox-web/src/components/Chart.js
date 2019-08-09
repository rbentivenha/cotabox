import { Doughnut } from 'vue-chartjs'

export default {
  mixins: [Doughnut],
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
      this.renderChart(this.chartdata, this.options);
      //console.log("TCL: mounted -> this.chartdata", this.chartdata);
  }
}