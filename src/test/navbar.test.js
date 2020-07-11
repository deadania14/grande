import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Topbar from '../components/topbar'

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return { 
  ...render (
  <Router history={history}>
      {component}
  </Router>
  )
}
}

it('should render the home page', () => {

  const { container, getByTestId } = renderWithRouter(<Topbar />) 
  const navbar = getByTestId('navbar')
  const link = getByTestId('home-link')

  expect(container.innerHTML).toMatch('Home')
  expect(navbar).toContainElement(link)
})