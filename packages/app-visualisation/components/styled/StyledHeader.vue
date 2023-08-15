<template>
  <header class="bg-citrine relative z-10 flex w-full flex-col">
    <div class="flex flex-row items-center space-x-4 p-4">
      <IconsBurgerIcon @click="showMenuNavigation = !showMenuNavigation" />
      <NuxtLink to="/"
        ><span class="text-rich_black">
          <b>GÉNÉRATEUR</b>
        </span>
      </NuxtLink>
    </div>
  </header>
  <StyledTransitionMenuNavigation>
    <StyledMenuNavigation
      v-show="showMenuNavigation"
      class="absolute z-0 transition"
    />
  </StyledTransitionMenuNavigation>
</template>

<script setup lang="ts">
const showMenuNavigation = ref(false)
</script>
