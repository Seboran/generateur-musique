<template>
  <header>
    <StyledBouton @click="back">Accueil</StyledBouton>
  </header>
</template>

<script setup lang="ts">
function back() {
  useRouter().back()
}
</script>
