export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f4ba8a386e5375958edbad8',
                  title: 'Sanity Studio',
                  name: 'kompetanseprogram-sanity-studio-3drd3qkn',
                  apiId: '9f6cf921-1519-494d-a329-dbb1a5af97dc'
                },
                {
                  buildHookId: '5f4ba8a3281ab6b5795f602b',
                  title: 'Landing pages Website',
                  name: 'kompetanseprogram-sanity-web',
                  apiId: 'c63f7c05-9d86-48f1-a0a8-20a5cab19929'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HeleneGrini/kompetanseprogram-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kompetanseprogram-sanity-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
