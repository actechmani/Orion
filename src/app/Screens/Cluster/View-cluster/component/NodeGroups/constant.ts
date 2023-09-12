export const nodeGroupColumn = [
    {
        key: 'Node Group Name',
        name: 'Node Group Name',
    },
    {
        key: 'Instance Type',
        name: 'Instance Type',
    },

    {
        key: 'Min',
        name: 'Min',
    },
    {
        key: 'Max',
        name: 'Max',
    },
    {
        key: 'Desired Size',
        name: 'Desired Size',
    },
    // {
    //     key: 'Projected Min',
    //     name: 'Projected Min',
    // },
    // {
    //     key: 'Projected Max',
    //     name: 'Projected Max',
    // },
    {
        key: 'Status',
        name: 'Status',
    },
    {
        key: 'Next Schedule',
        name: 'Next Schedule',
    },
    {
        key: 'Modified By',
        name: 'Modified By',
    },
    {
        key: 'Modified At',
        name: 'Modified At',
    },
    {
        key: 'Action',
        name: 'Action',
    },
];

export const NODE_GROUP_INSTANCES = [
    {
        key: 'Instance Id',
        name: 'Instance Id',
    },
    {
        key: 'Instance Type',
        name: 'Instance Type',
    },
];
export const nodeGroupList = [
    {
        name: 'cloudtrust-gitopsv2-eks-qa-usw2-worker-0',
        min: 0,
        max: 3,
        size: 4,
        status: 'Active',
        sleep: 'Mar 25th 2023, 12:05AM PST',
        wake: 'Mar 27th 2023, 12:05AM PST',
        modifiedBy: 'pthimmappa@informatica.com',
        modifiedAt: 'Mar 1st 2023, 12:05AM',
    },
    {
        name: 'cloudtrust-gitopsv2-eks-qa-usw2-worker-1',
        min: 0,
        max: 5,
        size: 2,
        status: 'Sleep',
        modifiedBy: 'pthimmappa@informatica.com',
        modifiedAt: 'Mar 1st 2023, 12:05AM',
    },
];

export const STATUS_BADGE_COLOR = {
    'Active': 'badge-success',
    'Pending': 'badge-warning',
    'Error': 'badge-error',
    'Sleep': 'badge-info',
};


export const ACTIVITY_COLUMNS = [
    // {
    //     key: 'description',
    //     name: 'Description',
    // },
    {
        key: 'type',
        name: 'Type',
    },
    {
        key: 'registerAt',
        name: 'Register At',
    },
    {
        key: 'description',
        name: 'Description',
    },
]

export const ACTIVITY_FORM_INITIAL_STATE = {
    isShowNodeGroupDetails: false,
    nodeGroupInfo: {},
    nodeGroupInstances: [],
    activities: [],
    nodeGroupActivities: {
        paginationInfo: {
            totalPages: 0,
            totalRecords: 0,
        },
        results: [],
    },
}