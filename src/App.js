// import logo from './logo.svg';
// import './App.css';
import React from "react";
import axios from "axios";

import './assets/css/bootstrap.min.css';
import './assets/css/responsive.css';
import './assets/css/style.css';

import CategoriesMenu from './components/categories/';

const baseURL = "http://dev-jualankita.msi/api";

function App() {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}/categories`).then((res) => {
      setCategories(res.data.data);
    });
  }, []);

  return (
    <div className="container">
    { categories && <CategoriesMenu navLinksData={categories} />}
    </div>
  );
}

export default App;
