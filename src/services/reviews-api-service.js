export default class ReviewsApiService {
  reviews = [
    {
      selectedStarsQuantity: 4,
      date: "02.03.2020",
      author: "Nickname",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
    },
    {
      selectedStarsQuantity: 5,
      date: "01.03.2020",
      author: "Nickname",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
    }
  ];

  getRewiews = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.reviews);
      }, 0);
    });
  };
}
