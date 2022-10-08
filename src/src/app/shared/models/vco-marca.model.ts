import { Link } from "./link.model";

export interface VcoMarca {
  ativo: number;
  excluido: number;
  id: number;
  links: Array<Link>;
  slug: string;
  titulo: string;
}
