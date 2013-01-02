function BoardRenderer(context, model){
	this._ctx = context;
	this._model = model;

	this._cols = model.getCols();
	this._rows = model.getRows();

	this._x = 0;
	this._y = 0;

	this._width = 0;
	this._height = 0;

	this._cellSize = 0;
}

_p = BoardRenderer.prototype;

/**
@param x the x coordinate of the top-left corner
@param y the y coordinate of the top-left corner
*/
_p.setSize = function(x,y,cellSize){
	this._x = x;
	this._y = y;
	this._cellSize = cellSize;
	this._width = this._cellSize * this._cols;
	this._height = this._cellSize * this._rows;
}