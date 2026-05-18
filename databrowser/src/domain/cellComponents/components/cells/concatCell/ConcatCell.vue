<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
  <span>{{ merged }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  separator?: string;
}>();

const merged = computed(() => {
  const parts = [props.text1, props.text2, props.text3, props.text4].filter(
    (v) => v != null && v !== ''
  );
  return parts.join(props.separator ?? ' - ');
});
</script>
