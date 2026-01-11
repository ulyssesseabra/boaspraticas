export default {
    base: '/boasPraticas/', 
    title: 'Boas Práticas',
    themeConfig: {
      nav: [
        { text: 'Início', link: '/' },
        { text: 'Estrutura Padrão', link: '/estruturaProjeto' }
      ],
      sidebar: [
        {
          text: 'Documentação',
          items: [
            { text: 'Início', link: '/' },
            { text: 'Guia Padronização CSharp', link: '/guia_padronizacao_csharp' },
            { text: 'Design Patterns', link: '/DesignPatterns' },
            { text: 'Estrutura Padrão', link: '/estruturaProjeto' },
            { text: 'Conceitos', items: [{text:"CRUD", link:"/crud"},{text:"DTO", link:"/dto"},{text:"REST", link:"/rest"}] },
            
          ]
        }
      ]
    }
  }
  