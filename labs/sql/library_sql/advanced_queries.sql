-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all fields (book and author related) for all books written by George R.R. Martin.
    SELECT * FROM authors INNER JOIN books ON authors.id=books.author_id WHERE authors.name='George R.R. Martin';
-- Find all fields (book and author related) for all books written by Milan Kundera.
    SELECT * FROM authors INNER JOIN books ON authors.id=books.author_id WHERE authors.name='Milan Kundera';
-- Find all books written by an author from China or the UK.
    SELECT books.title FROM authors INNER JOIN books ON authors.id=books.author_id WHERE authors.nationality='China' OR authors.nationality='United Kingdom';
-- Find out how many books Albert Camus wrote.
    SELECT COUNT (books.title) FROM authors INNER JOIN books ON authors.id=books.author_id WHERE authors.name='Albert Camus';
-- Find out how many books were written by US authors.
    SELECT COUNT (books.title) FROM authors INNER JOIN books ON authors.id=books.author_id WHERE authors.nationality='United States';
-- Find all books written after 1930 by authors from Argentina.
    SELECT books.title FROM authors INNER JOIN books ON authors.id=books.author_id WHERE authors.nationality='Argentina' AND books.publication_date > 1930;
-- Find all books written before 1980 by authors not from the US.
    SELECT books.title FROM authors INNER JOIN books ON authors.id=books.author_id WHERE NOT authors.nationality='United States' AND books.publication_date < 1980;
-- Find all authors whose names start with 'J'.
    SELECT * FROM authors WHERE name Like '%J'
-- Find all books whose titles contain 'the'.

-- Find all authors who have written books with that start with the letter 'N'.
