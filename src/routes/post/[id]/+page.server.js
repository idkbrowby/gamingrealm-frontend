import * as api from "../../../lib/api";


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const postId = params.id;
  const res = await api.get(`post/${postId}`);
  const data = await res.json();
  const postData = data.post;
  const commentsData = data.comments;
  const avgRating = data.avg_rating;
  return {
    post: postData,
    comments: commentsData,
    avgRating: avgRating
  };
}