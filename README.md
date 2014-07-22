ObjectCanvas
============

Description:

A javascript library to provide a simple and lightweight object abstraction to the HTML canvas.

NOTE:	Unless specified, all functions return true if the arguments are valid and false otherwise.

============

ObjectCanvas
	
	Description:	
		Main object for rendering of canvas elements

	Constructors:
		ObjectCanvas(name), ObjectCanvas(name, height, width)
			params
				name:		ID of the HTML element on the page to bind to
				height:		Max value of the y-axis in the coordinate system
				width:		Max value of the y-axis in the coordinate system

			default
				name:		*Required*
				height:		Inherited from HTML element height attribute
				width:		Inherited from HTML element width attribute

	Public Functions:
		getName(), getHeight(), getWidth()
			return
				Returns this.[property] of the given object

		getBG()
			return
				Returns this.pattern if a background pattern is set, otherwise returns this.bgcolor

		setBGColor(string color)
			params
				color:		String containing the color to set as the background. Accepts color names or #FFFFFF hex values

			return
				true if the color will be used as the background(there is no pattern)
				else false

		setBGPattern(Pattern p)
			params
				p:			Pattern object to be used as the background

			return
				None

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

ObjectCanvas.Shape

	Description:	
		Base class for all shape based objects

	Public Functions:
		setBorderColor(string c), setBorderColor(Color c)
			params
				c 				Color object to set border to (dynamically generated if string provided)

		setBorderWeight(int w)
			params
				w				width of the boder in pixels

		setBackgroundColor(string c), setBackgroundColor(Color c)
			params
				c 				Color object to set background to (dynamically generated if string provided)

		setBackgroundPattern(Pattern p)
			params
				p 				Pattern object to set background to (dynamically generated if string provided)

		setZindex(int z)
			params
				z				Z index of object

		rotate(int degrees)
			params
				degrees			Number of degrees clockwise to rotate the object

		move(int x, int y)
			params
				x				Number of coordinates in the positive x direction to move the object
				y				Number of coordinates in the positive y direction to move the object

		stretch(int x, int y)
			params
				x				Factor to stretch object by in the x direction
				y				Factor to stretch object by in the y direction
		
		overlap(), overlap(Shape s)
			params
				s 				Shape to detect overlap with

			default
				s 				All shapes in current ObjectCanvas

			return
				true if current shape overlaps with any other or specified shape object
				else false

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


		









