import { Link } from './link.model';
import { VcoCambio } from './vco-cambio.model';
import { VcoCategoria } from './vco-categoria.model';
import { VcoCombustivel } from './vco-combustivel.model';
import { VcoCor } from './vco-cor.model';
import { VcoMarca } from './vco-marca.model';
import { VcoModelo } from './vco-modelo.model';
import { VcoVeiculosFoto } from './vco-veiculos-foto.model';

export interface Veiculo {
  cfg_loja: string | null;
  cfg_loja_id: number | null;
  cfg_site_visao_id: number | null;
  destaque: number | null;
  destaque_ate: string | null;
  destaque_de: string | null;
  distancia_em_km: number | null;
  id: number | null;
  int_anofabricacao: number | null;
  int_anomodelofabricacao: number;
  int_codigoveiculo: string | null;
  int_exibirultimonumerodaplaca: string | null;
  int_id_integrador: number | null;
  int_numeromarchas: number | null;
  int_numeroportas: number | null;
  int_observacao: string | null;
  int_placa: string | null;
  int_preco_cliente: number;
  int_preco_revenda: number;
  int_quilometragem: number;
  int_tipoalimentacao: string | null;
  int_tipopartida: string | null;
  int_vco_cambios_id: number | null;
  int_vco_categoria_id: number | null;
  int_vco_combustiveis_id: number | null;
  int_vco_cores_id: number | null;
  int_vco_marcas_id: number | null;
  int_vco_marcas_modelos_id: number | null;
  int_vco_tiposveiculos_id: number | null;
  int_versao: string | null;
  int_video: string | null;
  int_zerokm: string | null;
  links: Array<Link> | null;
  loja_bairro: String | null;
  loja_cep: string | null;
  loja_cidade: string | null;
  loja_complemento: string | null;
  loja_latitude: string | null;
  loja_logradouro: string | null;
  loja_longitude: string | null;
  loja_numero: string | null;
  loja_slug: string | null;
  loja_titulo: string | null;
  loja_uf: string | null;
  marca_buscas: number | null;
  marca_imagem: string | null;
  marca_slug: string | null;
  marca_titulo: string;
  meta_og: string | null;
  meta_seo: string | null;
  modelo_buscas: number | null;
  modelo_imagem: string | null;
  modelo_slug: string | null;
  modelo_titulo: string;
  selos: Array<any>;
  slug: string | null;
  vco_cambio: VcoCambio;
  vco_categoria: VcoCategoria | null;
  vco_combustivel: VcoCombustivel | null;
  vco_cor: VcoCor | null;
  vco_marca: VcoMarca | null;
  vco_modelo: VcoModelo | null;
  vco_veiculos_foto: VcoVeiculosFoto;
}