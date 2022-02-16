<template>
  <div class="container">
    <div class="grid">
      <PostsList :posts="posts" :error="error" />
    </div>
  </div>
</template>

<script>
import PostsList from "@/components/PostsList.vue";
import getPosts from "@/composables/getPosts.js";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Home",
  components: { PostsList },
  setup() {
    const { posts, error, fetchPosts } = getPosts();
    onMounted(() => {
      fetchPosts();
      console.log(posts);
    });

    return {posts,error}
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
