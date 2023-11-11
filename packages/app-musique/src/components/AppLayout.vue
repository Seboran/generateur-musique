<template>
  <StyledHeader />
  <div class="bg-ghost_white flex min-h-screen justify-center">
    <Head>
      <Title>Musique</Title>
    </Head>
    <slot />
  </div>
</template>

<script setup lang="ts">
import StyledHeader from './styled/StyledHeader.vue'
</script>
