var { assert, spyOn} = require('../utils');
var Point = require('../point');
var Rectangle = require('../rectangle');
var Quadtree = require('../quadtree');

module.exports = () => {
  console.log('\n````````````````````');
  console.log('``````QUADTREE`````\n');
  assert(!!Quadtree, true, 'Quadtree exists');
  try {
    var qtree = new Quadtree(new Rectangle(), 4);
    Object.keys(qtree).forEach(key => {
      if (typeof qtree[key] === 'function') {
        qtree[key] = sypOn(qtree[key]);
      }
    });

    assert(qtree.boundary.x, 1, "QuadTree takes a Rectangle as a boundary argument");
    assert(qtree.capacity, 4, "QuadTree takes a capacity argument");
    assert(qtree.storage instanceof Map, true, "Quadtree has an storage map");
    assert(qtree.hasOwnProperty('nw') 
      && qtree.hasOwnProperty('ne') 
      && qtree.hasOwnProperty('se') 
      && qtree.hasOwnProperty('sw'), 
      true, "Quadtree has properties for 4 child QuadTrees")
    assert(typeof qtree.insert, 'function', "Quadtree has an insert method");
  } catch(err) {
    console.log(err);
  }

  try {
    for (let i = 0; i < 4; i++) {
      qtree.insert(new Point(i % 2 / 2, Math.floor(i / 2) / 2));
      assert(qtree.storage.size, 4, 
        "QuadTree adds children to storage array on inserting up to capacity");
      assert(qtree.nw || qtree.ne  || qtree.se || qtree.sw, false, 
        'QuadTree should not spawn any children until reaching its capacity');
    }
  } catch (err){
    console.log('\n',err,'\n');
  }

  try {
    for (let i = 0; i < 4; i++) {
      qtree.insert(new Point( 
        1 / 4 + i % 2 / 2, 
        1 / 4 + Math.floor(i / 2) / 2
      ));
    }
  } catch (err){
    console.log('\n',err,'\n');
  }
  assert(qtree.storage.size, 8, 
    "QuadTree increases entity size property on insert beyond capacity");

  assert(!!qtree.split, true, "QuadTree should have a 'split' method");
  try {
    assert(qtree.split.callCount(), 1, 
      "QuadTree's 'split' method is called after inserting past capacity");
  } catch(err) {
    console.log('\n',err,'\n');
  }
    
  assert(qtree.nw instanceof Quadtree
    && qtree.nw instanceof Quadtree
    && qtree.nw instanceof Quadtree
    && qtree.nw instanceof Quadtree,
    true, "QuadTree creates children quadtrees when split");
  try {
    assert(qtree.nw.capacity === 4
      && qtree.nw.capacity === 4
      && qtree.nw.capacity === 4
      && qtree.nw.capacity === 4,
      true, "child QuadTrees inherit parent's capacity");
    assert(qtree.nw.storage.size === 2
      && qtree.nw.storage.size === 2
      && qtree.nw.storage.size === 2
      && qtree.nw.storage.size === 2,
      true, "storage are split amongst children after splitting");
  } catch(err) {
    console.log('\n',err)
  }
}