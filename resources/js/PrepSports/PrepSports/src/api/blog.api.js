import post from "./services/post";
import get from "./services/get";

export const getBlogs = () => post("/blog/articles");

export const getSidebarArticles = () => get("/blog/articles-sidebar");

// prev_next = "1" - if next, "0" - if prev
export const getNextPosts = (lastPostId, prev_next) =>
  post("/blog/articles-pagination", {
    id: lastPostId,
    prev_next
  });

export const getSinglePost = id => post("/blog/article", { id });
