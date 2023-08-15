<template>
  <header class="flex flex-row items-center justify-between">
    <StyledBouton @click="back"> Retour arrière</StyledBouton>
    <NuxtLink to="/"> Accueil </NuxtLink>
    <StyledBouton>Futur menu burger</StyledBouton>
  </header>
</template>

<script setup lang="ts">
function back() {
  useRouter().back()
}
</script>
