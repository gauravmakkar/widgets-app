
export const getBooks = async () => {
  const response =  await fetch("/db/books.json");
  return await response.json();
};

export const getBookById = async (id) => {
  const response =  await fetch("/db/books.json");
  const books = await response.json()
  return books.find((book) => book.id === +id)
}
