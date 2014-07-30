var changeEvent = 0;
/* 

	FUNCTION rgb encodes rgb values into a CSS readable hex string

	params:
		r 		red value
		g 		green value
		b 		blue value

	return:
		Hex encoded string representing the three values

*/
function rgb(r, g, b) {
    return '#' + (r > 16 ? r.toString(16) : "0" + r.toString(16)) + (g > 16 ? g.toString(16) : "0" + g.toString(16)) + (b > 16 ? b.toString(16) : "0" + b.toString(16));
}

/*

	FUNCTION checkColor compares a string against a list of known CSS color values and returns any matches as a hex encoded rgb value

	params:
		c 		String representing the plain-text color value

	return:
		Hex encoded string representing the color 
		or false if there are no matches

*/
function checkColor(c) {
    var colors = {
        "aliceblue": "#f0f8ff",
        "antiquewhite": "#faebd7",
        "aqua": "#00ffff",
        "aquamarine": "#7fffd4",
        "azure": "#f0ffff",
        "beige": "#f5f5dc",
        "bisque": "#ffe4c4",
        "black": "#000000",
        "blanchedalmond": "#ffebcd",
        "blue": "#0000ff",
        "blueviolet": "#8a2be2",
        "brown": "#a52a2a",
        "burlywood": "#deb887",
        "cadetblue": "#5f9ea0",
        "chartreuse": "#7fff00",
        "chocolate": "#d2691e",
        "coral": "#ff7f50",
        "cornflowerblue": "#6495ed",
        "cornsilk": "#fff8dc",
        "crimson": "#dc143c",
        "cyan": "#00ffff",
        "darkblue": "#00008b",
        "darkcyan": "#008b8b",
        "darkgoldenrod": "#b8860b",
        "darkgray": "#a9a9a9",
        "darkgreen": "#006400",
        "darkkhaki": "#bdb76b",
        "darkmagenta": "#8b008b",
        "darkolivegreen": "#556b2f",
        "darkorange": "#ff8c00",
        "darkorchid": "#9932cc",
        "darkred": "#8b0000",
        "darksalmon": "#e9967a",
        "darkseagreen": "#8fbc8f",
        "darkslateblue": "#483d8b",
        "darkslategray": "#2f4f4f",
        "darkturquoise": "#00ced1",
        "darkviolet": "#9400d3",
        "deeppink": "#ff1493",
        "deepskyblue": "#00bfff",
        "dimgray": "#696969",
        "dodgerblue": "#1e90ff",
        "firebrick": "#b22222",
        "floralwhite": "#fffaf0",
        "forestgreen": "#228b22",
        "fuchsia": "#ff00ff",
        "gainsboro": "#dcdcdc",
        "ghostwhite": "#f8f8ff",
        "gold": "#ffd700",
        "goldenrod": "#daa520",
        "gray": "#808080",
        "green": "#008000",
        "greenyellow": "#adff2f",
        "honeydew": "#f0fff0",
        "hotpink": "#ff69b4",
        "indianred ": "#cd5c5c",
        "indigo": "#4b0082",
        "ivory": "#fffff0",
        "khaki": "#f0e68c",
        "lavender": "#e6e6fa",
        "lavenderblush": "#fff0f5",
        "lawngreen": "#7cfc00",
        "lemonchiffon": "#fffacd",
        "lightblue": "#add8e6",
        "lightcoral": "#f08080",
        "lightcyan": "#e0ffff",
        "lightgoldenrodyellow": "#fafad2",
        "lightgrey": "#d3d3d3",
        "lightgreen": "#90ee90",
        "lightpink": "#ffb6c1",
        "lightsalmon": "#ffa07a",
        "lightseagreen": "#20b2aa",
        "lightskyblue": "#87cefa",
        "lightslategray": "#778899",
        "lightsteelblue": "#b0c4de",
        "lightyellow": "#ffffe0",
        "lime": "#00ff00",
        "limegreen": "#32cd32",
        "linen": "#faf0e6",
        "magenta": "#ff00ff",
        "maroon": "#800000",
        "mediumaquamarine": "#66cdaa",
        "mediumblue": "#0000cd",
        "mediumorchid": "#ba55d3",
        "mediumpurple": "#9370d8",
        "mediumseagreen": "#3cb371",
        "mediumslateblue": "#7b68ee",
        "mediumspringgreen": "#00fa9a",
        "mediumturquoise": "#48d1cc",
        "mediumvioletred": "#c71585",
        "midnightblue": "#191970",
        "mintcream": "#f5fffa",
        "mistyrose": "#ffe4e1",
        "moccasin": "#ffe4b5",
        "navajowhite": "#ffdead",
        "navy": "#000080",
        "oldlace": "#fdf5e6",
        "olive": "#808000",
        "olivedrab": "#6b8e23",
        "orange": "#ffa500",
        "orangered": "#ff4500",
        "orchid": "#da70d6",
        "palegoldenrod": "#eee8aa",
        "palegreen": "#98fb98",
        "paleturquoise": "#afeeee",
        "palevioletred": "#d87093",
        "papayawhip": "#ffefd5",
        "peachpuff": "#ffdab9",
        "peru": "#cd853f",
        "pink": "#ffc0cb",
        "plum": "#dda0dd",
        "powderblue": "#b0e0e6",
        "purple": "#800080",
        "red": "#ff0000",
        "rosybrown": "#bc8f8f",
        "royalblue": "#4169e1",
        "saddlebrown": "#8b4513",
        "salmon": "#fa8072",
        "sandybrown": "#f4a460",
        "seagreen": "#2e8b57",
        "seashell": "#fff5ee",
        "sienna": "#a0522d",
        "silver": "#c0c0c0",
        "skyblue": "#87ceeb",
        "slateblue": "#6a5acd",
        "slategray": "#708090",
        "snow": "#fffafa",
        "springgreen": "#00ff7f",
        "steelblue": "#4682b4",
        "tan": "#d2b48c",
        "teal": "#008080",
        "thistle": "#d8bfd8",
        "tomato": "#ff6347",
        "turquoise": "#40e0d0",
        "violet": "#ee82ee",
        "wheat": "#f5deb3",
        "white": "#ffffff",
        "whitesmoke": "#f5f5f5",
        "yellow": "#ffff00",
        "yellowgreen": "#9acd32"
    };

    if (typeof colors[c.toLowerCase()] != 'undefined')
        return colors[c.toLowerCase()];

    return false;
}

