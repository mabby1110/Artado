import styled from '@emotion/styled';

const color = {
  'gris_claro':'#252525',
  'blanco':'#B8B2C0',
  'gris_oscuro':'#101010',
  'morado':'#170E25'
}

export const CardStyle = styled.div({
  backgroundColor: color['gris_claro'],
  marginBottom: '0.75rem'
})

export const MainSectionStyle = styled.div({
  backgroundColor: color['gris_oscuro'],
  padding: '0.75rem'
})

export const ProjectBarStyle = styled.nav({
  backgroundColor: color['morado']
})
