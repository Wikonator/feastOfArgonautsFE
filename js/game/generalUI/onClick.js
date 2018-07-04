function onButtonOver() {
    if (this.isdown) {
        return;
    }
    this.texture = this.hover;
}

function onButtonOut() {
    if (this.isdown) {
        return;
    }
    this.texture = this.normal;
}

function onClick() {
    if (this.isdown) {
        this.isdown = false;
        this.texture = this.hover;
    } else {

        this.isdown = true;
        this.texture = this.pressed;
        this.alpha = 1;
    }
}