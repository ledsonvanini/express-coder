import { produtos } from "@/core";

export default function PaginaProduto(props: any) {
  const id = +props.params.id;
  const produto = produtos.find((produto) => produto.id === id);
  return <div>Produto: {produto?.nome}</div>;

  // 1 HORA DE VÍDEO
  //https://escola.formacao.dev/eventos/sala/gamer-store-mercado?aula=6b6d2d27-e180-45b5-8ee7-ca188622d0fd
}
