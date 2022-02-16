<template>
  <div class="post-list">
    <div v-if="posts">
        <h2>{{posts.title}}</h2>
        <p>
            {{posts.body}}
        </p>
    </div>
    <div v-else>
        {{error}}
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts","error"],
  setup() {

  },
};
</script>

<style></style>
