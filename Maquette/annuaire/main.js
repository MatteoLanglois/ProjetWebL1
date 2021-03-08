
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