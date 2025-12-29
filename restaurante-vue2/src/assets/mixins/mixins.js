export default {
  data() {
    return {
      windowWidth: typeof window !== 'undefined' ? window.innerWidth : 1024,
    };
  },
  methods: {
    isDesktop() {
      return this.windowWidth > 768;
    },
    _onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener('resize', this._onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this._onResize);
  },
};