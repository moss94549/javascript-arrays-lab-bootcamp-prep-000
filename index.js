const app = "I don't do much";

var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(name)
{
  kitten.push(name);
  return;
}

function destructivelyPrependKitten(name)
{
  kitten.unshift(name);
  return kitten;
}

function destructivelyRemoveLastKitten(name)
{
  kitten.pop(name);
  return kitten;
}

function destructivelyRemoveFirstKitten(name)
{
  kitten.shift(name);
  return kitten;
}

function appendKitten(name)
{
  return [...kitten,name];
}

function prependKitten(name)
{
 return [name, ...kitten]; 
}

function removeLastKitten(name)
{
  return kitten.slice(0, kitten.length - 1 );
}

function removeFirstKitten(name)
{
  return kitten.slice(1);
}