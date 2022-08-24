import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Form, SearchButton, SearchInput, Icon } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    const { value } = event.currentTarget;
    setSearchQuery(value.toLowerCase().trim());
    console.log(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Enter valid search');
    }
    onSubmit(searchQuery);
    // console.log(searchQuery);
    // setSearchQuery('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          value={searchQuery}
          onChange={handleInputChange}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <SearchButton type="submit">
          <Icon />
        </SearchButton>
      </Form>
    </div>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
