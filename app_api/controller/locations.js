var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};
var mongoose=require("mongoose")
const Loc=mongoose.model("Location")
module.exports.locationsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.locationsListByDistance = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
var mongoose = require('mongoose');
module.exports.locationsReadOne = async function (req, res) {
try {
const location = await
Loc.findById(req.params.locationid).exec();
sendJsonResponse(res, 200, location);
console.log(location)
} catch (err) {
// Handle the error
sendJsonResponse(res, 500, { error: 'An error occurred' });
}
};
module.exports.locationsUpdateOne = function (req, res) {
    try {
        const location = await
        Loc.findById(req.params.locationid).exec();
        sendJsonResponse(res, 200, location);
        console.log(location)
        } catch (err) {
        // Handle the error
        sendJsonResponse(res, 500, { error: 'An error occurred' });
        }
};
module.exports.locationsDeleteOne = async function (req, res) {
    const { locationid } = req.params;
    sendJsonResponse(res, 200, {"status" : "success"});
    try {
        // Use Mongoose's findByIdAndRemove to delete the location by its ID
        const deletedLocation = await Loc.findByIdAndRemove(locationid).exec();

        if (!deletedLocation) {
            // If the location doesn't exist, return a 404 (Not Found) response
            return sendJsonResponse(res, 404, { error: 'Location not found' });
        }

        // If the location is successfully deleted, return a 204 (No Content) response
        sendJsonResponse(res, 204, null);
    } catch (err) {
        // If an error occurs (e.g., database error), return a 500 (Internal Server Error) response
        sendJsonResponse(res, 500, { error: 'An error occurred' });
    }
};