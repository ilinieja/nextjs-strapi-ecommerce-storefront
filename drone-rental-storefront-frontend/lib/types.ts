// TODO: Generate types into shared package to avoid extra coupling.
import {
  ApiProductProduct,
  PluginUploadFile,
} from "../../drone-rental-storefront-cms/types/generated/contentTypes";

export interface Product extends ApiProductProduct {
  id: number;
  attributes: ApiProductProduct["attributes"] & {
    mainImage: { data: PluginUploadFile };
  };
}
