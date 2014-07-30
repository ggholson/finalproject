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

ObjectCanvas.Color
	
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
		setBorderColor(c), setBackgroundColor(c)
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
		
		draw()
			Description:
								Adds the object to the canvas. Automatically invoked when LiteCanvas.redraw() is called.
			params:
				none
			returns:
				none
		

ObjectCanvas.line extends Shape
	
	Description: 
		Object based definition of a line

	Constructors:
		ObjectCanvas.line(int end), line(string name, int end), line(int start, int end), line(string name, int start, int end)
			params
				name:		Identifier by which the object can be referenced
				start:		Starting point for the line in the ObjectCanvas coordinate system
				end:		Endpoint for the line in the ObjectCanvas coordinate system

			defaults:
				name:		Name of previously manipulated object + incremented identifier
				start:		Last point touched by the user
				end:		*Required*

	Public Functions:


		









