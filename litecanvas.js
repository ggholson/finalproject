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
    var height = height;
    var width = width;

    //Bind to the HTML canvas element and store it in a private scope variable
    var canvas = document.getElementById(name);
    var context = canvas.getContext('2d');

    //Variables to store user defined elements
    Colors = {};
    Shapes = {
        'unlabeled': []
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
    this.setBGColor = function(bgcolor) {
        if (!(typeof bgcolor === 'string')) {
            $(canvas).css("background-color", bgcolor.toString());
        } else {
            $(canvas).css("background-color", bgcolor);
        }
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
        if (s.name) {
            Shapes[s.name] = s;
        } else {
            Shapes['unlabeled'].push(s);
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
}

/*

	CLASS to hold a color value and allow manipulation on it

	params:
		c 		Hex encoded rgb value or plain text string representing a CSS color

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
        if (typeof m === 'string') {
            m = new Color(m);
        }
        red = Math.floor((red + m.getRed()) / 2);
        green = Math.floor((green + m.getGreen()) / 2);
        blue = Math.floor((blue + m.getBlue()) / 2);
    }
}

Line = function(xstart, ystart, xend, yend, name) {

    if (name) {
        this.name = name;
    }
    var xstart = xstart;
    var ystart = ystart;
    var xend = xend;
    var yend = yend;
    var weight = 1;
    var color = new Color("black");

    this.setWeight = function(w) {
        weight = w;
    }

    this.setColor = function(c) {
        if (c instanceof Color) {
            color = c;
        } else {
            color = new Color(c);
        }
    }

    this.move = function(x, y) {
        xstart += x;
        ystart += y;
        xend += x;
        yend += y;
    }

    this.rotate = function(d) {
        var theta = d * Math.PI / 180

        var midx = Math.abs(xend - xstart);
        var midy = Math.abs(yend - ystart);

        nxs = (xstart - midx) * Math.cos(theta) - (ystart - midy) * Math.sin(theta) + midx;
        nys = (xstart - midx) * Math.sin(theta) + (ystart - midy) * Math.cos(theta) + midy;
        nxe = (xend - midx) * Math.cos(theta) - (yend - midy) * Math.sin(theta) + midx;
        nye = (xend - midx) * Math.sin(theta) + (yend - midy) * Math.cos(theta) + midy;

        xstart = nxs;
        ystart = nys;
        xend = nxe;
        yend = nye;
    }

    this.draw = function(context) {
        context.beginPath();
        context.moveTo(xstart, ystart);
        context.lineTo(xend, yend);
        context.lineWidth = weight;
        context.strokeStyle = color.toString();
        context.stroke();
    }

}



//TEST LOOP
$(document).ready(function() {
    x = new LiteCanvas('c');
    console.log(x);
    c = new Color('red');
    x.setBGColor(c);
});