/*

	FUNCTION convertCoords takes in n arrays of coordinates in the form [x,y] and converts them into two arrays of length n of the form
			 [x[0], x[1], x[2]...x[n]]

	params:
		n arrays of coordinates in the form [x,y]

	return:
		An array of lenghth two containing two arrays of length n. Return arg[0] is a serialized list of x coordinates and arg[1] is y.

*/
function convertCoords(args) {
    var coords = [
        [],
        []
    ];

    for (i = 0; i < args.length; i++) {
        coords[0].push(args[i][0]);
        coords[1].push(args[i][1]);
    }

    if (typeof(coords[0].reduce(function(a, b) {
        return a + b;
    }) + coords[1].reduce(function(a, b) {
        return a + b;
    })) != 'number') {
        throw new Error("convertCoords(): Coordinate arrays must contain only numbers");
    }

    return coords;
}

/*

	CLASS to contain the main rendering surface for the canvas

	params:
		name		ID of the canvas HTML element to bind to
		height 		Max value of the y coordinate axis on the canvas. Not required if specified in the HTML.
		width 		Max value of the x coordinate axis on the canvas. Not required if specified in the HTML.

	return:
		LiteCanvas object that has been instantiated

*/
LiteCanvas = function(name, height, width) {

    //Private scope variables
    var name = name;
    var height;
    var width;
    var iterator = 0;


    //Bind to the HTML canvas element and store it in a private scope variable
    var canvas = document.getElementById(name);
    var context = canvas.getContext('2d');

    //Variables to store user defined elements
    this.bgimg = null;
    Colors = {};
    Shapes = {

    };

    //Override height and width values if a parameter was specified
    //Otherwise inherit from the HTML element
    if (height) {
        $(canvas).attr("height", height);
    } else {
        height = $(canvas).attr("height");
    }
    if (width) {
        $(canvas).attr("width", width);
    } else {
        width = $(canvas).attr("width");
    }

    //Public getter functions for height and width
    this.getHeight = function() {
        return height;
    }
    this.getWidth = function() {
        return width;
    }

    /*

		Public METHOD to set the background color of the canvas
		params
			bgcolor 		Color to set the background to. Accepts a Color object, plain text CSS value, or hex-encoded rgb string
    */
    this.setBackgroundColor = function(bgcolor) {
        if (!(typeof bgcolor === 'string')) {
            $(canvas).css("background-color", bgcolor.toString());
        } else {
            $(canvas).css("background-color", bgcolor);
        }
    }

    this.setBackgroundImage = function(i) {
        this.bgimg = i;

        if (!this.bgimg.x) this.bgimg.x = 0;
        if (!this.bgimg.y) this.bgimg.y = 0;
        if (!this.bgimg.w) this.bgimg.w = width;
        if (!this.bgimg.h) this.bgimg.h = height;

    }

    /*
		Public METHOD to save a user defined color

		params
			c 				Color object to be saved for later use
    */
    this.addColor = function(c) {
        Colors[c.name] = c;
    }

    /*
		Public METHOD to save a user defined color

		params
			s 				Shape object to be saved for later use
    */
    this.addShape = function(s) {
        if (typeof s === 'object') {
            Shapes[iterator] = s;
            iterator++;
        } else {
            throw new Error("LiteCanvas.addShape(): Argument must be a shape object");
        }

    }

    /*
		Public METHOD to remove one shape from the canvas

		params
			s 				Shape object to be removed
    */
    this.deleteShape = function(s) {
        for (var key in Shapes) {
            if (Shapes[key] === s) {
                delete Shapes[key];
            }
        }
    }

    /*
		Public METHOD to clear the canvas of all shapes and start over
    */
    this.deleteAll = function() {
        Shapes = [];
    }

    /*
		Public METHOD to remove all elements from the canvas while preserving the drawing
    */
    this.clearAll = function() {
        context.clearRect(0, 0, width, height);
    }

    /*
		Public METHOD to redraw all shapes in the saved objects	
    */
    this.redraw = function() {
        this.clearAll();

        if (this.bgimg) {
            this.bgimg.draw(context);
        }

        for (var key in Shapes) {
            if (key === 'unlabeled') {
                for (i = 0; i < Shapes['unlabeled'].length; i++) {
                    Shapes[key][i].draw(context);
                }
            } else {
                Shapes[key].draw(context);
            }
        }
    }

    this.getShapes = function() {
        return Shapes;
    }
}

