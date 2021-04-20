const API = "https://api.themoviedb.org/3"
export const get = (path) => {
    return  fetch(API + path, {
        headers: {
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzUwYjc3YjNhZGQ0NTJmYzA2YmM3ODVjMWZjYzlhMSIsInN1YiI6IjYwN2RmNzA2ZjY3ODdhMDAyOTllODcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.88TdHHOaLoDvaySiDm_1pZ4TC2smvVbwuiyMwTfoCXs",
          'Content-Type': "application/json;charset=utf-8"
        }
    })
    .then(result => result.json());
}
