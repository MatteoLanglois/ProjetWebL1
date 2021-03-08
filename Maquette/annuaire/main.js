<<<<<<< HEAD

function move_menu_burger()
{
  var p = document.getElementById("burger_button");
  p.onclick = move_burger;
};

function move_burger()
{
  document.getElementById("menu_burger").className = "move_menu";
}

function close_menu_burger()
{
  var p = document.getElementById("burger_cross");
  p.onclick = close_burger;
};

function close_burger()
{
  document.getElementById("menu_burger").className = "burger";
}
=======

function move_menu_burger()
{
  var p = document.getElementById("burger_button");
  p.onclick = move_burger;
};

function close_menu_burger()
{
  var p = document.getElementById("burger_cross");
  p.onclick = close_burger;
};
>>>>>>> 80058feafdc6f09496fef1af2be3760fbb0f2e6e
