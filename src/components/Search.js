import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("React"); // The Wikipedia's API needs to have a default search term
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };

    searchWiki();
  }, [debouncedTerm]);

  // useEffect(() => {

  //   // Do FIRST TIME search: If there's a 'term' presents
  //   // && there's no results yet, search!
  //   if (term && !results.length) {
  //     searchWiki();
  //   } else {
  //     // Set and Cancel the setTimeout() to achive the desired search behavior
  //     // First, delay the search for 1 sec
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         searchWiki();
  //       }
  //     }, 1000);

  //     // Then, next execution time, whenever 'term' changes,
  //     // cancel the previous delay
  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  // }, [term]); // Call these code 1st time render & everytime "term" has changed

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>

      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
