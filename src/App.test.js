import React from 'react';
/* import ReactDOM from 'react-dom'; */
/* import { screen, getQueriesForElement } from '@testing-library/react'; */
import userEvent from '@testing-library/user-event';
import {render, wait} from'@testing-library/react';
import App from './App';
import {api} from './api';

/* function render(component) {
  const root = document.createElement('div');
  ReactDOM.render(component, root);
  return getQueriesForElement(root);
} */

test('List of activities', () => {
  
  const { getByText, getByLabelText, getByPlaceholderText } = render(<App />);
/* expect(root.querySelector('h2').textContent).toBe('To Do List'); */
  expect(getByText('To Do List')).not.toBeNull();
/*   expect(getByLabelText('Add')).not.toBeNull(); */
  expect(getByPlaceholderText('Add Todo...')).not.toBeNull();
});


test('add items to list', () => {
  
  const { getByText, getByLabelText, getByPlaceholderText } = render(<App />);

  const input = getByPlaceholderText('Add Todo...');
    userEvent.type(input, 'wash car');
/*   fireEvent.change(input, {target: { value: 'wash car' }}) */
/*   fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'}) */
  userEvent.keyboard('{enter}');
  getByText('wash car (-)'); 

});


test('user-events allows users to add...', () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText('Add Todo...');
  userEvent.type(input, 'Learn Portugues');
  userEvent.keyboard('{enter}');
  getByText('Learn Portugues (-)');
});

///////////////////////////////////////////////
// Mock API
/* const mockCreateItem = (api.createItem = jest.fn());

test('add items to list with API',async () => {
  const todoText = 'Learn something new';
  const test = mockCreateItem.mockResolvedValueOnce(todoText);
  const { getByText, getByPlaceholderText } = render(<App />);

  const input = getByPlaceholderText('Add Todo...');
  userEvent.type(input, test);
  userEvent.keyboard('{enter}');
  await wait(() => getByText('Learn something new (-)')) ; 
  expect(mockCreateItem).toBeCalledTimes(1);
}); */