const app = "I don't do much";

var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(name)
{
  kittens.push(name);
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name)
{
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name)
{
  kittens.shift(name);
}

function appendKitten(name)
{
  [...kittens,name];
}

function prependKitten(name)
{
  [name, ...kittens]; 
}

function removeLastKitten(name)
{
  kittens.slice(0, kittens.length - 1 );
}

function removeFirstKitten(name)
{
  kittens.slice(1);
}