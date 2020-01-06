<template>
  <div class="x-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'XButtonGroup'
}
</script>

<style lang="scss">
$radius: 4px;
$borderColor: rgba(255, 255, 255, 0.5);

.x-button-group {
  display: inline-block;
  vertical-align: middle;

  & > .x-button {
    float: left;
    position: relative;
    border-radius: 0;

    &:first-child {
      border-top-left-radius: $radius;
      border-bottom-left-radius: $radius;
      border-right-color: $borderColor;
    }

    &:last-child {
      border-top-right-radius: $radius;
      border-bottom-right-radius: $radius;
      border-left-color: $borderColor;
    }

    &:not(:first-child):not(:last-child) {
      border-left-color: $borderColor;
      border-right-color: $borderColor;
    }

    &:not(:last-child) {
      margin-right: -1px;
    }
  }
}
</style>