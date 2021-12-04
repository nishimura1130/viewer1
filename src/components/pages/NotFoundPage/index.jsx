import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <>
    <h1>Not Found!</h1>
    <Link to="/">TopPage</Link>
  </>
);

export default NotFoundPage;