/*

	CLASS to hold a color value and allow manipulation on it

	params:
		c 		Hex encoded rgb value or plain text string representing a CSS color
        name    Name used to store the color if added to the canvas

*/
Color = function(c, name) {
    //Identify if the color is hex or plain text
    if (!(c.substring(0, 1) === '#')) {
        //If plain text, check against the list of known CSS values
        var c = checkColor(c);
        //If it is not hex or a recognized text value, exit
        if (!(c)) {
            return false;
        }
    }

    if (name) {
        this.name = name;
    }

    //Set private variables for RGB
    var red = parseInt(c.substring(1, 3), 16);
    var green = parseInt(c.substring(3, 5), 16);
    var blue = parseInt(c.substring(5, 7), 16);
    var alpha = 1;

    /*
		Public METHOD to return the colors representation as a hex encoded RGB string
    */
    this.toString = function() {
        return rgb(red, green, blue);
    }

    //Public getter functions for individual color values
    this.getRed = function() {
        return red;
    }
    this.getGreen = function() {
        return green;
    }
    this.getBlue = function() {
        return blue;
    }

    /*
		Public METHOD to blend two colors and store the resulting value

		params:
			m 			String or color value to blend with the current color
    */
    this.blend = function(m) {
        //Check if new blend color needs to be instatiated before blending
        if (typeof m === 'string') {
            m = new Color(m);
        }
        //Average the RGB values
        red = Math.floor((red + m.getRed()) / 2);
        green = Math.floor((green + m.getGreen()) / 2);
        blue = Math.floor((blue + m.getBlue()) / 2);
    }

}

/*

    CLASS for a generic base shape object used to build all canvas objects.

*/
Shape = function(coords) {

    //Private variables to store coordinate arrays
    this.x = coords[0];
    this.y = coords[1];

    //Default values for all shapes
    this.borderWeight = 1;
    this.borderColor = new Color('black');
    this.fillColor = new Color('black');
    this.bgimg = null;


}

