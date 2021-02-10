const db = require('./models');

db.robot.create({
    name: 'BlueBox',
    location: 'California',
    rank: 1
})
.then(robotHOT => {
    // do something with this HOT robot. What to do next?
    // print it
    console.log(robotHOT); // printing all values (data values and previous data values)
    // that's it. 
})

db.battery.create({
    name: 'Jumbo2000',
    type: 'regular'
})
.then(batteryHOT => {
    // something with that hot battery
    // add an association with a robot
    db.robot.findOne({
        where: { id: 1 },
        include: [db.battery]
    })
    .then(robotWithBatteryPackHOT => {
        // do something with this HOT robot. 
        // What do I do next?
        // Add the HOT battery to this robot
        robotWithBatteryPackHOT.addBattery(batteryHOT)
        .then(ConfirmationArray => {
            // confirmation INSIDE array
            // Do something with the confirmation array
            console.log(ConfirmationArray) // print array with JOIN association inside. 
            console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
            let joined_ids = ConfirmationArray[0].get() // withOUT all values
            console.log(joined_ids); // print ids withOUT all values
            // that's it.
        });
    });
});

db.robot.create({
    name: 'RainBot',
    location: 'Washington',
    rank: 2
})
.then(robotHOT => {
    // something with that hot robot
    // add an association with a battery
    db.battery.findOne({
        where: { id: 1 },
        include: [db.robot]
    })
    .then(batteryWithRobotPackHOT => {
        // do something with this HOT battery. 
        // What do I do next?
        // Add the HOT Robot to this battery
        batteryWithRobotPackHOT.addRobot(robotHOT)
        .then(ConfirmationArray => {
            // confirmation INSIDE array
            // Do something with the confirmation array
            console.log(ConfirmationArray) // print array with JOIN association inside. 
            console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
            let joined_ids = ConfirmationArray[0].get() // withOUT all values
            console.log(joined_ids); // print ids withOUT all values
            // that's it.
        });
    });
});