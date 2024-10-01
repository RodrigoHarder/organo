import { useRecoilValue } from 'recoil';
import { identificacaoDosCampos } from '../states/atom';

export function useIdentificacaoDosCampos(campo) {
  const identificacao = useRecoilValue(identificacaoDosCampos);
  
  return identificacao[campo] || { label: '', placeholder: '' };
}