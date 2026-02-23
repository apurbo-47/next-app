export default async function getPostComments(id) {
  const result1 = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );

  return result1.json();
}
