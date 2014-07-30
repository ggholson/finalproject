LiteCanvas
============

Description:

A javascript library to provide a simple and lightweight object abstraction to the HTML canvas.

NOTE:	Unless specified, all functions return true if the arguments are valid and false otherwise.

============

LiteCanvas
	
	Description:	
		Main object for rendering of canvas elements

	Constructors:
		LiteCanvas(name), LiteCanvas(name, height, width)
			params:
				name:		ID of the HTML element on the page to bind to
				height:		Max value of the y-axis in the coordinate system
				width:		Max value of the y-axis in the coordinate system

			default:
				name:		*Required*
				height:		Inherited from HTML element height attribute
				width:		Inherited from HTML element width attribute

	Public Functions:
		getHeight(), getWidth()
			return:
				Returns this.[property] of the given object

		setBackgroundColor(c)
			Description:
							Sets the background of the canvas to a solid color
			params:
				c:			Color object or valid string denoting the color
			returns:
				none

		setBackgroundImage(i)
			Description:
							Sets the background of the canvas to a static image
			params
				i:			Img object to be used as the background image
			returns:
				none

		addShape(s)
			Description:
							Adds a shape to the rendering surface of the canvas
			params:
				s:			Shape object that will be rendered on the next redraw()
			returns:
				none

		deleteShape(s)
			Description:
							Removes a specific shape from the rendering surface. Will update on next redraw().
			params:
				s:			Specific Shape to be removed
			returns:
				none

		deleteAll()
			Description:
							Removes all objects from the rendering surface on the next redraw();
			params:
				none
			returns:
				none

		clearAll()
			Description:
							Draws a blank canvas. Does not remove existing Shapes. Will be overwritten on next redraw().
			params:
				none
			returns:
				none

		getShapes()
			Description:
							Returns an object containing all of the Shape objects in the current canvas
			params:
				none
			returns:
				An object full of Shape objects

		redraw()
			Description:
							Clears the canvas and redraws all of the Shape objects added to the canvas.
			params:
				none
			returns:
				none

========================

LiteCanvas.Color
	
	Description:
		Object based color abstraction used to store color values with names and/or convert between color identifiers

	Constructors:
		ObjectCanvas.Color(string id)
			Description			Attempts to infer color value from default list of color names

			params
				id				Name of the color to be defined

			return
				true if color is able to be identified and is created
				else false

		ObjectCanvas.Color(string id, string name)
			Description			Clones a color defined by the name string into a new color object

			params
				id				Identifier for the new color object
				name			Name of default color string or '#' keyed hex value

			return
				true if color is able to be identified and is created
				else false

		ObjectCanvas.Color(string id, int red, int green, int blue), Color(string id, int red, int green, int blue, int alpha)
			Description			Creates a color based on the provided rgba values

			params
				id				Identifier for the new color object
				red				Value of red to the color definition >> 0-255
				green			""
				blue			""
				alpha			Transparency of the color >> 0-1

			defaults
				id				*Required*
				alpha			1

			returns
				true if color is valid and is created
				else false

	Public Functions:
		setColor(string hex)
			params
				hex			'#' identified hex string defining RGB values

			return
				true if changes are valid
				false if hex is invalid

		getRed(), getGreen(), getBlue(), getAlpha()
			return
				listed property of color object identified by the given string
				null if not found

		setRed(int val), setGreen(int val), setBlue(int val), setAlpha(int val)
			params
				val				Value to set the property to

			return
				true if property set
				else false
		blend(Color c)
			params
				c 				color object to blend with current color

			return
				true if valid
				else false	

========================

LiteCanvas.Shape

	Description:	
		Base class for all shape based objects

	Public Functions:
		setBorderColor(c), setFillColor(c)
			Description:
								Sets the background/border to a solid color
			params:
				c 				Color object to set border to (dynamically generated if string provided)
			returns:
				none

		setBorderWeight(w)
			Description:
								Sets the border thickness to w in pixels
			params:
				w				width of the boder in pixels
			returns:
				none

		rotate(degrees), rotate(degrees, x, y)
			Description:
								Rotates the shape around a set point
			params:
				degrees			Number of degrees clockwise to rotate the object
				x				The x coordinate of the axis of rotation
				y				The y coordinate of the axis of rotation
			defaults:
				x, y			The center of the Shape object
			returns:
				none

		move(x, y)
			Descriptions:
								Move the object a fixed distance across the canvas
			params:
				x				Number of pixels in the positive x direction to move the object
				y				Number of pixels in the positive y direction to move the object
			returns:
				none

		scale(x, y)
			Description:
								Scale the object by a given factor in the x and y direction
			params:
				x				Factor to stretch object by in the x direction
				y				Factor to stretch object by in the y direction
			returns:
				none

		getBoundingBox()
			Desription:
								Returns an array containing the minimum and maximum values of the Shape in the x and y coordinate spaces
			params:
				none
			returns:
								An array of the format [[xmin, ymin],[xmax, ymax]].

		intersect(s)
			Description:
								Function to determine if two Shape objects on the canvas are intersecting.
			params:
				s 				Shape object to check against the calling Shape object
			returns:
				true			If the two Shapes intersect
				false 			Otherwise
		
		draw()
			Description:
								Adds the object to the canvas. Automatically invoked when LiteCanvas.redraw() is called.
			params:
				none
			returns:
				none

