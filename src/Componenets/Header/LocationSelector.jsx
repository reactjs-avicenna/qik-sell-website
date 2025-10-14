import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocationSelector = () => {
  const [location, setLocation] = React.useState("Pakistan");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="flex items-center h-[42px] w-[25%] border border-gray-300 rounded-full bg-white px-3">
      {/* Icon Section */}
      <div className="flex items-center justify-center w-[12%]">
        <LocationOnIcon className="text-customBlue mr-2" fontSize="small" />
      </div>

      {/* Dropdown Section */}
      <div className="flex-1 flex items-center">
        <FormControl
          variant="standard"
          sx={{
            width: "100%",
            "& .MuiInputBase-root": {
              height: "100%",
              display: "flex",
              alignItems: "center",
            },
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              paddingY: 0,
              paddingX: 0,
            },
            "& .MuiSelect-icon": {
              top: "50%",
              transform: "translateY(-50%)",
            },
          }}
        >
          <Select
            value={location}
            onChange={handleChange}
            disableUnderline
            sx={{
              fontSize: "14px",
              color: "#4B5563", // gray-600
            }}
          >
            <MenuItem value="Pakistan">Pakistan</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UAE">UAE</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default LocationSelector;
