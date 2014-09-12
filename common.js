var	bottomLayer = {};

function align (callback) {

	if ([selection count] <= 1) {
		var app = [NSApplication sharedApplication];
    	[app displayDialog:"You need at least two objects selected to align them" withTitle:"Boo!"];
	}

	for (var i=0; i < [selection count]; i++) {
        var layer = selection[i];

        // get layer frame
        var frame   = [layer absoluteRect];

        //check wether or not layer is the bottom one
		if (i > 0) {
			callback(frame, bottomLayer);
		}
		else
		{
			// Assign frame properties to bottom layer
			bottomLayer.w 	=  [frame width];
			bottomLayer.h 	=  [frame height];
			bottomLayer.x 	=  [frame x];
			bottomLayer.y 	=  [frame y];
		}
	}	
}