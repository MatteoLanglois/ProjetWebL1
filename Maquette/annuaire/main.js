
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