Shape.prototype.setBorderWeight = function(w) {
    if (arguments.length != 1) {
        throw new Error("Triangle.setBorderWeight(): Function must have exactly 1 argument");
    } else if (typeof w != 'number') {
        throw new Error("Triangle.setBorderWeight(): Argument must be a number");
    }

    this.borderWeight = w;
}

Shape.prototype.setFillColor = function(c) {
    if (c instanceof Color) {
        this.fillColor = c;
    } else if (typeof c != 'string') {
        throw new Error("Triangle.setFillColor(): Argument must be a color object or a valid string");
    } else {
        this.fillColor = new Color(c);
    }
}

Shape.prototype.setBorderColor = function(c) {
    if (c instanceof Color) {
        this.borderColor = c;
    } else if (typeof c != 'string') {
        throw new Error("Triangle.setBorderColor(): Argument must be a color object or a valid string");
    } else {
        this.borderColor = new Color(c);
    }
}

Shape.prototype.setBackgroundImage = function(i) {
    this.bgimg = i;
    var w = Math.max.apply(null, this.x) - Math.min.apply(null, this.x);
    var h = Math.max.apply(null, this.y) - Math.min.apply(null, this.y);

    if (!this.bgimg.x) this.bgimg.x = Math.min.apply(null, this.x);
    if (!this.bgimg.y) this.bgimg.y = Math.min.apply(null, this.y);
    if (!this.bgimg.w) this.bgimg.w = w;
    if (!this.bgimg.h) this.bgimg.h = h;

}

Shape.prototype.getBoundingBox = function() {
    minx = Math.min.apply(null, this.x);
    miny = Math.min.apply(null, this.y);
    maxx = Math.max.apply(null, this.x);
    maxy = Math.min.apply(null, this.y);

    return [[minx, miny], [maxx, maxy]];
}

Shape.prototype.intersect = function(s) {

    b1 = this.getBoundingBox();
    b2 = s.getBoundingBox();

    if (b1[0][0] >= b2[0][0] && b1[1][0] <= b2[1][0]) {
        if (b1[0][1] >= b2[0][1] && b1[1][1] <= b2[1][1]) {
            return true;
        }
    } else return false;

}

Shape.prototype.scale = function(sw, sh) {
    var xmin;
    var ymin;

    xmin = Math.min.apply(null, this.x);
    ymin = Math.min.apply(null, this.y);

    for (i = 0; i < this.x.length; i++) {
        this.x[i] = ((this.x[i] - xmin) * sw) + xmin;
        this.y[i] = ((this.y[i] - ymin) * sh) + ymin;
    }

    if (this.bgimg) {
        this.bgimg.scale(sw, sh);
    }
}

Shape.prototype.move = function(xm, ym) {
    if (arguments.length != 2) {
        throw new Error("Polygon.move(): Function must have exactly 2 arguments");
    } else if (typeof(xm + ym) != 'number') {
        throw new Error("Polygon.move(): Arguments must be numbers");
    }

    for (i = 0; i < this.x.length; i++) {
        this.x[i] += xm;
        this.y[i] += ym;
    }

    if (this.bgimg) {
        this.bgimg.move(xm, ym);
    }
}

Shape.prototype.rotate = function(d, xr, yr) {
    if (!(arguments.length === 1 || arguments.length === 3)) {
        throw new Error("Shape.rotate(): Function must have one or three arguments");
    } else if (typeof(xr + yr + d) != 'number') {
        throw new Error("Shape.rotate(): Arguments must be numbers");
    }

    var theta = d * Math.PI / 180
    var xmid;
    var ymid;

    if (xr && yr) {
        xmid = xr;
        ymid = yr;
    } else {
        xmid = 0;
        ymid = 0;
        for (i = 0; i < this.x.length; i++) {
            xmid += this.x[i];
            ymid += this.y[i];
        }
        xmid = xmid / this.x.length;
        ymid = ymid / this.y.length;
    }

    for (i = 0; i < this.x.length; i++) {
        newx = (this.x[i] - xmid) * Math.cos(theta) - (this.y[i] - ymid) * Math.sin(theta) + xmid;
        newy = (this.x[i] - xmid) * Math.sin(theta) + (this.y[i] - ymid) * Math.cos(theta) + ymid;

        this.x[i] = newx;
        this.y[i] = newy;
    }

    if (this.bgimg) {
        this.bgimg.r += d;
    }

}

