declare module "*.png";
declare module "*.jpg";
declare module "*.js";

declare module "*.svg" {
  const content: string;
  export default content;
}
