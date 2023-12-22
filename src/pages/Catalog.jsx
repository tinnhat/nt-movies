import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import PageHeader from "../components/page-header/PageHeader";
import { category as cate } from "../api/tmdbApi";
import MovieGrid from "../components/movie-grid/MovieGrid";
function Catalog(props) {
  const { category } = useParams();

  return (
    <div>
      <PageHeader>
        {category === cate.movie ? "Movies" : "Tv Series"}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </div>
  );
}

Catalog.propTypes = {};

export default Catalog;
