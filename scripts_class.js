class User {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    print() {
        console.log(`Переиспользуем класс: Имя - ${this.name}, возраст - ${this.age}, пол - ${this.sex}`);
    }
}

const profile_2 = new User("Anton", 27, 'men');

profile_2.print();

// -------------------------------------------------------------

class Work extends User {
    constructor(name, age, sex, work_2) {
        super(name, age, sex)
        this.work_2 = work_2;
    }

    print() {
        console.log(`Который работает в ${this.work_2}`)
    }
}

const working = new Work('Anton', 27, 'men', ['продажах']);

working.print()

// -------------------------------------------------------------

function User_2(name_2, sex_2) {
    this.name_2 = name_2;
    this.sex_2 = sex_2;
}

User_2.prototype.print = function() {
    console.log('Переиспользуем функцию: ', this.name_2, this.sex_2)
}

const user = new User_2('Anton', 'men')
user.print()