import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      posts.value = await response.json();
      console.log(posts.value);
    } catch (e) {
      error.value = e.message;
      console.log(error.value);
    }
  };
  return { posts, error, fetchPosts };
};

export default getPosts;
