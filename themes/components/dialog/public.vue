<template lang="pug">
  //- .publicDialog
  el-dialog(
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
    ref='elDialog'
  )
    //- dialog-lg dialog-md 控制光箱大小
    .close-wrapper(:class="{ 'promoteclose-wrapper': component == 'promote' }",)
      button(type="button", v-bind:class="btnColor", @click="close")
    component(:is="component", ref="dialogComponent")
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions, mapState } from 'vuex';
// import dialogComponents from '@themes/components/dialog/index';
import $ from 'jquery';

export default {
  name: 'PublicDialog',
  components: {
    // ...dialogComponents
  },
  props: {
    'visible': {
      type: Boolean,
      default: false
    },
    'isSub': {
      type: Boolean,
      default: window.noop
    },
    'openEvent': {
      type: Function,
      default: window.noop
    },
    'closeEvent': {
      type: Function,
      default: window.noop
    },
    'closedEvent': {
      type: Function,
      default: window.noop
    },
  },
  data() {
    return {
      component: null,
      customStyle: "custom-style dialog-lg",
      btnColor: "light-close"
    };
  },
  provide() {
    return {
      publicDialog: this
    }
  },
  computed: {
    modalConfig() {
      return this.isSub ? this.$store.getters.getPublicDialogSubModalConfig : this.$store.getters.getPublicDialogModalConfig;
    },
  },
  watch: {
    modalConfig: {
      handler({ componentName, size, closebtnColor }) {
        if (!componentName) return;

        size = size || 'md';
        closebtnColor = closebtnColor || 'light';
        this.component = componentName;
        this.customStyle = `custom-style dialog-${size}`;
        this.btnColor = `${closebtnColor}-close`
      },
      deep: true
    },
    visible: {
      handler(value) {
        let cmp = this;

        if (!value) {
          // 切換空component, 做清空動作
          cmp.component = null;
        }
      },
      immediate: true
    }
  },
  created() {
    const publicDialog = this;
  },
  mounted() {
    const publicDialog = this;

    // 設定dialog content data
    publicDialog.$on('dialogComponentMounted', (dialogComponent) => {
      const subData = publicDialog.modalConfig.subData;

      if (subData) {
        Object.assign(dialogComponent.$data, subData);
      }

      // assign close function
      Object.assign(dialogComponent, {
        close() {
          publicDialog.close();
        }
      });
    });

    // 呼叫 publicDialog close
    publicDialog.$on('close', () => {
      publicDialog.close();
    });
  },
  methods: {
    close() {
      this.isSub ? this.$store.dispatch('actionCloseSubDialog') : this.$store.dispatch('actionCloseDialog');
    },
    closeAll() {
      this.$store.dispatch('actionCloseDialog');
      this.$store.dispatch('actionCloseSubDialog');
    }
  }

};
</script>
<style lang="scss">


</style>
