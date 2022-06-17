<script setup lang="ts">
import Lab from '~/components/icons/Lab.svg'

const { t } = useI18n()
</script>

<template lang="pug">
div
  | {{t('not-found')}}
.m-1
  Lab
</template>

<route lang="yaml">
meta:
  layout: default
</route>
