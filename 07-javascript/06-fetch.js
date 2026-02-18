const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // remove loading gif
    const loader = document.querySelector('#loading');
    if (loader) loader.remove();

    // center books using JavaScript styling
    app.style.display = "flex";
    app.style.flexDirection = "column";
    app.style.alignItems = "center";

    data.forEach((book) => {
      const bookDiv = document.createElement('div');
      bookDiv.className = "mb-4 text-center";

      const title = document.createElement('h5');
      title.textContent = book.name;

      const author = document.createElement('p');
      author.textContent = `by ${book.authors.join(', ')}`;

      const year = document.createElement('p');
      year.textContent = book.released.slice(0, 4);

      const pages = document.createElement('p');
      pages.textContent = `${book.numberOfPages} pages`;

      bookDiv.appendChild(title);
      bookDiv.appendChild(author);
      bookDiv.appendChild(year);
      bookDiv.appendChild(pages);

      app.appendChild(bookDiv);
    });

  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData(url);
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

