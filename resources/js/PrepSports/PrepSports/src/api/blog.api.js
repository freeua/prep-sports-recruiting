import post from "./services/post";
import get from "./services/get";

export const getBlogs = () => post("/api/blog/articles");

export const getSidebarArticles = () => get("/api/blog/articles-sidebar");

// prev_next = "1" - if next, "0" - if prev
export const getNextPosts = (lastPostId, prev_next) =>
  post("/api/blog/articles-pagination", {
    id: lastPostId,
    prev_next
  });

export const getSinglePost = id => post("/api/blog/article", { id });
