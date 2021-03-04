# Google-Book
Create a new React-based Google Books Search app. Create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. Also use Node, Express and MongoDB so that users can save books to review or purchase later.
<br>
==============

![img](richDad.png)  

<br>

## Delete Books from Saved page

```
   function deleteBook(id) {
    // call api delete book function 
    API.deleteBook(id)
    .then((res) => saveBook()) 
    
    .catch(err => console.log(err))
  };
```
<br>

## Save Book Data

```
  function saveBooks(bookData) {
    console.log(bookData);
    API.saveBook({
      title: bookData.title,
      author: bookData.author,
      synopsis: bookData.synopsis,
      image: bookData.image,
      link: bookData.link
    })
      .catch(err => console.log(err))
  }
```
<br>

## Display Saved Books

```
      {books.map((book, index) => {
        return (<SavedCard
          key={index}
          title={book.title}
          image={book.image}
          author={book.author}
          synopsis={book.synopsis}
          link={book.link}
          // insert onclick function to pass as prop
          onClick={()=> deleteBook(book._id)}
         
        />
        )
      })}

```

<br>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com/)

## Deployed Link

* [See Live Site](https://googlebook22.herokuapp.com/)

## License

This project is licensed under the MIT License 

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Prerequisites

Git hub,
Git lab,
Git bash,
Visual studio,
Google chrome,
Bootstrap,
JavaScript,
JQuery

## Authors

**Jasmine Franklin C: 301-332-2313 E: jasminer.franklin@gmail** 

- [Link to Portfolio Site](https://jas-f.github.io/portfolio-3.0/)
- [Link to Github](https://github.com/)
- [Link to LinkedIn](https://www.linkedin.com/in/jasmine-franklin-8b08ba121)

<p>&copy; UC Berkeley Extension Bootcamp.</p>