import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    const { value } = event.currentTarget;
    setSearchQuery(value.toLowerCase().trim());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Enter valid search');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={searchQuery}
          onChange={handleInputChange}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
