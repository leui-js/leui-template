<template>
  <div class="h-100 d-flex align-center justify-space-between text-medium-emphasis">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
      Dev With
      <VIcon
        icon="ri-heart-line"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
      By <a
        href="//oa.fenqile.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >LeOA Team</a>
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
        href="//ledocs.oa.fenqile.com/desktop/folder/FOLDER58c4b571d72af55265094ecf5755ecc4"
        target="noopener noreferrer"
      >Documentation</a>
    </span>
  </div>
</template>
