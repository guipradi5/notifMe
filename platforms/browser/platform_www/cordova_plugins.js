cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-googlemaps/www/googlemaps-cdv-plugin.js",
        "id": "cordova-plugin-googlemaps.cordova-plugin-googlemaps",
        "pluginId": "cordova-plugin-googlemaps",
        "clobbers": [
            "cordova-plugin-googlemaps"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-googlemaps": "1.4.0",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-geolocation": "2.4.1",
    "cordova-plugin-compat": "1.1.0"
}
// BOTTOM OF METADATA
});