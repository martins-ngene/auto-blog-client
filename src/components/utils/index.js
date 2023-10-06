// Function to get last three posts from array
export const getLatestArticles = arr => {
  const n = 3;
  const result = arr.slice(-n);
  return result;
};

// Function to Search For Articles by Title
export const searchForAnArticle = (arr, searchTerm) => {
  const searchedArticle = arr.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return searchedArticle;
};

// Function to scroll back to the top of a page
export const scrollPageToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
