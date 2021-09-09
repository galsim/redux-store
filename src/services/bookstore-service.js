export default class BookstoreService {
    data = [
        {
            id: 9,
            title: 'Маленький принц',
            author: 'Антуа де Сент-Экзюпери',
            price: 32,
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T.N.',
            price: 32,
        }
    ]
    
    getBooks() {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.75) resolve(this.data)
                else reject(new Error('Something is bad happened'))
            }, 1000)
        })
    }
}