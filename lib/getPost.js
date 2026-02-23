export default async function getPost(id) {
  const result2 = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  return result2.json();
}
