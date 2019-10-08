<!--函数式组件-->
<template >
  
</template>

<script lang ="ts">
import GlobalEventEmitter from "@/global/GlobalEventEmitter";
import GlobalEvent from "@/global/GlobalEvent";
import { Component, Vue, Prop } from "vue-property-decorator";
import { ModalConfig } from "iview";

@Component
export default class Global extends Vue {
  public functional: boolean = true;
  constructor() {
    super();
    this.addListener();
  }

  private addListener(): void {
    GlobalEventEmitter.getInstance().addListener(
      GlobalEvent.Modal,
      this.onGetGlobalModal
    );
  }
  /**
   * 弹出全局对话框
   */
  private onGetGlobalModal(config: ModalConfig | string): void {
    this.$Modal.info(config);
  }
}
</script>>