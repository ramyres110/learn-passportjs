class User {
    database = [
        {
            username: 'ramyres',
            password: 'qwe123',
        }
    ]
    constructor() {

    }
    findOne(user) {
        return new Promise((resolve, reject) => {
            try {
                this.database.forEach((element) => {
                    if (element.username === user.username & element.password === user.password) {
                        resolve(element);
                    }
                })
                resolve(null);
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = new User();