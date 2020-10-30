import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, readBook } from '../../store/ducks/reducer';
import {
  Wrapper,
  Title,
  Author,
  Year,
  DeleteButton,
  ReadState,
} from './styles';

function BookCard({ id, title, author, year, isRead }) {
  const dispatch = useDispatch();

  const handleDeleteBook = () => {
    dispatch(removeBook(id));
  };

  const handleReadBook = () => {
    if (isRead === true) {
      return;
    }
    dispatch(readBook(id));
  };

  return (
    <Wrapper isRead={isRead}>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Year>{year}</Year>
      <DeleteButton onClick={handleDeleteBook} />
      {isRead ? (
        <ReadState isRead={isRead} onClick={handleReadBook}>
          Lido
        </ReadState>
      ) : (
        <ReadState isRead={isRead} onClick={handleReadBook}>
          Não lido
        </ReadState>
      )}
    </Wrapper>
  );
}

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  year: PropTypes.number,
  isRead: PropTypes.bool.isRequired,
};

BookCard.defaultProps = {
  title: 'Título não informado',
  author: 'Autor não informado',
  year: 'Ano não informado',
};

export default BookCard;
