window.addEventListener("load", async function () {
  try {
    const response = await fetch("/api/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage.getItem("token"),
      },
    });
    const books = await response.json();
    if (books.error) document.body.innerHTML = `<h1>${books.error}</h1>`;
    else books.forEach((book) => makeBookElem(book, document.body));
  } catch (error) {}
});

const makeBookElem = (book, parentElem = null) => {
  let bookElem = document.createElement("div");

  bookElem.innerHTML = `Title: ${book.title}<br/>
Author: ${book.author}<br/>
Price: ${book.price}<br/>
`;
  if (parentElem) parentElem.append(bookElem);
  return bookElem;
};
