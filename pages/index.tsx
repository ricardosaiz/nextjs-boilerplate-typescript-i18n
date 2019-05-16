import * as React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { withNamespaces } from '../i18n'

type Props = {
  t: (arg0: string) => React.ReactNode
}


const IndexPage = ({ t }: Props) => {
  return (
    <Layout title="Index title">
      <Title>{t('title')}</Title>
    </Layout>
  )
}

IndexPage.getInitialProps = async () => ({ namespacesRequired: ['common'] })

const Title = styled.h1`
  color: salmon;
`

export default withNamespaces('common')(IndexPage);
