import { Veiculo } from './veiculo.model';

export interface VcoVeiculosGetListResultado {
  current_page: number;
  data: Array<Veiculo>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string|null;
  to: number;
  total: number;
}
