<script setup lang="ts">
import miscMaskDark from '@images/misc/misc-mask-dark.png'
import miscMaskLight from '@images/misc/misc-mask-light.png'
import tree1 from '@images/misc/tree1.png'
import tree3 from '@images/misc/tree3.png'
import misc404 from '@images/pages/404.png'

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)

definePage({
  alias: '/pages/misc/not-found/:error(.*)',
  meta: {
    layout: 'blank',
    public: true,
  },
})
</script>

<template>
  <div class="misc-wrapper">
    <ErrorHeader
      status-code="404"
      title="页面访问异常 ⚠️"
      description="如需帮助，请联系 LeOA 团队"
      class="mb-10"
    />

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="misc404"
        alt="Coming Soon"
        :max-width="500"
        class="mx-auto"
      />
      <VBtn
        to="/"
        class="mt-10"
        style="z-index: 1;"
      >
        返回首页
      </VBtn>

      <div class="d-md-flex gap-x-2 misc-footer-tree d-none">
        <img
          :src="tree3"
          alt="tree"
          height="120"
          width="68"
        >
        <img
          :src="tree3"
          alt="tree"
          height="70"
          width="40"
          class="align-self-end"
        >
      </div>

      <img
        height="210"
        :src="tree1"
        class="misc-footer-tree-1 d-none d-md-block"
      >
      <img
        cover
        :src="authThemeMask"
        height="172"
        class="misc-footer-img d-none d-md-block flip-in-rtl"
      >
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/misc.scss";

.misc-footer-tree, .misc-footer-tree-1 {
  position: absolute;
}

.misc-footer-tree {
  inset-block-end: 3.75rem;
  inset-inline-start: 3.75rem;
}

.misc-footer-tree-1 {
  inset-block-end: 5rem;
  inset-inline-end: 4.75rem;
}
</style>
