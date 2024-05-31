const wifi = require("node-wifi");

const connectToTv = () => {
  // Initialize wifi module
  wifi.init({
    iface: null, // Use default WiFi interface
  });

  // Scan for available WiFi networks
  wifi.scan((error, networks) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log("Available WiFi networks:");
    networks.forEach((network) => {
      console.log(
        `SSID: ${network.ssid}, Signal Strength: ${network.signal_level} dBm`
      );
    });
  });
};

module.exports = connectToTv;
