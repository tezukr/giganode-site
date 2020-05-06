export default {
  data() {
    return {
      toTimestamp: Number(new Date()),
    }
  },
  computed: {
    fromTimestamp() {
      return new Date().setDate(new Date(this.toTimestamp).getDate() - 2);
    }
  }
}
