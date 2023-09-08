export const dashboardData = [
  {
    id: 1,
    name: 'Cluster',
    icon: 'cluster',
    text: ' Manage clusters easily from here to ensure high availability, reliability, and performance of the cluster resources',
    navigation: 'cluster-service',
  },
  {
    id: 2,
    name: 'Service Catalog',
    icon: 'serviceStack',
    text: "Organize and operate services from one platform Orion's Service catalog ends the sprawl of fragmented tools , making it simple for developers to find everything about services like SLOs, Deployments, ownership and more.",
    navigation: 'service/service',
  },

  {
    id: 3,
    name: 'Manage User',
    icon: 'user',
    text: 'Enables administrators to manage resources and provision access based on need and role while keeping digital assets secure',
    navigation: '/entitlements',
  },
  {
    id: 4,
    name: 'Image Artifactory',
    icon: 'docker',
    text: 'A centralized location used to store and manage binary artifacts generated during the software development process.',
    navigation: '/image-service',
  },
  {
    id: 5,
    name: 'Infrastructure self service',
    icon: 'infra',
    text: 'Lets users manage IT infrastructure resources on their own, without direct intervention or assistance from IT administrators or support staff.',
    navigation: '/ops-hub/self-service',
  },
  {
    id: 6,
    name: 'Environment',
    icon: 'cloud',
    text: 'Create & manage environments around any code commit, for performance testing, quality assurance (QA), data migrations, sales demos, production deployment and more',
    navigation: '/env/environments',
  },
  {
    id: 7,
    name: 'Cost Details',
    icon: 'faDollar',

    text: [
      {label: 'Environment Costs', value: '$550'},
      {label: 'Cluster Costs', value: '$4907'},
    ],
    navigation: '/',
  },
  {
    id: 8,
    name: 'Cloud Management service',
    icon: 'cloudResourceEntity',

    text: ['AWS', 'GCP', 'Azure'],
    navigation: '/image-service-ubi',
  },
]
