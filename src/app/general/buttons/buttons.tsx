
export class CustomButton {

    private tittle: string = "";
    private backgroundColour: string = "";
    private route: string = "";

    
    setTittle() {
        this.tittle = this.tittle;
    }

    setBackgroundColour() {
        this.backgroundColour = this.backgroundColour;
    }

    getRoute() {
        return this.route;
    }

    setRoute() {
        this.route = this.route;
    }

    // function to be called when button is clicked
    onClick() {
        console.log("Clicked!");
    }

}

