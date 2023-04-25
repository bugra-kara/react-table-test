/* Get the data when the Home Page is render */
export const homePageLoader = async () => {
 try {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response
 }
 catch (error) {
  return error
 }
}