Shape.prototype.draw = function(context) {
    context.beginPath();
    context.moveTo(this.x[0], this.y[0]);
    for (i = 1; i < this.x.length; i++) {
        context.lineTo(this.x[i], this.y[i]);
    }
    context.closePath();
    context.lineWidth = this.borderWeight;
    context.fillStyle = this.fillColor.toString();
    context.strokeStyle = this.borderColor.toString();
    context.fill();
    context.stroke();

    if (this.bgimg) {
        context.globalCompositeOperation = 'source-in';
        this.bgimg.draw(context);
        context.globalCompositeOperation = 'source-over';
    }
}



/*

	CLASS to hold a line shape and allow manipulation on it

	params:
		x,y 		Coordinate components of the lines start and endpoints

*/
Line = function(xy0, xy1) {
    var coords = convertCoords(arguments);

    Shape.call(this, coords);
}

Line.prototype = Object.create(Shape.prototype);

/*

	CLASS to hold a Arc shape and allow manipulation on it

	params:
		x,y 		Coordinate components of the circle's center
		r 			Radius of the circle
		s 			Starting angle of the arc
		d 			Length of the arc in degrees

*/
Arc = function(xy, r, s, d) {
    //Trap against bad arguments
    if (arguments.length != 4) {
        throw new Error("Arc(): Arc definition must contain 5 arguments");
    }

    //Private variables to hold local scope coordinates
    Shape.call(this, xy);

    this.r = r;
    this.s = s;
    this.d = d * Math.PI / 180;
    this.fillColor = null;

    this.rotate = function(dr) {
        this.s += dr * Math.PI / 180;
    }

    this.draw = function(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.r, this.s, this.s + this.d);
        context.lineWidth = this.borderWeight;
        context.strokeStyle = this.borderColor.toString();
        if (this.fillColor) {
            context.closePath();
            context.fillStyle = this.fillColor.toString();
            context.fill();
        }
        context.stroke();

    }
}

Arc.prototype = Object.create(Shape.prototype);

/*

	CLASS to hold a Quadrilateral shape and allow manipulation on it

	params:
		x,y 		Coordinate components of the lines start and endpoints

*/
Triangle = function(xy0, xy1, xy2) {

    if (arguments.length != 3) {
        throw new Error("Triangle(): Triangle definition must contain 3 arguments");
    }

    //Private variables to hold local scope coordinates
    coords = convertCoords(arguments);

    Shape.call(this, coords);

}

Triangle.prototype = Object.create(Shape.prototype);

/*

	CLASS to hold a Rectangle shape and allow manipulation on it

	params:
		x,y 		Coordinate components of the lines start and endpoints

*/
Rectangle = function(xy0, xy1) {
    //Private variables to hold local scope coordinates
    if (arguments.length != 2) {
        throw new Error("Rectangle(): Triangle definition must contain 2 arguments");
    }

    //Private variables to hold local scope coordinates
    coords = convertCoords(arguments);
    coords = [
        [coords[0][0], coords[0][1], coords[0][1], coords[0][0]],
        [coords[1][0], coords[1][0], coords[1][1], coords[1][1]]
    ]

    Shape.call(this, coords);

}

Rectangle.prototype = Object.create(Shape.prototype);


/*

	CLASS to hold a Quadrilateral shape and allow manipulation on it

	params:
		x,y 		Coordinate components of the lines start and endpoints

*/
Quad = function(xy0, xy1, xy2, xy3) {
    //Private variables to hold local scope coordinates
    if (arguments.length != 4) {
        throw new Error("Quad(): Triangle definition must contain 4 arguments");
    }

    //Private variables to hold local scope coordinates
    coords = convertCoords(arguments);

    Shape.call(this, coords);

}

Quad.prototype = Object.create(Shape.prototype);

/*

	CLASS to hold a Quadrilateral shape and allow manipulation on it

	params:
		x,y 		Coordinate components of the lines start and endpoints

*/
Polygon = function() {
    //Private variables to hold local scope coordinates
    if (arguments.length < 2) {
        throw new Error("Polygon(): Triangle definition must contain more than 2 arguments");
    }

    //Private variables to hold local scope coordinates
    coords = convertCoords(arguments);

    Shape.call(this, coords);

}

Polygon.prototype = Object.create(Shape.prototype);

