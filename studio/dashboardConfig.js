export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f74b8af06c67b13be46d3ff',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wquuaoah',
                  apiId: 'fc9ba575-daa2-4c25-8da9-a2c93666de95'
                },
                {
                  buildHookId: '5f74b8b07a761417ada7e6b6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rfrj6eny',
                  apiId: '0b282456-9151-4c4f-bfc0-05adaeafc1c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamjmitch/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rfrj6eny.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
