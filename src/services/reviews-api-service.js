export default class ReviewsApiService {
    reviews = [
        {
            id: 1,
            starsSelectedQuantity: 4,
            date: "01.03.2020",
            published: true,
            author: "Nickname",
            reviewMessage:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          },
          {
            id: 2,
            starsSelectedQuantity: 5,
            date: "02.03.2020",
            published: true,
            author: "Nickname",
            reviewMessage:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          }
    ]
    
    getRewiews = () => {

        return new Promise(resolve => {
            setTimeout(() => {
              resolve(this.reviews);
            }, 0);
          });
    }
}