/*

	CLASS to hold a Circle shape and allow manipulation on it

	params:
		x,y 		Coordinate components of the circle's center
		r 			Radius of the circle

*/
Circle = function(xy, r) {

    if (arguments.length != 2) {
        throw new Error("Circle(): Circle definition must contain 2 arguments");
    } else if (typeof(r) != 'number') {
        throw new Error("Circle(): Coordinate arguments must be numbers");
    }

    Shape.call(this, xy);

    //Private variables to hold local scope coordinates
    this.r = r;

    this.draw = function(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.closePath();
        context.lineWidth = this.borderWeight;
        context.fillStyle = this.fillColor.toString();
        context.strokeStyle = this.borderColor.toString();
        context.fill();
        context.stroke();

    }
}

Circle.prototype = Object.create(Shape.prototype);


Img = function(src, xy, w, h) {
    /*
    if (arguments.length != 4 && arguments.length != 1) {
        throw new Error("Img(): Function must have 4 arguments");
    } else if (typeof(xy[0] + xy[1] + w + h) != 'number') {
        throw new Error("Img(): Arguments xy, w and h must be numbers");
    } else if (typeof src != 'string') {
        throw new Error("Img(): Argument src must be a string");
    }
    */

    if (xy) {
        this.x = xy[0];
        this.y = xy[1];
    }
    if (w) {
        this.w = w;
    }
    if (h) {
        this.h = h;
    }

    if (src != null) {
        this.src = src;
        this.img = new Image();
        this.img.src = src;
    }
    this.r = 0;



    this.cropx;
    this.cropy;
    this.cropw;
    this.croph;


    this.setHeight = function(nh) {
        if (arguments.length != 1) {
            throw new Error("Img.setHeight(): Function must have 1 argument");
        } else if (typeof nh != 'number') {
            throw new Error("Img.setHeight(): New height argument must be a number");
        }

        this.h = nh;
    }

    this.setWidth = function(nw) {
        if (arguments.length != 1) {
            throw new Error("Img.setWidth(): Function must have 1 argument");
        } else if (typeof nw != 'number') {
            throw new Error("Img.setWidth(): New height argument must be a number");
        }

        this.w = nw;
    }

    this.getBoundingBox = function() {
        return [[this.x, this.y], [this.x + this.w, this.y + this.h]];
    }

    this.move = function(xm, ym) {
        this.x += xm;
        this.y += ym;
    }

    this.scale = function(sw, sh) {
        this.w *= sw;
        this.h *= sh;
    }

    this.crop = function(sx, sy, sw, sh) {
        this.cropx = sx / this.w * this.img.naturalWidth;
        this.cropy = sy / this.h * this.img.naturalHeight;
        this.cropw = sw / this.w * this.img.naturalWidth;
        this.croph = sh / this.h * this.img.naturalHeight;
    }

    this.rotate = function(dr) {
        this.r += dr * Math.PI / 180;
    }

    this.clone = function() {
        var tmp = new Img(null, [this.x, this.y], this.w, this.h)
        tmp.img = this.img;
        tmp.cropx = this.cropx;
        tmp.cropy = this.cropy;
        tmp.croph = this.croph;
        tmp.cropw = this.cropw;
        tmp.r = this.r;
        return tmp;
    }

    this.draw = function(context) {
        context.save();

        // move to the center of the canvas
        var axis = [this.x + this.w / 2, this.y + this.h / 2]
        context.translate(axis[0], axis[1]);

        // rotate the canvas to the specified degrees
        context.rotate(this.r);

        if (this.cropx && this.cropy && this.cropw && this.croph) {
            context.drawImage(this.img, this.cropx, this.cropy, this.cropw, this.croph, this.x - axis[0], this.y - axis[1], this.w, this.h);
        } else if (this.w && this.h) {
            context.drawImage(this.img, this.x - axis[0], this.y - axis[1], this.w, this.h);
        } else {
            context.drawImage(this.img, this.x - axis[0], this.y - axis[1]);
        }

        context.restore();
    }

}

Img.prototype = Object.create(Shape.prototype);


//TEST LOOP
$(document).ready(function() {
    c = new LiteCanvas('c');

    c.addShape(new Line(
        [0, 0], [0, 500]
    ));
    c.addShape(new Line(
        [0, 500], [500, 500]
    ));
    c.addShape(new Line(
        [500, 500], [500, 0]
    ));
    c.addShape(new Line(
        [500, 0], [0, 0]
    ));

    c.redraw();

});