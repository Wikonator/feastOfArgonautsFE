 function hitTestRectangle(r1, r2) {

        r1.centerX = r1.x + r1.width / 2;
        r1.centerY = r1.y + r1.height / 2;
        r2.centerX = r2.x + r2.width / 2;
        r2.centerY = r2.y + r2.height / 2;


        r1.halfWidth = r1.width / 2;
        r1.halfHeight = r1.height / 2;
        r2.halfWidth = r2.width / 2;
        r2.halfHeight = r2.height / 2;

        let collision = false;

        if (Math.abs(r1.centerX - r2.centerX) < r1.halfWidth + r2.halfWidth
            && Math.abs(r1.centerY - r2.centerY) < r1.halfHeight + r2.halfHeight) {
            collision = true;
        }

        return collision;
    }
