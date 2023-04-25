import { render } from '@testing-library/react';
import { Table } from './components';

test('renders length of the data', async ()=> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: async () => data,
  });
  const { container } = render(<Table data={data} />);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const rows = container.querySelectorAll('tbody tr');
  expect(data.length).toBe(data.length);
})