export const dealsData = [
  {
    id: 1,
    client: {
      name: "Chandan Kalita",
      initials: "CK",
      avatar: "CK"
    },
    dealName: "Chandan Deal",
    dealBudget: 5000,
    assignee: {
      name: "Michael Speed",
      initials: "MS",
      avatar: "MS"
    },
    stage: "Negotiating",
    status: "active",
    createdDate: "2025-06-01"
  },
  {
    id: 2,
    client: {
      name: "michael speed ",
      initials: "MS",
      avatar: "MS"
    },
    dealName: "Accounting",
    dealBudget: 7000,
    assignee: {
      name: "Michael Speed",
      initials: "MS",
      avatar: "MS"
    },
    stage: "Negotiating",
    status: "active",
    createdDate: "2025-06-10"
  },
  {
    id: 3,
    client: {
      name: "Alice Brown",
      initials: "AB",
      avatar: "AB"
    },
    dealName: "Enterprise Contract",
    dealBudget: 50000,
    assignee: {
      name: "John Smith",
      initials: "JS",
      avatar: "JS"
    },
    stage: "Kickedback",
    status: "active",
    createdDate: "2025-06-15"
  },
  {
    id: 4,
    client: {
      name: "Priya Sharma",
      initials: "PS",
      avatar: "PS"
    },
    dealName: "Startup Funding",
    dealBudget: 12000,
    assignee: {
      name: "Amit Patel",
      initials: "AP",
      avatar: "AP"
    },
    stage: "Prospecting",
    status: "active",
    createdDate: "2025-07-01"
  },
  {
    id: 5,
    client: {
      name: "David Lee",
      initials: "DL",
      avatar: "DL"
    },
    dealName: "Expansion Project",
    dealBudget: 25000,
    assignee: {
      name: "Sara Kim",
      initials: "SK",
      avatar: "SK"
    },
    stage: "Closed Won",
    status: "won",
    createdDate: "2025-07-15"
  },
  {
    id: 6,
    client: {
      name: "Fatima Noor",
      initials: "FN",
      avatar: "FN"
    },
    dealName: "Consulting Retainer",
    dealBudget: 8000,
    assignee: {
      name: "Michael Speed",
      initials: "MS",
      avatar: "MS"
    },
    stage: "Negotiating",
    status: "active",
    createdDate: "2025-08-01"
  },
  {
    id: 7,
    client: {
      name: "Lucas Wang",
      initials: "LW",
      avatar: "LW"
    },
    dealName: "Tech Partnership",
    dealBudget: 18000,
    assignee: {
      name: "John Smith",
      initials: "JS",
      avatar: "JS"
    },
    stage: "Prospecting",
    status: "active",
    createdDate: "2025-08-15"
  },
  {
    id: 8,
    client: {
      name: "Maria Garcia",
      initials: "MG",
      avatar: "MG"
    },
    dealName: "Annual License",
    dealBudget: 15000,
    assignee: {
      name: "Amit Patel",
      initials: "AP",
      avatar: "AP"
    },
    stage: "Closed Lost",
    status: "lost",
    createdDate: "2025-09-08"
  }
];

export const pipelineStages = [
  {
    name: "Negotiating",
    deals: [
      {
        id: 1,
        client: {
          name: "Chandan Kalita",
          initials: "CK",
          avatar: "CK"
        },
        dealName: "Chandan Deal",
        dealBudget: 5000,
        assignee: {
          name: "Michael Speed",
          initials: "MS",
          avatar: "MS"
        },
        stage: "Negotiating",
        status: "active",
        createdDate: "2025-06-01"
      },
      {
        id: 2,
        client: {
          name: "Michael speed",
          initials: "MS",
          avatar: "MS"
        },
        dealName: "Accounting",
        dealBudget: 7000,
        assignee: {
          name: "Michael Speed",
          initials: "MS",
          avatar: "MS"
        },
        stage: "Negotiating",
        status: "active",
        createdDate: "2025-06-10"
      },
      {
        id: 6,
        client: {
          name: "Fatima Noor",
          initials: "FN",
          avatar: "FN"
        },
        dealName: "Consulting Retainer",
        dealBudget: 8000,
        assignee: {
          name: "Michael Speed",
          initials: "MS",
          avatar: "MS"
        },
        stage: "Negotiating",
        status: "active",
        createdDate: "2025-08-01"
      }
    ],
    totalValue: 20000,
    count: 3
  },
  {
    name: "Kickedback",
    deals: [
      {
        id: 3,
        client: {
          name: "Alice Brown",
          initials: "AB",
          avatar: "AB"
        },
        dealName: "Enterprise Contract",
        dealBudget: 50000,
        assignee: {
          name: "John Smith",
          initials: "JS",
          avatar: "JS"
        },
        stage: "Kickedback",
        status: "active",
        createdDate: "2025-06-15"
      }
    ],
    totalValue: 50000,
    count: 1
  },
  {
    name: "Prospecting",
    deals: [
      {
        id: 4,
        client: {
          name: "Priya Sharma",
          initials: "PS",
          avatar: "PS"
        },
        dealName: "Startup Funding",
        dealBudget: 12000,
        assignee: {
          name: "Amit Patel",
          initials: "AP",
          avatar: "AP"
        },
        stage: "Prospecting",
        status: "active",
        createdDate: "2025-07-01"
      },
      {
        id: 7,
        client: {
          name: "Lucas Wang",
          initials: "LW",
          avatar: "LW"
        },
        dealName: "Tech Partnership",
        dealBudget: 18000,
        assignee: {
          name: "John Smith",
          initials: "JS",
          avatar: "JS"
        },
        stage: "Prospecting",
        status: "active",
        createdDate: "2025-08-15"
      }
    ],
    totalValue: 30000,
    count: 2
  },
  {
    name: "Closed Won",
    deals: [
      {
        id: 5,
        client: {
          name: "David Lee",
          initials: "DL",
          avatar: "DL"
        },
        dealName: "Expansion Project",
        dealBudget: 25000,
        assignee: {
          name: "Sara Kim",
          initials: "SK",
          avatar: "SK"
        },
        stage: "Closed Won",
        status: "won",
        createdDate: "2025-07-15"
      }
    ],
    totalValue: 25000,
    count: 1
  },
  {
    name: "Closed Lost",
    deals: [
      {
        id: 8,
        client: {
          name: "Maria Garcia",
          initials: "MG",
          avatar: "MG"
        },
        dealName: "Annual License",
        dealBudget: 15000,
        assignee: {
          name: "Amit Patel",
          initials: "AP",
          avatar: "AP"
        },
        stage: "Closed Lost",
        status: "lost",
        createdDate: "2025-09-08"
      }
    ],
    totalValue: 15000,
    count: 1
  }
];

export const totalStats = {
  totalDeals: 8,
  totalRevenue: 81817
};
