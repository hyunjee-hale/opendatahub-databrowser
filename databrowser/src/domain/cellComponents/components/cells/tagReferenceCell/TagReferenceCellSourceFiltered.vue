<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
  <TagReferenceCell
    :items="items"
    :url="urlWithSource"
    :key-selector="keySelector"
    :label-selector="labelSelector"
    :unique="unique"
    :editable="editable"
    :show-additional-data="showAdditionalData"
    :header-label="headerLabel"
    :hide-header="hideHeader"
    @update="$emit('update', $event)"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useEditStore } from '../../../../datasets/ui/editView/store/editStore';
import TagReferenceCell from './TagReferenceCell.vue';

const props = defineProps<{
  items?: string[] | null;
  url?: string;
  keySelector?: string;
  labelSelector?: string;
  unique?: boolean | string;
  editable?: boolean;
  showAdditionalData?: boolean | string;
  headerLabel?: string;
  hideHeader?: boolean;
}>();

defineEmits<{
  update: [value: { prop: string; value: unknown }];
}>();

const editStore = useEditStore();

const source = computed(() => {
  const current = editStore.current as Record<string, unknown>;
  return typeof current?.Source === 'string' && current.Source.length > 0
    ? current.Source
    : null;
});

const urlWithSource = computed(() => {
  if (props.url == null || source.value == null) return props.url;
  return `${props.url}&source=${encodeURIComponent(source.value)}`;
});
</script>