============

LiteCanvas.Line()
	
	Description:
		Instance of a Shape object holding a 2 dimensional line

	Constructors:
		Line([x0, y0], [x1, y1])
			params:
				[x0, y0]		Coordinates of the lines first endpoint
				[x1, y1]		Coordinates of the lines second endpoint

	Public functions:
		All inherited from Shape. Fill color and background images have no effect on Line objects.

============

LiteCanvas.Arc()
	
	Description:
		Instance of a Shape object holding a 2 dimensional arc

	Constructors:
		Arc([x,y], r, s, d)
			params:
				[x, y] 			Coordinates of the arcs center
				r				Radius of the arc in pixels
				s 				Starting point in degrees
				d 				Number of degrees to draw from the starting point

	Public functions:
		All inherited from Shape. Fill color and background images have no effect on Arc objects.

============

LiteCanvas.Triangle()
	
	Description:
		Instance of a Shape object holding a 2 dimensional triangle

	Constructors:
		Triangle([x0, y0], [x1, y1], [x2, y2])
			params:
				[x0, y0]		
				[x1, y1] 		Coordinates of the triangles vertices
				[x2, y2]		

	Public functions:
		All inherited from Shape.
		
============

LiteCanvas.Rectangle()
	
	Description:
		Instance of a Shape object holding a 2 dimensional rectangle

	Constructors:
		Rectangle([x0, y0], [x1, y1])
			params:
				[x0, y0]		Coordinates of the first corner of the rectangle
				[x1, y1] 		Coordinates of the opposite corner
						
	Public functions:
		All inherited from Shape.


============

LiteCanvas.Quad()
	
	Description:
		Instance of a Shape object holding a 2 dimensional quadrilateral

	Constructors:
		Quad([x0, y0], [x1, y1], [x2, y2], [x3, y3])
			params:
				[x0, y0]		Coordinates of the four corners of the quadrilateral
				[x1, y1] 		
				[x2, y2]
				[x3, y3]
						
	Public functions:
		All inherited from Shape.


============

LiteCanvas.Polygon()
	
	Description:
		Instance of a Shape object holding a 2 dimensional n-sided polygon

	Constructors:
		Polygon([x0, y0], [x1, y1], [x2, y2], [x3, y3], [x..n, y..n])
			params:
				[x0, y0]		Coordinates of the vertices of the polygon
				[x1, y1] 		
				[x2, y2]
				[x3, y3]
				[x..n, y..n] 	Final vertex of the polygon. Can be used to hold any n-sided polygon.
						
	Public functions:
		All inherited from Shape.

		============

LiteCanvas.Circle()
	
	Description:
		Instance of a Shape object holding a 2 dimensional circle

	Constructors:
		Circle([x,y], r)
			params:
				[x, y] 			Coordinates of the circle's center
				r				Radius of the circle in pixels
			

	Public functions:
		All inherited from Shape.

============

LiteCanvas.Img()
	
	Description:
		Instance of a Shape object holding an image

	Constructors:
		Img(src), Img(src, [x,y]), Img(src, [x,y], w, h)
			params:
				src 			Source URL of the image
				[x, y] 			Coordinates of the image's upper left corner
				w				Width of the image in pixels
				h				Height of the image in pixels

			defaults:
				src 			*Required*
				[x, y] 			Inherited from object the image is applied to. Used for background drawing.
				w 				Width of the source image
				h 				Height of the source image
				

	Public functions:
		setHeight(sh), setWidth(sw)
			Description:
								Set the height/width of the image to a set value in pixels
			params:
				sh				New height/width of the image
			returns:
				none

		move(), scale(), rotate(), draw()
			Inherited from Shape()

		crop(sx, sy, sw, sh)
			Description:
								Crops an Img() object
			params:
				sx, sy			X and Y coordinate of the new top left corner of the image
				sw, sh			New width and height of the image, starting from sx and sy.
			returns:
				none

		clone()
			Description:
								Creates a new Img() object from an existing Img() object
			params:
				none
			returns:
				none











