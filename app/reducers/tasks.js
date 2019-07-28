const tasksInit = {
  orgainisations: [
    {
      id: ''
      name: '',
      jobs: [1,2,3]
    }
  ],
  jobs: [
    {
      name: ''
      organisation_id: 1,
      task_id: 1
    }
  ],
  tasks: [
    {
      id: 1,
      organisation_id: 'Org1',
      job_id: 'Job1',
      name: 'Task1',
    }
  ]
  user: {
    id: '',
    name: '',
    password: '',
  }
  entries: [
    {
      id: 1,
      user_id: 1
      task_id: 1,
      name: 'entry1',
      startDateTime: 0,
      endDateTime: 0,
      duration: 0,
      currentState: 'stopped'
    }
  ]
};
