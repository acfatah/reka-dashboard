<script setup lang="ts">
import ComponentWrapper from '@/playground/components/ComponentWrapper.vue'

import AccordionDefault from '@/playground/components/accordion/AccordionDefault.vue'
import AlertDefault from '@/playground/components/alert/AlertDefault.vue'
import CustomStyleAlert from '@/playground/components/alert/CustomStyleAlert.vue'
import DescriptionOnlyAlert from '@/playground/components/alert/DescriptionOnlyAlert.vue'
import DestructiveAlert from '@/playground/components/alert/DestructiveAlert.vue'
import DetailedDestructiveAlert from '@/playground/components/alert/DetailedDestructiveAlert.vue'
import NoTitleAlert from '@/playground/components/alert/NoTitleAlert.vue'
import SuccessAlert from '@/playground/components/alert/SuccessAlert.vue'
import VeryLongDescriptionAlert from '@/playground/components/alert/VeryLongDescriptionAlert.vue'
import VeryLongTitleAlert from '@/playground/components/alert/VeryLongTitleAlert.vue'
import VeryLongTitleAndDescriptionAlert from '@/playground/components/alert/VeryLongTitleAndDescriptionAlert.vue'
import WithCTAButton from '@/playground/components/alert/WithCTAButton.vue'
import WithoutDescriptionAlert from '@/playground/components/alert/WithoutDescriptionAlert.vue'
</script>

<template>
  <div class="grid flex-1 gap-4 p-4">
    <ComponentWrapper name="Accordion">
      <AccordionDefault />
    </ComponentWrapper>

    <ComponentWrapper name="Alert">
      <div class="grid max-w-xl items-start gap-4">
        <AlertDefault />
        <SuccessAlert />
        <NoTitleAlert />
        <DescriptionOnlyAlert />
        <WithoutDescriptionAlert />
        <VeryLongTitleAlert />
        <VeryLongDescriptionAlert />
        <VeryLongTitleAndDescriptionAlert />
        <DestructiveAlert />
        <DetailedDestructiveAlert />
        <WithCTAButton />
        <CustomStyleAlert />
      </div>
    </ComponentWrapper>
  </div>

  <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <div class="aspect-video rounded-xl bg-muted/50" />
      <div class="aspect-video rounded-xl bg-muted/50" />
      <div class="aspect-video rounded-xl bg-muted/50" />
    </div>
    <div class="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min" />
  </div>
</template>
