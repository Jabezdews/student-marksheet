import { Dimensions, PixelRatio } from "react-native";

export const colors = {
  primary: "#307fe1",
  secondary: "#e4effb",
  body: "#f8fbfe",
  textGrey: "#686868",
  textDark: "#000000",
  // Add more colors as needed
};
export const Vw = (size) => {
  const width = Dimensions.get("window").width;
  const fontScale = Dimensions.get("screen").fontScale;

  //   console.log(width, Math.round(size * width), size,fontScale);
  // console.log(Math.round((size / 100) * width));
  // console.log(Math.round((size / width) * 100),size, 15,width);
  //   return Math.round((size / width) *100);
  return Math.round((size / 100) * width);
};
export const fs = () => {
  const fontScale = Dimensions.get("screen").fontScale;

};
export const BASE_URL = 'http://192.168.1.10:3001/api/v1';