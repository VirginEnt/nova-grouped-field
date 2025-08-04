<template>
    <div>
        <span :key="index" v-for="(childField, index) in field.fields">
            <router-link
                v-if="childField.value && childField.belongsToId"
                :to="{name: 'detail', params: {
                    resourceName: childField.resourceName,
                    resourceId: childField.belongsToId
                }}"
                class="no-underline font-bold dim text-primary"
            >
                <span v-if="field.showLabels">{{ childField.name }}: </span>
                {{ childField.value }}
            </router-link>
            <span v-else>
                <span v-if="field.showLabels">{{ childField.name }}: </span>
                <span v-html="showNonLinkValue(childField)" />
            </span>
            <span v-if="index + 1 != field.fields.length" v-html="field.separator"/>
        </span>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  resource: Object,
  resourceName: String,
  resourceId: [String, Number],
  field: Object
});

function showNonLinkValue(field) {
  // Nova 5 uses dayjs, not moment
  if (field.component === 'date' && field.format && typeof dayjs !== 'undefined') {
    return dayjs(field.value).format(field.format);
  } else {
    return field.value;
  }
}
</script>