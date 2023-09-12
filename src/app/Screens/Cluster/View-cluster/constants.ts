const viewClusterInitialState = {
    createdBy: '',
    modifiedBy: '',
    createdAt: null,
    modifiedAt: null,
    id: '',
    tenantId: 'apigw',
    name: '',
    status: '',
    cloudType: '',
    env: '',
    accountId: '',
    region: '',
    k8sVersion: '',
    controlPlaneIAMRole: '',
    bluePrintDetails: {},
    instances: {},
    tags: {},
    metadata: {},
    networkDetails: {},
    clusterScheduleId: null,
    asg: [],
};

const DEFAULT_SCHEDULES_PROPERTIES = [
    {
        label: 'No Schedule',
        value: 'NO_SCHEDULE',
        id: 'NO_SCHEDULE',
    },
    {
        label: 'Create Schedule',
        value: 'CREATE_SCHEDULE',
        id: 'CREATE_SCHEDULE',
    },
];

const initialStateForSchedule = {
    label: 'No Schedule',
    value: 'NO_SCHEDULE',
    id: 'NO_SCHEDULE',
    detailedCronExpression: '',
};

export {
    viewClusterInitialState,
    initialStateForSchedule,
    DEFAULT_SCHEDULES_PROPERTIES,
};