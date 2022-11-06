import React from 'react';
import { Link } from 'react-router-dom';

const Article = () => {
  return (
    <article className="mt-90">
  <header className="text-center mb-40">
    <h3>
      <a href="blog-single.html">My diary</a>
    </h3>
    <div className="link-color-default fs-12">
      <a href>Published</a>,
      <time>Oct 01, 2022</time>
    </div>
  </header>
  <a href="blog-single.html">
    <img className="rounded" src="assets/img/blog-3.jpg" alt="..." />
  </a>
  <div className="card-block">
    <p className="text-justify">What began as the story of one yogi's 
    personal journey has transformed into a great all-round yoga blog. 
    Featuring classic texts and stories from around the yoga world, 
    The Yoga Lunchbox is a wonderful resource that has a strong community feel.</p>
    <p className="text-center mt-40">
      <Link className="btn btn-primary btn-round" to="/article/some-title-slug">Read more</Link>
    </p>
  </div>
</article>

  );

};

export default Article;
