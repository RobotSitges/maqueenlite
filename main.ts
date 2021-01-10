basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    basic.showString("T: " + Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C) + "ºC")
    basic.showString("H: " + Environment.octopus_BME280(Environment.BME280_state.BME280_humidity) + "%")
    basic.showString("P: " + Environment.octopus_BME280(Environment.BME280_state.BME280_pressure) + "hPa")
    basic.showString("A: " + Environment.octopus_BME280(Environment.BME280_state.BME280_altitude) + "m")
})
