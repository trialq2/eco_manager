$(function () {

    function loadTemplate(element, url) {
        element.load(url, function () {
            ko.applyBindings(model, element.get(0));
        });
    }

    createFloatingFrame('eco_manager_frame', 100, 100, {'offset': 'leftCenter', 'left': 0});
    loadTemplate($('#eco_manager_frame_content'), 'coui://ui/mods/eco_manager/live_game/eco_manager.html');

    //leave off for now. On reconnect ui may be wrong, but at least with these off it wont initiate unwanted commands
    //eco_manager_commander_consume();
    //eco_manager_global_fabber_consume();
    //eco_manager_global_factory_consume();
    //eco_manager_group0_consume();


});
