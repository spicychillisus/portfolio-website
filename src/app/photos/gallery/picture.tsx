
class Picture {
    constructor (
        private name: string,
        private image: string, // put in the image path
        private date: { 
            year_taken: string, 
            month_taken: string, 
            day_taken: string 
        },
        private description: string
    ) {}

    getName() {
        return this.name;
    }

    getImage() {
        return this.image;
    }

    getDate() {
        return this.date;
    }

    getYear() {
        return this.date.year_taken;
    }

    getMonth() {
        return this.date.month_taken;
    }

    getDay() {
        return this.date.day_taken;
    }

    getDescription() {
        return this.description;
    }

}

export default Picture;