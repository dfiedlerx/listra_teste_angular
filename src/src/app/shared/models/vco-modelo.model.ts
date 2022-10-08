import { Link } from "./link.model";

export interface VcoModelo {
  id: number;
  links: Array<Link>;
  slug: string;
  titulo: string;
}
