import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Form, SearchButton, SearchInput, Icon } from './SearchForm.styled';

export default function SearchForm({ onSubmit }) {
  // const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');

  const [searchQuery, setSearchQuery] = useState(search || '');

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
