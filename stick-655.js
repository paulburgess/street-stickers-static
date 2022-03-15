// JavaScript Document

// ==============================================
// Copyright 2003 by jsCode.com
// Source: jsCode.com
// Author: etLux
// Free for all; but please leave in the header.
// ==============================================

// Set up the image files to be used.
var theImages = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array. Rememeber
// to increment the theImages[x] index!

theImages[0] = 'gfx/refine.jpg'
theImages[1] = 'gfx/walk.jpg'
theImages[2] = 'gfx/40.jpg'
theImages[3] = 'gfx/brighton_find.jpg'
theImages[4] = 'gfx/howl.jpg'
theImages[5] = 'gfx/muju1.jpg'
theImages[6] = 'gfx/official.jpg'
theImages[7] = 'gfx/spike.jpg'
theImages[7] = 'gfx/breakfast.jpg'
theImages[7] = 'gfx/cirk.jpg'

// ======================================
// do not change anything below this line
// ======================================

var j = 0
var p = theImages.length;

var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}

var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
document.write('<img src="'+theImages[whichImage]+'" width="337" height="185" alt="Browse the gallery" />');
}