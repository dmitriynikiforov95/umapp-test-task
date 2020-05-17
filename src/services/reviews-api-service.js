export default class ReviewsApiService {

  getRewiews = () => {
    return new Promise(resolve => {
      let reviews = localStorage.getItem('reviews') ? JSON.parse(localStorage.getItem('reviews')) : [];
      setTimeout(() => {
        resolve(reviews);
      }, 100);
    });
  };
}
