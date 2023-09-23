import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

interface FormState {
  provinces: any[];
  regencies: any[];
  districts: any[];
  villages: any[];
  selectedProvince: string;
  selectedRegency: string;
  selectedDistrict: string;
  selectedVillage: string;
}

export default class DataForm extends React.Component<{}, FormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      provinces: [],
      regencies: [],
      districts: [],
      villages: [],
      selectedProvince: "",
      selectedRegency: "",
      selectedDistrict: "",
      selectedVillage: "",
    };
  }

  componentDidMount() {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((response) => response.json())
      .then((data) => this.setState({ provinces: data }));
  }

  handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const provinceId = event.target.value;
    this.setState({ selectedProvince: provinceId });

    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          regencies: data,
          selectedRegency: "",
          districts: [],
          selectedDistrict: "",
          villages: [],
          selectedVillage: "",
        })
      );
  };

  handleRegencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const regencyId = event.target.value;
    this.setState({ selectedRegency: regencyId });

    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          districts: data,
          selectedDistrict: "",
          villages: [],
          selectedVillage: "",
        })
      );
  };

  handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const districtId = event.target.value;
    this.setState({ selectedDistrict: districtId });

    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${districtId}.json`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ villages: data, selectedVillage: "" }));
  };

  handleVillageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const villageId = event.target.value;
    this.setState({ selectedVillage: villageId });
  };

  render() {
    const { provinces, regencies, districts, villages } = this.state;

    return (
      <React.Fragment>
        <div className="container  ">
          <form action="" className="w-50 mx-auto p-5 bg-secondary mt-4 rounded">
            <h5 className="text-center my-5 fw-bolder text-decoration-underline">Where Do You Live ?</h5>
            <div className="mb-3">
              <p>Provinces</p>
              <select
                className="form-control"
                onChange={this.handleProvinceChange}
                value={this.state.selectedProvince}
              >
                <option value="">Select Province</option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <p>Regencies</p>
              <select
                className="form-control"
                onChange={this.handleRegencyChange}
                value={this.state.selectedRegency}
              >
                <option value="">Select Regencies</option>
                {regencies.map((regencie) => (
                  <option key={regencie.id} value={regencie.id}>
                    {regencie.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <p>District</p>
              <select
                className="form-control"
                onChange={this.handleDistrictChange}
                value={this.state.selectedDistrict}
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <p>Village</p>
              <select
                className="form-control"
                onChange={this.handleVillageChange}
                value={this.state.selectedVillage}
              >
                <option value="">Select Village</option>
                {villages.map((village) => (
                  <option key={village.id} value={village.id}>
                    {village.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
