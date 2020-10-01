class Station {
    
  constructor({ name, icao, synop, lat,lon }) {
        this.name = name;
        this.icao = icao;
		this.synop = synop;
		this.lat = lat;
		this.lon= lon;
    }
    toString() {
        return ` name: ${this.name}, icao: ${this.icao}, synop: ${this.synop}, lat: ${this.lat}, lon: ${this.lon}';
    }
}

export default Station;

// module.exports = Entity;