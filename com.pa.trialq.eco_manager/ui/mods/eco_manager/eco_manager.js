//Global fabber functionsfunction eco_manager_global_fabber_consume(){  api.select.allFabbers();  engine.call('set_order_state', 'energy', 'consume');  api.select.empty();  document.getElementById("eco_manager_fab").innerHTML = "<input type=\"image\" src=\"../../../main/game/live_game/img/orders_bar/icons_orders_energy_consume.png\" onclick=\"eco_manager_global_fabber_conserve()\" />";}function eco_manager_global_fabber_conserve(){  api.select.allFabbers();  engine.call('set_order_state', 'energy', 'conserve');  api.select.empty();  document.getElementById("eco_manager_fab").innerHTML = "<input type=\"image\" src=\"../../../main/game/live_game/img/orders_bar/icons_orders_energy_hold.png\" onclick=\"eco_manager_global_fabber_consume()\" />";}//Global factory functionsfunction eco_manager_global_factory_consume(){  api.select.allFactories();  engine.call('set_order_state', 'energy', 'consume');  api.select.empty();  document.getElementById("eco_manager_fac").innerHTML = "<input type=\"image\" src=\"../../../main/game/live_game/img/orders_bar/icons_orders_energy_consume.png\" onclick=\"eco_manager_global_factory_conserve()\" />";}function eco_manager_global_factory_conserve(){  api.select.allFactories();  engine.call('set_order_state', 'energy', 'conserve');  api.select.empty();  document.getElementById("eco_manager_fac").innerHTML = "<input type=\"image\" src=\"../../../main/game/live_game/img/orders_bar/icons_orders_energy_hold.png\" onclick=\"eco_manager_global_factory_consume()\" />";}//Commander functionsfunction eco_manager_commander_consume(){  api.select.commander();  engine.call('set_order_state', 'energy', 'consume');  api.select.empty();  document.getElementById("eco_manager_com").innerHTML = "<input type=\"image\" src=\"../../../main/game/live_game/img/orders_bar/icons_orders_energy_consume.png\" onclick=\"eco_manager_commander_conserve()\" />";}function eco_manager_commander_conserve(){  api.select.commander();  engine.call('set_order_state', 'energy', 'conserve');  api.select.empty();  document.getElementById("eco_manager_com").innerHTML = "<input type=\"image\" src=\"../../../main/game/live_game/img/orders_bar/icons_orders_energy_hold.png\" onclick=\"eco_manager_commander_consume()\" />";}//Group 0 functionsfunction eco_manager_group0_consume(){  api.select.recallGroup();  engine.call('set_order_state', 'energy', 'consume');  api.select.empty();  document.getElementById("eco_manager_group0").innerHTML = "<input type=\"image\" src=\"../../../main/game/live_game/img/orders_bar/icons_orders_energy_consume.png\" onclick=\"eco_manager_group0_conserve()\" />";}function eco_manager_group0_conserve(){  api.select.recallGroup();  engine.call('set_order_state', 'energy', 'conserve');  api.select.empty();  document.getElementById("eco_manager_group0").innerHTML = "<input type=\"image\" src=\"../../../main/game/live_game/img/orders_bar/icons_orders_energy_hold.png\" onclick=\"eco_manager_group0_consume()\" />";}